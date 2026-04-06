import './ResultContainer.scss';
import SortableBlock from '../Blocks/SortableBlock';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import Container from '../Container/Container';
import { useTranslation } from 'react-i18next';
import { i18nKeys } from '@/i18n/i18n-keys';
import { AsyncSorterBlock } from '@/types/asyncSorter';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import OverlayBlock from '../Blocks/OverlayBlock';
import { useState } from 'react';

export const RESULT_CONTAINER_ID = 'droppable';

export default function ResultContainer({
  finalOrder,
  sortingFunc,
}: {
  finalOrder: AsyncSorterBlock[];
  sortingFunc: (oldIndex: number, newIndex: number) => void;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!over || active.id === over.id) return;

    const activeIdStr = String(active.id).replace('sortable-', '');
    const overIdStr = String(over.id).replace('sortable-', '');

    const oldIndex = finalOrder.findIndex((block) => block.id === activeIdStr);
    const newIndex = finalOrder.findIndex((block) => block.id === overIdStr);

    if (oldIndex !== -1 && newIndex !== -1) {
      sortingFunc(oldIndex, newIndex);
    }
  };

  const activeBlock = finalOrder.find((block) => block.id === activeId?.replace('sortable-', ''));

  return (
    <Container borderTitle={t(i18nKeys.asyncSorter.result)} styles={{ width: '60%' }}>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="result-container">
          <SortableContext
            items={finalOrder.map((block) => `sortable-${block.id}`)}
            strategy={horizontalListSortingStrategy}
          >
            {finalOrder.map((block) => (
              <SortableBlock key={block.id} id={block.id} label={block.label} />
            ))}
          </SortableContext>
        </div>

        <DragOverlay>
          {activeId && activeBlock ? <OverlayBlock label={activeBlock.label} /> : null}
        </DragOverlay>
      </DndContext>
    </Container>
  );
}

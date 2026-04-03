import './AsyncSorter.scss';

import { AsyncSorterPayload } from '@/types/asyncSorter';
import Queues from './components/Queues/Queues';
import ResultContainer from './components/ResultContainer/ResultContainer';
import {
  DndContext,
  useSensor,
  useSensors,
  pointerWithin,
  PointerSensor,
  TouchSensor,
  DragOverlay,
  MouseSensor,
} from '@dnd-kit/core';
import { useTranslation } from 'react-i18next';
import { i18nKeys } from '@/i18n/i18n-keys';
import Container from './components/Container/Container';
import DraggableBlock from './components/Blocks/DraggableBlock';
import Button from '@/components/button/button';
import { useAsyncSorter } from './hooks/useAsyncSorter';
import OverlayBlock from './components/Blocks/OverlayBlock';

interface AsyncSorterProps {
  data: AsyncSorterPayload;
  id: string;
}

export default function AsyncSorter({ data, id }: AsyncSorterProps) {
  const {
    handleDragStart,
    handleDragEnd,
    activeId,
    callstack,
    microtasks,
    macrotasks,
    finalOrder,
    currentBlocks,
    handleResultSorting,
  } = useAsyncSorter(data.blocks);
  const { t } = useTranslation();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        tolerance: 5,
        delay: 200,
      },
    }),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  );

  const activeBlock = data.blocks.find((block) => block.id === activeId);

  return (
    <div className="async-sorter" id={id}>
      <div className="async-sorter__header">
        <p className="async-sorter__question">{t(i18nKeys.asyncSorter.question)}</p>
        <p className="async-sorter__instruction">{t(i18nKeys.asyncSorter.instruction)}</p>
      </div>
      <Container borderTitle={t(i18nKeys.asyncSorter.code)} styles={{ width: 'max-content' }}>
        <pre className="async-sorter__code">{data.codeSnippet}</pre>
      </Container>
      <DndContext
        sensors={sensors}
        collisionDetection={pointerWithin}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      >
        <Container borderTitle={t(i18nKeys.asyncSorter.avaibleBlocks)} styles={{ width: '60%' }}>
          <div className="async-sorter__avaible-blocks">
            {currentBlocks.map((block) => (
              <DraggableBlock key={block.id} id={block.id} label={block.code} />
            ))}
          </div>
        </Container>
        <Queues
          callstackBlocks={callstack}
          microtasksBlocks={microtasks}
          macrotasksBlocks={macrotasks}
        />
        <DragOverlay>
          {activeId && activeBlock ? <OverlayBlock label={activeBlock.code} /> : null}
        </DragOverlay>
      </DndContext>
      <ResultContainer finalOrder={finalOrder} sortingFunc={handleResultSorting} />
      <Button content={t(i18nKeys.asyncSorter.btn)} onClick={() => {}} />
    </div>
  );
}

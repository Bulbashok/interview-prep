import './Blocks.scss';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface BlockProps {
  id: string;
  label: string;
}

export default function SortableBlock(props: BlockProps) {
  const { id, label } = props;

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: `sortable-${id}`,
    animateLayoutChanges: () => true,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0 : 1,
    cursor: isDragging ? 'grabbing' : 'grab',
    zIndex: isDragging ? 1000 : 'auto',
    touchAction: 'none',
    position: 'relative',
  } as const;

  return (
    <div className={'block'} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <p className="block__text">{label}</p>
    </div>
  );
}

import './Blocks.scss';

import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface BlockProps {
  id: string;
  label: string;
}

export default function DraggableBlock(props: BlockProps) {
  const { id, label } = props;

  const { setNodeRef, attributes, listeners, transform, isDragging } = useDraggable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0 : 1,
    cursor: isDragging ? 'grabbing' : 'grab',
    zIndex: isDragging ? 1000 : 'auto',
    position: 'relative',
    touchAction: 'none',
    transition: isDragging ? 'none' : undefined,
  } as const;

  return (
    <div className={'block'} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <p className="block__text">{label}</p>
    </div>
  );
}

import './Queues.scss';

import Container from '../Container/Container';
import { useDroppable } from '@dnd-kit/core';
import { AsyncSorterBlock } from '@/types/asyncSorter';
import DraggableBlock from '../Blocks/DraggableBlock';

interface QueuesProps {
  callstackBlocks: AsyncSorterBlock[];
  microtasksBlocks: AsyncSorterBlock[];
  macrotasksBlocks: AsyncSorterBlock[];
}

interface QueueProps {
  title: string;
  id: string;
  blocks: AsyncSorterBlock[];
}

export const queuesIds = {
  callstack: 'callstack',
  microtasks: 'microtasks',
  macrotasks: 'macrotasks',
} as const;

export default function Queues({
  callstackBlocks,
  microtasksBlocks,
  macrotasksBlocks,
}: QueuesProps) {
  const queues = [
    { title: 'Call Stack', id: queuesIds.callstack, blocks: callstackBlocks },
    { title: 'Microtasks', id: queuesIds.microtasks, blocks: microtasksBlocks },
    { title: 'Macrotasks', id: queuesIds.macrotasks, blocks: macrotasksBlocks },
  ];

  const Queue = ({ title, id, blocks }: QueueProps) => {
    const { setNodeRef } = useDroppable({ id: id });

    return (
      <Container borderTitle={title} styles={{ minWidth: '30%' }} setNodeRef={setNodeRef}>
        <div className="queues__blocks">
          {blocks.map((block) => (
            <DraggableBlock key={block.id} id={block.id} label={block.code} />
          ))}
        </div>
      </Container>
    );
  };

  return (
    <div className="queues">
      {queues.map(({ title, id, blocks }) => (
        <Queue key={id} title={title} id={id} blocks={blocks} />
      ))}
    </div>
  );
}

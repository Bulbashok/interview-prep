import { AsyncSorterAnswerData, AsyncSorterBlock } from '@/types/asyncSorter';
import { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useState } from 'react';
import { queuesIds } from '../components/Queues/Queues';

const getBlocks = (blocksIds: string[], initialBlocks: AsyncSorterBlock[]) => {
  return blocksIds
    .map((id) => initialBlocks.find((block) => block.id === id))
    .filter((block): block is AsyncSorterBlock => block !== undefined);
};

export const useAsyncSorter = (initialBlocks: AsyncSorterBlock[]) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const [currentBlocks, setCurrentBlocks] = useState(initialBlocks);
  const [callStackBlocks, setCallstackBlocks] = useState<string[]>([]);
  const [microtasksBlocks, setMicrotasksBlocks] = useState<string[]>([]);
  const [macrotasksBlocks, setMacrotasksBlocks] = useState<string[]>([]);
  const [finalOrderBlocks, setFinalOrderBlocks] = useState<string[]>([]);

  const handleDragStart = (event: DragStartEvent): void => {
    setActiveId(String(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent): void => {
    setActiveId(null);

    const { active, over } = event;

    if (!over) return;

    const currentBlock = String(active.id);

    setCurrentBlocks((prev) => prev.filter((block) => block.id !== currentBlock));

    setCallstackBlocks((prev) => prev.filter((id) => id !== currentBlock));
    setMicrotasksBlocks((prev) => prev.filter((id) => id !== currentBlock));
    setMacrotasksBlocks((prev) => prev.filter((id) => id !== currentBlock));
    setFinalOrderBlocks((prev) => prev.filter((id) => id !== currentBlock));

    switch (over.id) {
      case queuesIds.callstack:
        setCallstackBlocks((prev) => [...prev, currentBlock]);
        break;
      case queuesIds.microtasks:
        setMicrotasksBlocks((prev) => [...prev, currentBlock]);
        break;
      case queuesIds.macrotasks:
        setMacrotasksBlocks((prev) => [...prev, currentBlock]);
        break;
    }

    setFinalOrderBlocks((prev) => [...prev, currentBlock]);
  };

  const handleResultSorting = (oldIndex: number, newIndex: number) => {
    setFinalOrderBlocks((prev) => arrayMove(prev, oldIndex, newIndex));
  };

  const blocksIds: AsyncSorterAnswerData = {
    callstack: callStackBlocks,
    microtasks: microtasksBlocks,
    macrotasks: macrotasksBlocks,
    outputOrder: finalOrderBlocks,
  };

  return {
    handleDragStart,
    handleDragEnd,
    handleResultSorting,
    activeId,
    currentBlocks,
    callstack: getBlocks(callStackBlocks, initialBlocks),
    microtasks: getBlocks(microtasksBlocks, initialBlocks),
    macrotasks: getBlocks(macrotasksBlocks, initialBlocks),
    finalOrder: getBlocks(finalOrderBlocks, initialBlocks),
    blocksIds,
  };
};

import { useState, useMemo, useEffect } from 'react';
import { firestoreService } from '@/services/firestore';
import type { Topic } from '@/types/topic';
import { notify } from '@/utils/notify';

export const useTopicsLibrary = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedTopicName, setSelectedTopicName] = useState('all');
  const [page, setPage] = useState(1);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);

  useEffect(() => {
    const loadData = async () => {
      if (!window.navigator.onLine) {
        notify.error('Offline: Check your internet connection');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const data = await firestoreService.getOrderedCollection<Topic>('topics', 'order', 'asc');
        setTopics(data);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load topics';

        notify.error(errorMessage);
        console.error('Firestore Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredItems = useMemo(() => {
    return topics.filter((item) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        item.title.ru.toLowerCase().includes(query) ||
        item.title.en.toLowerCase().includes(query) ||
        item.tags.some((t: string) => t.toLowerCase().includes(query));
      const matchesLevel = selectedLevel === 'all' || item.difficulty.toString() === selectedLevel;
      const matchesTopic = selectedTopicName === 'all' || item.title.en === selectedTopicName;
      return matchesSearch && matchesLevel && matchesTopic;
    });
  }, [topics, searchQuery, selectedLevel, selectedTopicName]);

  return {
    topics,
    isLoading,
    searchQuery,
    selectedLevel,
    selectedTopicName,
    page,
    activeTopic,
    filteredItems,
    setSearchQuery,
    setSelectedLevel,
    setSelectedTopicName,
    setPage,
    setActiveTopic,
    resetFilters: () => {
      setSearchQuery('');
      setSelectedLevel('all');
      setSelectedTopicName('all');
      setPage(1);
    },
  };
};

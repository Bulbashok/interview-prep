import { Box, CircularProgress } from '@mui/material';
import './mainLibrary.scss';

import ToolbarLibrary from './ToolbarLibrary/toolbarLibrary';
import ActionAreaGrid from './TopicsLibrary/topicsLibrary';
import { TopicLearning } from './components/TopicLearning';

import { useTopicsLibrary } from '@/hooks/useTopicsLibrary';

export default function MainLibrary() {
  const {
    isLoading,
    filteredItems,
    topics,
    activeTopic,
    page,
    searchQuery,
    selectedLevel,
    selectedTopicName,
    setSearchQuery,
    setSelectedLevel,
    setSelectedTopicName,
    setPage,
    setActiveTopic,
    resetFilters,
  } = useTopicsLibrary();

  // import {uploadTopics} from ....
  //   useEffect(() => {
  //   const runMigration = async () => {
  //     try {
  //       console.log('Начинаю миграцию...');
  //       await uploadTopics();
  //       console.log('Миграция завершена успешно!');
  //     } catch (error) {
  //       console.error('Ошибка при выполнении миграции:', error);
  //     }
  //   };

  //   // ВАЖНО: Раскомментировать строку ниже, чтобы данные улетели в базу
  //   // runMigration();

  // }, []);

  if (isLoading) {
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
      >
        <CircularProgress sx={{ color: '#24a0ed' }} />
      </Box>
    );
  }

  return (
    <div className="mainLibrary">
      {activeTopic ? (
        <TopicLearning topic={activeTopic} onBack={() => setActiveTopic(null)} /> //Заглушка
      ) : (
        <>
          <ToolbarLibrary
            topics={topics}
            search={searchQuery}
            onSearch={(v) => {
              setSearchQuery(v);
              setPage(1);
            }}
            level={selectedLevel}
            onLevelChange={(l) => {
              setSelectedLevel(l);
              setPage(1);
            }}
            topic={selectedTopicName}
            onTopicChange={(t) => {
              setSelectedTopicName(t);
              setPage(1);
            }}
          />

          <ActionAreaGrid
            items={filteredItems}
            page={page}
            onPageChange={setPage}
            onReset={resetFilters}
            onCardClick={setActiveTopic}
          />
        </>
      )}
    </div>
  );
}

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
        <TopicLearning topic={activeTopic} />
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

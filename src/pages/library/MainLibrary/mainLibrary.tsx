import { useState, useMemo } from 'react';
import { Button, Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './mainLibrary.scss';

import ToolbarLibrary from './ToolbarLibrary/toolbarLibrary';
import ActionAreaGrid from './TopicsLibrary/topicsLibrary';
import WidgetRender from '../../../widgets/WidgetRender';
import { TOPICS, Topic } from './Topics/topics';

import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

export default function MainLibrary() {
  const { t } = useTranslation();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedTopicName, setSelectedTopicName] = useState('all');
  const [page, setPage] = useState(1);

  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);

  const handleSearch = (v: string) => {
    setSearchQuery(v);
    setPage(1);
  };
  const handleLevelChange = (l: string) => {
    setSelectedLevel(l);
    setPage(1);
  };
  const handleTopicChange = (t: string) => {
    setSelectedTopicName(t);
    setPage(1);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedLevel('all');
    setSelectedTopicName('all');
    setPage(1);
  };

  const filteredItems = useMemo(() => {
    return TOPICS.filter((item) => {
      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        item.title.ru.toLowerCase().includes(query) ||
        item.title.en.toLowerCase().includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesLevel = selectedLevel === 'all' || item.difficulty.toString() === selectedLevel;

      const matchesTopic = selectedTopicName === 'all' || item.title.en === selectedTopicName;

      return matchesSearch && matchesLevel && matchesTopic;
    });
  }, [searchQuery, selectedLevel, selectedTopicName]);

  return (
    <div className="mainLibrary">
      {activeTopic ? (
        <Box sx={{ p: { xs: 2, md: 8 } }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => setActiveTopic(null)}
            sx={{ mb: 4, color: '#24a0ed', textTransform: 'none' }}
          >
            {t(i18nKeys.widgetRender.button)}
          </Button>

          <Typography variant="h4" sx={{ mb: 4, color: '#2c5269', fontWeight: 800 }}>
            {activeTopic.title.en}
          </Typography>

          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <WidgetRender
              topicData={activeTopic} // Весь объект Темы сюда уходит
              onFinish={() => setActiveTopic(null)} // Когда закончились все виджеты
            />
          </Box>
        </Box>
      ) : (
        <>
          <ToolbarLibrary
            search={searchQuery}
            onSearch={handleSearch}
            level={selectedLevel}
            onLevelChange={handleLevelChange}
            topic={selectedTopicName}
            onTopicChange={handleTopicChange}
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

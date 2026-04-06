import './toolbarLibrary.scss';
import SearchElement from '@/components/search/search';
import Levels from '../components/levels/levels';
import Select from '../components/select/select';

import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

import { Topic } from '../Topics/topics';

interface ToolbarLibraryProps {
  topics: Topic[];
  search: string;
  onSearch: (value: string) => void;
  level: string;
  onLevelChange: (level: string) => void;
  topic: string;
  onTopicChange: (topic: string) => void;
}

export default function ToolbarLibrary({
  topics,
  search,
  onSearch,
  level,
  onLevelChange,
  topic,
  onTopicChange,
}: ToolbarLibraryProps) {
  const { t } = useTranslation();

  return (
    <div className="toolBar">
      <div className="toolBar__title-search">
        <h2 className="toolBar__title-search__title">{t(i18nKeys.library.title.title)}</h2>
        <SearchElement value={search} onChange={(e) => onSearch(e.target.value)} />
      </div>
      <div className="toolBar__level-filter">
        <Levels value={level} onChange={onLevelChange} />
        <Select topics={topics} value={topic} onChange={(e) => onTopicChange(e.target.value)} />
      </div>
    </div>
  );
}

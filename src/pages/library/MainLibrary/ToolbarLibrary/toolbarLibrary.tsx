import './toolbarLibrary.scss';
import SearchElement from '@/components/search/search';
import Levels from '../components/levels/levels';
import Select from '../components/select/select';

interface ToolbarLibraryProps {
  search: string;
  onSearch: (value: string) => void;
  level: string;
  onLevelChange: (level: string) => void;
  topic: string;
  onTopicChange: (topic: string) => void;
}

export default function ToolbarLibrary({
  search,
  onSearch,
  level,
  onLevelChange,
  topic,
  onTopicChange,
}: ToolbarLibraryProps) {
  return (
    <div className="toolBar">
      <div className="toolBar__title-search">
        <h2 className="toolBar__title-search__title">Topics for practice</h2>
        <SearchElement value={search} onChange={(e) => onSearch(e.target.value)} />
      </div>
      <div className="toolBar__level-filter">
        <Levels value={level} onChange={onLevelChange} />
        <Select value={topic} onChange={(e) => onTopicChange(e.target.value)} />
      </div>
    </div>
  );
}

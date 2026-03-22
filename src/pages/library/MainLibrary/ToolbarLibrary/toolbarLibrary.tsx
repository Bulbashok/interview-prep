import './toolbarLibrary.scss';

import SearchElement from '@/components/search/search';
import Levels from '../components/levels/levels';
import Select from '../components/select/select';

export default function ToolbarLibrary() {
  return (
    <>
      <div className="toolBar">
        <div className="toolBar__title-search">
          <h2 className="toolBar__title-search__title">Topics for practice</h2>
          <SearchElement />
        </div>
        <div className="toolBar__level-filter">
          <Levels />
          <Select />
        </div>
      </div>
    </>
  );
}

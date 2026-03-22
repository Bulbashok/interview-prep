import './toolbarLibrary.scss';

import SearchElement from '@/components/search/search';

export default function ToolbarLibrary() {
  return (
    <>
      <div className="toolBar">
        <div className="toolBar__title-search">
          <h2 className="toolBar__title-search__title">Topics for practice</h2>
          <SearchElement />
        </div>
      </div>
    </>
  );
}

import './mainLibrary.scss';

import ToolbarLibrary from './ToolbarLibrary/toolbarLibrary';
import ActionAreaGrid from './TopicsLibrary/topicsLibrary';

export default function MainLibrary() {
  return (
    <>
      <div className="mainLibrary">
        <ToolbarLibrary />
        <ActionAreaGrid />
      </div>
    </>
  );
}

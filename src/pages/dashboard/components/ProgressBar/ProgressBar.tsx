import './ProgressBar.scss';

export default function ProgressBar(props: { progress: number }) {
  const { progress } = props;

  return (
    <div className="progress">
      <div className="progress__progressBar">
        <div className="progress__completeBar" style={{ width: `${progress}%` }}></div>
      </div>

      <p className="progress__progressNum">{progress}%</p>
    </div>
  );
}

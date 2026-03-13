import './ProgressBar.scss';

export default function ProgressBar(props: { progress: number }) {
  const { progress } = props;

  return (
    <div className="progress">
      <div className="progress__progress-bar">
        <div className="progress__complete-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <p className="progress__progress-num">{progress}%</p>
    </div>
  );
}

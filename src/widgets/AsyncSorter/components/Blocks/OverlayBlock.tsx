import './Blocks.scss';

export default function OverlayBlock({ label }: { label: string }) {
  return (
    <div className={'block'}>
      <p className="block__text">{label}</p>
    </div>
  );
}

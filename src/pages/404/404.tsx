import catImage from '../../assets/images/cat.png';

const notFoundPageClasses = {
  page: 'not-found',
  title: 'not-found__title',
  subtitle: 'not-found__subtitle',
};

const notFoundTexts = {
  title: '404',
  subtitle: 'okak',
  alt: '404 image',
};

export default function NotFoundPage() {
  return (
    <div className={notFoundPageClasses.page}>
      <h1 className={notFoundPageClasses.title}>{notFoundTexts.title}</h1>
      <img src={catImage} alt={notFoundTexts.alt} />
      <h2 className={notFoundPageClasses.subtitle}>{notFoundTexts.subtitle}</h2>
    </div>
  );
}

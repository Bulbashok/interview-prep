import { Helmet } from 'react-helmet-async';

interface PageTitleProps {
  pageName: string;
  description?: string;
}

export default function PageTitle(props: PageTitleProps) {
  const { pageName, description } = props;

  return (
    <Helmet>
      <title>{pageName}</title>

      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}

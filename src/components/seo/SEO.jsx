import { Helmet, HelmetProvider } from 'react-helmet-async';

export function SEOProvider({ children }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}

export default function SEO({ title, description }) {
  const full = title ? `${title} | Sergio Morales` : 'Sergio Morales';
  return (
    <Helmet>
      <title>{full}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}

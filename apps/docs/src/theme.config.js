import { useRouter } from 'next/router';

const theme = {
  logo: (
    <>
      <span className="mr-2 font-extrabold text-xl">Blitz UI</span>
    </>
  ),
  head: function Head({ title, meta }) {
    const router = useRouter();
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/images/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@blitz_ui" />
        <meta name="twitter:creator" content="@blitz_ui" />
        <meta property="og:type" content="website" />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={meta.description} />
        <meta
          property="og:url"
          content={`https://blitz-ui.vercel.app${router.asPath}`}
        />
        <meta
          property="og:image"
          content={`https://blitz-ui.vercel.app${
            meta.ogImage ?? '/og-image.png'
          }`}
        />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="Blitz UI" />
      </>
    );
  },
  footerEditLink: () => {
    return 'Edit this page on GitHub';
  },
  footerText: () => {
    return <>Proudly made in 🇱🇰 by Nafees Nazik.</>;
  },
  github: 'https://github.com/G3root/blitz-ui',
  projectLink: 'https://github.com/G3root/blitz-ui',
  docsRepositoryBase: 'https://github.com/G3root/blitz-ui/blob/main/packages',
  titleSuffix: ' – Blitz UI',
  search: true,
  unstable_flexsearch: true,
  unstable_staticImage: true,
  floatTOC: true,
  font: false,
  unstable_faviconGlyph: '👋'
};

export default theme;

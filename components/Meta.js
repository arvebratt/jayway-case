import Head from "next/head";

export default function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="./favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Pokemon search engine",
  keywords: "Pokemon, search, engine, arvebratt, autocomplete",
  description: "Alexander Arvebratt's case for Jayway",
};

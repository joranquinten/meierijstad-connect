import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={`${title} | ${data.site.siteMetadata.title}`}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'og:url', content: "https://www.whozinberg.org" },
        { name: 'og:image', content: data.site.siteMetadata.teaserImage },
        { name: 'og:image:secure_url', content: data.site.siteMetadata.teaserImage },
        { name: 'og:locale', content: "en_GB"},
        { name: 'og:image:type', content: "image/jpeg"},
        { name: 'og:image:alt', content: "Whozinberg.org Teaser Image with photo taken from above." },
      ]}
    />
  );
};

export default Head;

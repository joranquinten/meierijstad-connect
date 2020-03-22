import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './footer.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author,
          title,
          email,
          twitter {
            hashtag
          }
        }
      }
    }
  `);

  return (
    <footer className='ui vertical inverted segment'>
      <div className='ui center aligned container'>
        <i className='ui icon copyright' />{new Date().getFullYear()}{' '}{data.site.siteMetadata.title}{' ' }|{' '}<a href={`mailto:${data.site.siteMetadata.email}`}><i className='ui icon envelope' />Write us an email</a>{' '}|{' '}<a href={`https://twitter.com/hashtag/${data.site.siteMetadata.twitter.hashtag}`} target={'_blank'} rel={'noopener noreferrer'}><i className='ui icon twitter' />Follow us on Twitter</a>{' '}|{' '}Built with <i className={'ui icon heart'} />by <a href='https://twitter.com/@mrcfhr' target={'_blank'} rel={'noopener noreferrer'}>{data.site.siteMetadata.author}</a>
      </div>
    </footer>
  );
};

export default Footer;

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    author: 'Marc Fehr',
    title: 'Community Isolation Map',
    description:
      'This is the open source project for building your own community map.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
  ],
};

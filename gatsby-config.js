require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    author: 'Marc Fehr',
    title: 'Community Isolation Map',
    description:
      'This is the open source project for building your own community map.',
    email: 'mail@xyz.com',
    twitter: {
      hashtag: 'yourHashtag',
      handle: 'yourTwitterHandle'
    },
    share: {
      text: 'This is the share text, follow @xyz and #abc',
      hashtags: 'WhosInBerg,Coronavirus,StayTheFuckHome' // separate with commas,
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-161488686-1",
      },
    },
  ],
};

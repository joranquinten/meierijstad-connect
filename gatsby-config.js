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
    teaserImage: "https://www.whozinberg.org/teaser.jpg",
    twitter: {
      hashtag: 'yourHashtag',
      handle: 'yourTwitterHandle'
    },
    share: {
      text: 'This is the share text, follow @xyz and #abc',
      hashtags: 'WhosInBerg,Coronavirus,StayTheFuckHome' // separate with commas,
    },
    menuLinks: [
      {title: 'Home', link: '/', icon: 'map'},
      {title: 'Add', link: '/add', icon: 'plus'},
      {title: 'Contact', link: '/contact', icon: 'info'},
    ],
    mapData: {
      bounds: [
        [18.459692001342773,-34.08692882376707],
        [18.512563705444336,-34.1109517943943]
      ]
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "XX-XXXXXXXXX-X",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          databaseURL: process.env.FIREBASE_URL
        }
      }
    },
    {
      resolve: `gatsby-source-firebase`,
      options: {
        // point to the firebase private key downloaded
        // credential: require('./secret/firebase-creds'),

        credential: {
          "type": process.env.FIREBASE_TYPE,
          "project_id": process.env.FIREBASE_PROJECT_ID,
          "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          "client_email": process.env.FIREBASE_CLIENT_EMAIL,
          "client_id": process.env.FIREBASE_CLIENT_ID,
          "auth_uri": process.env.FIREBASE_AUTH_URI,
          "token_uri": process.env.FIREBASE_TOKEN_URI,
          "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
          "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL
        },

        // your firebase database root url
        databaseURL: process.env.FIREBASE_URL,

        // you can have multiple "types" that point to different paths
        types: [
          // if you're data is really simple, this should be fine too
          {
            type: "MapPoints",
            path: "data/",
          }
        ]
      }
    }
  ],
};

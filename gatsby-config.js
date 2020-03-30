require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    author: 'Joran Quinten',
    title: 'MeierijstadConnect',
    description:
      'Verbindt Meierijstad met elkaar.',
    email: 'connect@qtnconsulting.nl',
    teaserImage: "https://www.meierijstadconnect.nl/teaser.jpg",
    twitter: {
      hashtag: 'meiereijstadconnect',
      handle: 'joranquinten'
    },
    share: {
      text: 'MeierijstadConnect: het informatienetwerk voor de buurt. Help elkaar veilig door de Coronavirus isolatie heen. 👉 http://https://www.meierijstadconnect.nl/',
      hashtags: 'MeierijstadConnect,Coronavirus,Blijfveilig,Houdafstand' // separate with commas,
    },
    menuLinks: [
      {title: 'Home', link: '/', icon: 'map'},
      {title: 'Toevoegen', link: '/add', icon: 'plus'},
      {title: 'Info', link: '/info', icon: 'info'},
    ],
    mapData: {
      bounds: [
        [5.361030,51.652081],
        [5.671147,51.522248]
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
        trackingId: "227139319",
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

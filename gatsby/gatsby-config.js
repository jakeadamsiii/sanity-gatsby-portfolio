import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
    pathPrefix: '/',
    siteMetadata: {
      title: `Portfolio`,
      description: 'portfolio project',
      siteUrl: 'https://www.jake-test.site'
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      'gatsby-plugin-styled-components',
      {
      // this is the name of the plugin you are adding
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: 'tmjey8vq',
          dataset: 'production',
          watchMode: true,
          token: process.env.SANITY_TOKEN,
        },
      },
    ],
  };
  
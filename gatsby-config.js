module.exports = {
  siteMetadata: {
    title: 'The Blues Issue',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'The Blues Issue',
        short_name: 'Blues Issue',
        start_url: '/',
        background_color: '#4A5C9C',
        theme_color: '#B20404',
        display: 'minimal-ui',
        icon: 'src/assets/logo.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'gallery',
        path: `${__dirname}/src/assets/archive/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'hero',
        path: `${__dirname}/src/assets/hero/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'discog',
        path: `${__dirname}/src/assets/discography/`,
      },
    },
  ],
};

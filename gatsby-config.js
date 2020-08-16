module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'Electrical Contractors',
    author: 'AJ',
    description: 'Electrical consultants and EA grade Electrical contractors',
    menuLinks: [
      // {
      //   name: 'Home',
      //   link: '/',
      // },
      // {
      //   name: 'Layouts',
      //   link: '#',
      //   items: [
      //     {
      //       name: 'Left Sidebar',
      //       link: '/left-sidebar',
      //     },
      //     {
      //       name: 'Right Sidebar',
      //       link: '/right-sidebar',
      //     },
      //     {
      //       name: 'No Sidebar',
      //       link: '/no-sidebar',
      //     },
      //     {
      //       name: 'SubMenu',
      //       link: '#',
      //       items: [
      //         {
      //           name: 'Option 1',
      //           link: '#',
      //         },
      //         {
      //           name: 'Option 2',
      //           link: '#',
      //         },
      //         {
      //           name: 'Option 3',
      //           link: '#',
      //         },
      //         {
      //           name: 'Option 4',
      //           link: '#',
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   name: 'Elements',
      //   link: '/elements',
      // },
      {
        name: 'Contact Us',
        link: '#',
        cl: 'button primary',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'SP DESIGN & ENGINEERING',
        short_name: 'SP DESIGN',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-logo.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-offline',
  ],
}

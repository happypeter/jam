module.exports = {
  pathPrefix: `/jam`,
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-catch-links',
    'gatsby-plugin-antd',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ]
}

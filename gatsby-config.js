module.exports = {
    siteMetadata: {
        title: `Perilous Chronicle`,
        description: `Perilous is a project supported by a network of people—including you—who seek to gather and track information on prison uprisings, riots, protests, strikes, and other disturbances within public and private jails, prisons, and detention centers in North America. In this process, we rely on crowdsourced information in addition to local news outlets and our own reporting.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                baseUrl: `www.perilouschronicle.com`,
                includedRouts: ['**/posts', '**/pages'],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `perilous-chronicle`,
                short_name: `perilous`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}

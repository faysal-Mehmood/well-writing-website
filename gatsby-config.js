module.exports = {
    siteMetadata: {
        title: 'PopStack - Share Your Work',
        description: 'PopStack - Share Your Work',

        siteUrl: 'https://www.popstack.ai/',

    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        `gatsby-plugin-scroll-reveal`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.popstack.ai/',
                sitemap: 'https://www.popstack.ai/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'PopStack',
                short_name: 'PopStack',
                start_url: '/',

                icon: 'src/images/gatsby-icon.png',
            },
        },
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
            },
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/markdown`,
                name: 'markdowns',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'markdowns',
            },
        },

        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [{
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                        },
                    },
                    `gatsby-remark-embed-video`,

                    `gatsby-remark-responsive-iframe`,

                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
        },

        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://popstack.us6.list-manage.com/subscribe/post?u=07bca3f7895bbbe1e7211e2d0&amp;id=513252f2c1', // string; add your MC list endpoint here; see instructions below
                timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
            },
        },
        {
            resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
            options: {
                develop: true, // Activates purging in npm run develop
                purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
            },
        }, // must be after other CSS plugins
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
}
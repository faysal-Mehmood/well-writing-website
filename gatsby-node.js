const path = require(`path`);

//doc dynamic
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogTemplate = path.resolve(`src/template/blogTemplate.js`);


	return graphql(
        `
            query loadPagesQuery {
                allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
                    nodes {
                        frontmatter {
                            authors
                            authorimage
                            description
                            date
                            featuredimage
                            featuredpost
                            title
                            templateKey
                            category
                        }
                        
                    }
                
                }
            }
        `
	).then(result => {
		if (result.errors) {
			throw result.errors;
		}
		const nodes = result.data.allMarkdownRemark.nodes;

		nodes.map(edge => {

			createPage({
				// Path for this page — required
				path: '/blog/' + edge.frontmatter.title.replace(/ /gi, '_'),
				component: blogTemplate,
				context: {
					alldata: edge
				}


			});
		});
	});
};
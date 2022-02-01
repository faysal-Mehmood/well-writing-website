/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"


function SEO({ description, lang, meta, title, url }) {


	const metaDescription = 'WELL-WRITTEN'

	var urlTitle = ""
	if (typeof window !== 'undefined') {
		urlTitle = window?.location?.href
	}
	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={'WELL-WRITTEN'}
			titleTemplate={'WELL-WRITTEN'}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:image`,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:url`,
					content: urlTitle,
				},

				{
					name: `twitter:creator`,
					content: ``,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:card`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		>

		</Helmet>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default SEO
import React, { useState, useEffect } from "react";
import Layout from '../components/layout'
import MainBlog from '../components/mainblog'
import '../components/layout/styles.scss'
import SEO from '../components/layout/seo'

const BlodDetail = ({ pageContext, footerPage, redirecting, FooterPage2 }) => {
	const [blogNav, setBlogNav] = useState(false);
	const backColort = () => {
		if (window.scrollY > 100) {
			setBlogNav(true)
		} else {
			setBlogNav(false)
		}
	};


	useEffect(() => {
		window.addEventListener('scroll', backColort);
	}, []);
	return (
		<div className={blogNav ? "terms-page" : "bg-trasparent"} >
			{typeof window !== 'undefined' && (window.innerWidth < 768 ?
				<>
					<Layout btnPage={'Blog'} FooterPage2={'Blog'} redirecting={'Blog'} >
						<SEO />
						<MainBlog />
					</Layout>
				</>
				:
				<>
					<Layout btnPage={'Blog'} footerPage={'Blog'} redirecting={'Blog'} >
						<SEO />
						<MainBlog />
					</Layout>
				</>
			)}

		</div>
	)


};
export default BlodDetail;
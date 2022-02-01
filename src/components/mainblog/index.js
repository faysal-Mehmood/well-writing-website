import React, { useState, useEffect } from 'react'
import ideaimg from '../../assets/images/ideas-people.svg'
import { useStaticQuery, graphql, Link } from 'gatsby';
import Slider from "react-slick"
import { Formik } from "formik";
import Swal from 'sweetalert2'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import gif from "../../assets/images/1487.gif";
import './styles.scss'
import AboutSocial from "../logocontainer";

export const Index = () => {
	const [readData, setReadData] = useState('More...');
	const [dataList, setDataList] = useState([]);
	const [bghober, setBgHover] = useState(false)
	const [applyform2, setapply2] = useState(false)

	const data = useStaticQuery(graphql`
        query blogpageOne {
            allMarkdownRemark (filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
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

        },

    `);

	const {
		allMarkdownRemark: { nodes }
	} = data;


	useEffect(() => {
		setDataList(nodes);
	}, [nodes]);

	console.log(data);

	let settings = {
		dots: false,
		infinite: false,
		slidesToShow: 1.2,
		className: "center",
		centerMode: false,
		slidesToScroll: 1,
		variableWidth: false,
		pauseOnHover: false,
		cssEase: "linear",
		arrows: false,
	}

	return (
		<>
			<div className="main-blogs">
				{dataList.map((item, index) => {
					return item.frontmatter.featuredpost && (
						<Link style={{ textDecoration: "none" }} to={`/blog/${item.frontmatter.title.replace(/ /gi, '_')}`}>
							<div className="Top-Blog" onMouseEnter={() => setBgHover(false)} onMouseLeave={() => setBgHover(false)}>
								<div
									style={{
										backgroundImage: `url(${item.frontmatter.featuredimage})`,
										backgroundPosition: 'center',
										backgroundSize: 'cover',
										backgroundRepeat: 'no-repeat'
									}}
									className="Top-Author-img" />
								<div className="Top-Author-description">
									<p className="Top-ctagary">{item.frontmatter.category}</p>
									<h5 className="Top-Aut-title">{item.frontmatter.title}</h5>

									{typeof window !== 'undefined' && (window.innerWidth < 768 ?
										<p className="top-Aut-detall">
											{item.frontmatter.description?.slice(0, 100)}  {readData === 'More...' && <span></span>}
											{readData === 'less' && <span className={readData === 'less' ? 'second-content' : 'second-content expand'}>
												{item.frontmatter.description.slice(85, item.frontmatter.description.length)}
											</span>}

											<span className="readmore" onClick={() => {
												if (readData === 'More...') {
													setReadData('less')
												} else {
													setReadData('More...')
												}
											}}>{readData}</span>

										</p>
										:
										<p className="top-Aut-detall">
											{item.frontmatter.description?.slice(0, 107) + "..."}
										</p>
									)}

								</div>
							</div>
						</Link>
					)
				})}
			</div>
			<AboutSocial />
			<br /><br /><br />
			{typeof window !== 'undefined' && (window.innerWidth < 768 ?

				<div className="blog-tow">
					<Slider {...settings}>
						{dataList.map((item, index) => {
							return !item.frontmatter.featuredpost && item.frontmatter.description && (
                            
								<Link style={{ textDecoration: "none" }} to={`/blog/${item.frontmatter.title.replace(/ /gi, '_')}`}> <div className="bottom-blogs">
                                    
									<div
										style={{
											backgroundImage: `url(${item.frontmatter.featuredimage})`,
											backgroundPosition: 'center',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat'
										}}
										className="Bot-Author-img" />
									<div className="Bot-Author-description">
										<p className="Bot-ctagary">{item.frontmatter.category}</p>
										<h5 className="Bot-Aut-title">{item.frontmatter.title.length > 40 ? `${item.frontmatter.title.slice(0, 40)} ...` : item.frontmatter.title}</h5>
									</div>
								</div></Link>
                          
							)
						})}
					</Slider>
				</div>
				:

				<div className="blog-tow" onMouseEnter={() => setBgHover(false)} onMouseLeave={() => setBgHover(false)}>
					{dataList.map((item, index) => {
						return !item.frontmatter.featuredpost && item.frontmatter.description && (
							<Link style={{ textDecoration: "none" }} to={`/blog/${item.frontmatter.title.replace(/ /gi, '_')}`}> <div className="bottom-blogs">
								<div
									style={{
										backgroundImage: `url(${item.frontmatter.featuredimage})`,
										backgroundPosition: 'center',
										backgroundSize: 'cover',
										backgroundRepeat: 'no-repeat'
									}}
									className="Bot-Author-img" />
								<div className="Bot-Author-description">
									<p className="Bot-ctagary">{item.frontmatter.category}</p>
									<h5 className="Bot-Aut-title">{item.frontmatter.title.length > 50 ? `${item.frontmatter.title.slice(0, 50)} ...` : item.frontmatter.title}</h5>
								</div>
							</div></Link>
						)
					})}
				</div>

			)}
            
		</>
	)
}
export default Index;
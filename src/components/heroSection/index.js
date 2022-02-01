import React, {
	useRef,
	useEffect,
	useState,
} from 'react';
import Card from './card';
import './styles.scss';
import { useStaticQuery, graphql } from 'gatsby';
const Index =
	() => {

		const services =
			useStaticQuery(graphql`
			query services {
				allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "services"}}}) {
					nodes {
					frontmatter {
						intro_cards {
						Cards {
							cardDiscription
							card_image
							card_text
						}
						}
						Top_heading_one
						Top_heading_two
					}
					}
				}
			}
		`);

		console.log(services)
		return (
			<>
				<div className='main-herosection'>
					<div className='top-hero-text'>
						<h3>
							{services?.allMarkdownRemark?.nodes[0]?.frontmatter?.Top_heading_one}
						</h3>
					</div>
					<div
						className='second-main'

					>
						<div className='top-hero-text'>
							<p>
								{services?.allMarkdownRemark?.nodes[0]?.frontmatter?.Top_heading_two}
							</p>
						</div>
						<Card
							data={
								services?.allMarkdownRemark?.nodes[0]?.frontmatter?.intro_cards.Cards
							}

						/>

					</div>
				</div>
			</>
		);
	};

export default Index;

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import BackArow from '../../assets/images/blogBackArow.svg'
import faceBook from '../../assets/images/blogIcons/Facebook.svg'
import faceBook2 from '../../assets/images/blogIcons/Facebook2.svg'
import twitter from '../../assets/images/blogIcons/Twitter.svg'
import twitter2 from '../../assets/images/blogIcons/Twitter2.svg'
import whatsapp from '../../assets/images/blogIcons/Whatsapp.svg'
import whatsapp2 from '../../assets/images/blogIcons/Whatsapp2.svg'
import Linkedin from '../../assets/images/blogIcons/Linkedin.svg'
import Linkedin2 from '../../assets/images/blogIcons/Linkedin2.svg'
import { navigate, Link } from 'gatsby'
import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	LinkedinShareButton,
} from "react-share";
import './styles.scss'
import { map } from 'lodash'
import AnchorTAgs from './anchortags'


const Index = ({ blogdetail }) => {

	const [faceBookState, setFaceBook] = useState(faceBook);
	const [twitterState, setTwitter] = useState(twitter);
	const [whatAppState, setWhatApp] = useState(whatsapp);
	const [inkedState, setLinked] = useState(Linkedin);

	const dateconvert = new Date(blogdetail.frontmatter.date);


	const ContetnData = blogdetail.frontmatter.description?.split('\n\n')

	return (
		<>

			<div className="blog-page">
				<Link to="/blog" className="back-page">
					<img className="back-img" src={BackArow} alt="blogimg" />
					<p className="back-Arow">Back</p>
				</Link>

				<div className="Author-Catagaris">
					<p className="Catagri">{blogdetail.frontmatter.category}</p>
					<h5 className="Title">{blogdetail.frontmatter.title}</h5>
					<div className="Author-detall">
						<img src={blogdetail.frontmatter.authorimage} alt="author" className="Author-img" />
						<p className="Author-name">{blogdetail.frontmatter.authors}</p>
						<p className="Author-Date">{dateconvert.toDateString()}</p>
					</div>
					<div className="shear-icon">
						< FacebookShareButton url={`${typeof window !== 'undefined' && window.location.origin}/blogs/${blogdetail.frontmatter.title.replace(/ /gi, '_')}`}>
							<img onMouseEnter={() => setFaceBook(faceBook2)} onMouseLeave={() => setFaceBook(faceBook)} src={faceBookState} alt="f" />
						</ FacebookShareButton>

						< TwitterShareButton url={`${typeof window !== 'undefined' && window.location.origin}/blogs/${blogdetail.frontmatter.title.replace(/ /gi, '_')}`}>
							<img onMouseEnter={() => setTwitter(twitter2)} onMouseLeave={() => setTwitter(twitter)} src={twitterState} alt="f" />
						</ TwitterShareButton>

						<   LinkedinShareButton url={`${typeof window !== 'undefined' && window.location.origin}/blogs/${blogdetail.frontmatter.title.replace(/ /gi, '_')}`}>
							<img onMouseEnter={() => setLinked(Linkedin2)} onMouseLeave={() => setLinked(Linkedin)} src={inkedState} alt="f" />
						</   LinkedinShareButton>

						<  WhatsappShareButton url={`${typeof window !== 'undefined' && window.location.origin}/blogs/${blogdetail.frontmatter.title.replace(/ /gi, '_')}`}>
							<img onMouseEnter={() => setWhatApp(whatsapp2)} onMouseLeave={() => setWhatApp(whatsapp)} src={whatAppState} alt="f" />
						</  WhatsappShareButton>

					</div>
				</div>
				<div className="Mane-Blog">
					<div style={{
						backgroundImage: `url(${blogdetail.frontmatter.featuredimage})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}} className="blog-Img" />
					<div className="blog-Description">
						{ContetnData?.map((items) => {
                       
							return items.includes('youtubeCustomCMSCheck: ') ?
								(
									<iframe src={items.split('youtubeCustomCMSCheck: ')[1]}></iframe>
								)
								: items.includes('metaanchorlinktag: ') ?
									(
										<AnchorTAgs datatest={items} />
									)
									:
									(<ReactMarkdown>
										{items}
									</ReactMarkdown>)
						})}
					</div>
				</div>
			</div>

		</>
	)
}
export default Index;

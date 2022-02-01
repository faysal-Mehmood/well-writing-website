import React from 'react';
import {
  useStaticQuery,
  graphql,
} from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Button,
} from 'react-bootstrap';
import logo from '../../assets/images/wallImages/navLogo.png';
import { Link } from 'gatsby';
import './styles.scss';

const TopNavbar =
  ({
    page,
    stickypage,
    redirecting,
    btnPage,
  }) => {

    const HeaderSection =
      useStaticQuery(graphql`
      query headersection {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "header"}}}) {
      nodes {
        frontmatter {
        logo
        }
      }
      }
      }
    `);

    return (
      <>
        <Navbar
          collapseOnSelect
          expand='lg'
          variant='dark'
          className='navbar'
        >
          <Link
            to='/'
            style={{
              textDecoration:
                'none',
            }}
          >
            <Navbar.Brand className='logo-text-tow '>
              <img
                src={
                  HeaderSection?.allMarkdownRemark?.nodes[0]?.frontmatter?.logo
                }
                alt='jd'
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto navbar-nav'>
              <Link
                style={{
                  textDecoration:
                    'none',
                }}
                className={
                  btnPage ===
                  'Blog'
                    ? 'text-dark nav-login active-blog'
                    : 'text-dark nav-login'
                }
                to='/writingservices'
              >

                Order Writing Services
              </Link>
              <Link
                style={{
                  textDecoration:
                    'none',
                }}
                className='text-dark nav-login'
                // to={
                //   loginLink
                //     .frontmatter
                //     .link
                // }
                to='/about'
                target='_blank'
              >

                About
              </Link>
              <Link
                style={{
                  textDecoration:
                    'none',
                }}
                className='text-dark nav-login'
                // to={
                //   loginLink
                //     .frontmatter
                //     .link
                // }
                to='/ourteam'
                target='_blank'
              >

                Our Team
              </Link>
              <Link
                style={{
                  textDecoration:
                    'none',
                }}
                className='text-dark nav-login'
                // to={
                //   loginLink
                //     .frontmatter
                //     .link
                // }
                to='/writertraining'
                target='_blank'
              >

                Writer Training
              </Link>
              <Link
                style={{
                  textDecoration:
                    'none',
                }}
                className='text-dark nav-login'
                to='/blogs'
                target='_blank'
              >

                Blogs
              </Link>
              <Link
                style={{
                  textDecoration:
                    'none',
                }}
                className='text-dark nav-login'
                to='/contactus'
                target='_blank'
              >

                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  };

export default TopNavbar;

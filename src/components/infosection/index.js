// import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import Informachan from './informachan'
// import Infoblock from './infoblock'
// import './styles.scss'
// const Index = () => {
//     const informaction = useStaticQuery(graphql`
//     query informedSection {
//         allMarkdownRemark {
//             nodes {
//                 frontmatter {
//                         templateKey
//                         heading_top
//                     insyn {
//                         insynch {
//                             insyn_image
//                             insyn_image_description
//                         }
//                     }
//                     intarg {
//                         onTarget {
//                             onTarg_image_description
//                             ontarg_image
//                         }
//                     }
//                     intro {
//                         informed {
//                             infor_image
//                             infor_image_description
//                         }
//                         logos {
//                             authorname
//                             discription
//                             image
//                         }
//                     }
//                     heading_one
//                     heading_two
//                     heading_three
//                 }
//             }
//         }
//     }
  
//   `);

//     const { allMarkdownRemark: { nodes }
//     } = informaction;
//     // console.log(informaction);
//     const heading = nodes.filter(data => data.frontmatter.templateKey === "info-heading")?.[0]
//     const blocks = nodes.filter(data => data.frontmatter.templateKey === "cotes-slider")?.[0]
//     const inform = nodes.filter(data => data.frontmatter.templateKey === "informed-page")?.[0]
//     const insyn = nodes.filter(data => data.frontmatter.templateKey === "in-synch")?.[0]
//     const onTar = nodes.filter(data => data.frontmatter.templateKey === "on-Target")?.[0]
//     // console.log(informed);
//     return (
//         <>
//             <div className="main-infosec">
//                 <div className="info-heading">
//                     <h3>{heading.frontmatter.heading_top}</h3>
//                 </div>
//                 <Informachan data={inform.frontmatter} insy={insyn.frontmatter} onTr={onTar.frontmatter} />
//                 <Infoblock data={blocks.frontmatter} />
//             </div>
//         </>
//     )
// }

// export default Index

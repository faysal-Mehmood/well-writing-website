import React from 'react'
import Slider from "react-slick"
import logo1 from '../../assets/images/Top-Row/Asana.png'
import logo2 from '../../assets/images/Top-Row/Box.svg'
import logo3 from '../../assets/images/Top-Row/Calendly.svg'
import logo4 from '../../assets/images/Top-Row/Dropbox.svg'
import logo5 from '../../assets/images/Top-Row/Gsuit.svg'
import logo6 from '../../assets/images/Top-Row/Quickbooks.png'
import logo7 from '../../assets/images/Top-Row/Jira.svg'
import logo8 from '../../assets/images/Top-Row/Looker.svg'
import logo9 from '../../assets/images/Top-Row/Microsoft365.svg'
import logo10 from '../../assets/images/Top-Row/Monday.svg'
import logo11 from '../../assets/images/Top-Row/Notion.png'
import logo12 from '../../assets/images/Top-Row/Trello.svg'

import logo01 from '../../assets/images/Bottom-Row/Guru.svg'
import logo02 from '../../assets/images/Bottom-Row/Linkedin.svg'
import logo03 from '../../assets/images/Bottom-Row/Mas-Viva.svg'
import logo04 from '../../assets/images/Bottom-Row/Salesforce.svg'
import logo05 from '../../assets/images/Bottom-Row/Slack.svg'
import logo06 from '../../assets/images/Bottom-Row/Twitter.svg'
import logo07 from '../../assets/images/Bottom-Row/Whatsapp.svg'
import logo08 from '../../assets/images/Bottom-Row/Workplace.svg'
import logo09 from '../../assets/images/Bottom-Row/Zoom.svg'
import logo00 from '../../assets/images/Bottom-Row/Teams.svg'
const Logocont = ({ logoHead, Tlogo, Blogo }) => {


    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    autoplaySpeed: 1400,

                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    autoplaySpeed: 1400,

                }
            }
        ]
    };
    let settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    autoplaySpeed: 1400,

                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                    autoplaySpeed: 1400,

                }
            }
        ]
    };
    console.log(Tlogo.intro.logos);
    return (
        <>
            <div className="main-logo">
                <p>{logoHead.heading_top}</p>

                <div className="logo-areya">

                    <Slider {...settings}>
                        {Tlogo.intro.logos.map((cruItem) => (
                            <div>
                                <img src={cruItem.image} alt="logo" />
                            </div>
                        ))}

                    </Slider>
                    <br />

                    <Slider {...settings2}>

                        {Blogo.intro.logos.map((cruItem) => (
                            <div>
                                <img src={cruItem.image} alt="logo" />
                            </div>
                        ))}

                    </Slider>
                </div>
                <p className="logo-p2">{logoHead.heading_bottom}</p>

            </div>
        </>
    )

}

export default Logocont



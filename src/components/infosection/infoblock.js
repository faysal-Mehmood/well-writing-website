import React from 'react'
import Slider from "react-slick"
import img1 from "../../assets/images/block-img-1.svg"
import img2 from "../../assets/images/block-img-2.svg"
import img3 from "../../assets/images/block-img-3.svg"
const Infoblock = ({ data }) => {
    let settings3 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        className: "center",
        // centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false,

    };
    // console.log(data.intro.logos)
    return (
        <>
            <div className="main-block">
                <div className="blocks">
                    {typeof window !== 'undefined' && (window.innerWidth < 768 ?
                        <Slider {...settings3}>
                            {data.intro.logos.map((img, index) => {
                                return (
                                    <div className="block">

                                        <img className={`${index === 0 ? "block-img-1" : "block-img-2"} ${index === 2 ? "block-img-3" : "block-img-1"}`} src={img.image} alt="img1" />
                                        {index === 0 ? <p className="block-discr block-dis-2">
                                            {img.discription}
                                        </p> : <p className="block-discr">
                                            {img.discription}
                                        </p>}
                                        <h6 className="blk-CEO-text">{img.authorname}</h6>
                                    </div>)
                            })}

                        </Slider> : <>
                            {data.intro.logos.map((img, index) => {
                                return (
                                    <div className="block">

                                        <img className={`${index === 0 ? "block-img-1" : "block-img-2"} ${index === 2 ? "block-img-3" : "block-img-1"}`} src={img.image} alt="img1" />
                                        {index === 0 ? <p className="block-discr block-dis-2">
                                            {img.discription}
                                        </p> : <p className="block-discr">
                                            {img.discription}
                                        </p>}
                                        <h6 className="blk-CEO-text">{img.authorname}</h6>
                                    </div>)
                            })}
                        </>)}
                </div>
            </div>
        </>
    )
}

export default Infoblock

import React from 'react'
import { Link } from 'gatsby'
import arrowOne from '../../assets/images/butArro.svg'
import arrow1 from '../../assets/images/Arrow-1.png'
import arrow2 from '../../assets/images/Arrow-2.png'
import arrow3 from '../../assets/images/Arrow-3.png'

const Infbutton = ({ setbtnActive, setActiveShdow, data }) => {



    return (
        <>
            <div className="main-inf-buttons">
                <h6>{<p>{data.button_heading_top}</p>}</h6>
                <div className="inf-buttons">
                    <a href="#informed" to="/" className='inf-btn' onMouseEnter={() => {

                        setbtnActive(true)
                        setActiveShdow('Informed')
                    }} onMouseLeave={() => {
                        setbtnActive(false)
                        setActiveShdow('')


                    }}

                    >
                        <p className="btn-link" >{data.buttton_one}</p>
                        <div className="img-2" >
                            <img src={arrowOne} alt="afs" />
                        </div>
                    </a>
                    <a href="#in-sync" to="/" className='inf-btn' onMouseEnter={() => {

                        setbtnActive(true)
                        setActiveShdow('Sync')
                    }} onMouseLeave={() => {
                        setbtnActive(false)
                        setActiveShdow('')


                    }}>
                        <p className="btn-link">{data.button_two}</p>
                        <div className="img-2">
                            <img src={arrowOne} alt="afs" />
                        </div>

                    </a>
                    <a href="#on-target" className='inf-btn' to="/" onMouseEnter={() => {
                        setbtnActive(true)
                        setActiveShdow('Target')
                    }} onMouseLeave={() => {
                        setbtnActive(false)
                        setActiveShdow('')
                    }}>
                        <p className="btn-link" >{data.button_three}</p>
                        <div className="img-2">
                            <img src={arrowOne} alt="afs" />
                        </div>
                    </a>

                </div>
                <img className="Arrow-3" src={arrow3} alt="fd" />
                <div className="inf-text">
                    <img className="Arrow-1" src={arrow1} alt="fd" />
                    <p>{data.button_heading_bottom}</p>
                    <img className="Arrow-2" src={arrow2} alt="fd" />
                </div>

            </div>
        </>
    )
}

export default Infbutton

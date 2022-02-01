import React, { useState } from "react";
import inforLogo1 from "../../assets/images/Icon-1.svg";
import inforLogo2 from "../../assets/images/Icon-2.svg";
import inforLogo3 from "../../assets/images/Icon-3.svg";
import inforLogo4 from "../../assets/images/Icon-4.svg";
import inforLogo5 from "../../assets/images/Icon-5.svg";
import inforLogo6 from "../../assets/images/Icon-06.svg";
import inforLogo7 from "../../assets/images/Icon-7.svg";
import inforLogo8 from "../../assets/images/Icon-8.svg";
import inforLogo9 from "../../assets/images/Icon-9.svg";
import arowLR from "../../assets/images/Arrow-Large-6.gif";
import arowLR2 from "../../assets/images/Arrow-Large-6.gif";
import arowRL from "../../assets/images/Arrow-Large-6.gif";
import arrowOne from "../../assets/images/butArro.svg";

const Informachan = ({ data, insy, onTr }) => {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  console.log(data);
  return (
    <div className="mian-container">
      <div className="informaction">
        <div className="formed formed-1">
          <img className="img-L-R" src={arowLR} alt="arow" />
          <div className="clean-div">
            <div className="clean-titel" id="informed">

              <h4 className="clean-h4">
                <font color="#000">{data.heading_one.split(" ")[0]} </font>
                {data.heading_one.split(" ").slice(1, data.heading_one.length)}
              </h4>
              <p className="clean-p">
                {data.heading_two}
              </p>
            </div>
          </div>
          <div className={showOne ? "show-for-imag " : "infor-sechan"}>
            <p className="for-decrip ">
              {data.heading_three}
            </p>
            <div className="for-imag">
              {data.intro.informed.map((cruntItem) => {
                return (
                  <div className="for-im">
                    <img className="for-images" src={cruntItem.infor_image} alt="ds" />
                    <p className="img-dec">{cruntItem.infor_image_description}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div
            className="formad-mobile-responsive"
            onClick={() => setShowOne(!showOne)}
          >
            <span className={showOne ? "learn-text-hidden" : "learn-text"}>Learn more</span>
            <img
              className={
                showOne ? "mr-img mr-rotate-0-img" : "mr-img mr-rotate-90-img"
              }
              src={arrowOne}
              alt=""
            />
          </div>
        </div>
        {/* two */}
        <div className="formed-2">
          <div
            className="formad-mobile-responsive"
            onClick={() => setShowTwo(!showTwo)}
          >
            <span className={showTwo ? "learn-text-hidden" : "learn-text"}>Learn more</span>
            <img
              className={
                showTwo ? "mr-img mr-rotate-0-img" : "mr-img mr-rotate-90-img"
              }
              src={arrowOne}
              alt=""
            />
          </div>
          <img className="img-R-L" src={arowRL} alt="arow" />
          <div id={showTwo ? "show-for-imag-id " : "secind-info"}>
            <p className="for-decrip2">
              {insy.heading_three}
            </p>
            <div className="for-imag">
              {insy.insyn.insynch.map((cruntItem) => {
                return (
                  <div className="for-im">
                    <img className="for-images" src={cruntItem.insyn_image} alt="ds" />
                    <p className="img-dec">{cruntItem.insyn_image_description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className=" secind-clean" id="in-sync">
            <div className="sec-clean-titel">

              <h4 className="sec-clean-h4">
                <font color="#000">{insy.heading_one.split(" ")[0]} </font>
                {insy.heading_one.split(" ").slice(1, insy.heading_one.length)}
              </h4>

              <p className="sec-clean-p">
                {insy.heading_two}
              </p>
            </div>
          </div>
        </div>
        {/* three */}
        <div className="formed" style={{ marginTop: "155px" }}>
          <img className="img-L-R-2" src={arowLR2} alt="arow" />
          <div className=" clean-div-3">
            <div className="clean-titel" id="on-target">

              <h4 className="clean-h4" style={{ whiteSpace: 'nowrap' }}>
                <font color="#000">{onTr.heading_one.split(" ")[0]}  </font>
                {onTr.heading_one.split(" ").slice(1, onTr.heading_one.length)}
              </h4>

              <p className="clean-p">
                {onTr.heading_two}
              </p>
            </div>
          </div>
          <div className={showThree ? "show-for-imag " : "infor-sechan"}>
            <p className="for-decrip">
              {onTr.heading_three}
            </p>
            <div className="for-imag for-imges-3">
              {onTr.intarg.onTarget.map((cruntItem) => {
                return (
                  <div className="for-im">
                    <img className="for-images" src={cruntItem.ontarg_image} alt="ds" />
                    <p className="img-dec">{cruntItem.onTarg_image_description}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div
            className="formad-mobile-responsive"
            onClick={() => setShowThree(!showThree)}
          >
            <span className={showThree ? "learn-text-hidden" : "learn-text"}>Learn more</span>
            <img
              className={
                showThree ? "mr-img mr-rotate-0-img" : "mr-img mr-rotate-90-img"
              }
              src={arrowOne}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informachan;

import React, { useState } from "react";
import "../styles/Home.scss";
import {
  AiOutlineTool,
  AiOutlineStar,
  AiFillHtml5,
  AiFillGithub,
} from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import {
  DiCss3,
  DiJavascript1,
  DiPhp,
  DiMysql,
  DiVisualstudio,
  DiNodejsSmall,
} from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiXampp } from "react-icons/si";
// import classnames from 'classnames'
// import { useEffect } from "react";
function Home() {
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <article className="container">
      <section className="body">
        <div className="header">
          <div className="header-title">
            <div>
              <h5>Hi, my name is</h5>
              <br />
              <p>
                Yutthapichai
                <br />
                Chaiwong
              </p>
              <br />

              <h5>I'm Web Developer</h5>
            </div>
          </div>
          <div
            className={imageOpen ? "header-image-popup" : "header-image"}
            onClick={() => setImageOpen(!imageOpen)}
          >
            <img
              src="https://sv1.picz.in.th/images/2021/09/25/CHEQcf.jpg"
              onClick={() => setImageOpen(!imageOpen)}
            ></img>
          </div>
        </div>
        <div className="body-box">
          <div className="box-header">
            <BiCodeAlt className="icon" /> <span>My skills</span>
            <BiCodeAlt className="icon" />
          </div>
          <div className="box-body">
            <div className="box-title-skill">
              <div>
                <AiFillHtml5 className="icon" />
                <DiCss3 className="icon" />

                <p>HTML & CSS</p>
              </div>
              <div>
                <FaReact className="icon" />
                <DiJavascript1 className="icon" />
                <p>JAVASCRIPT & REACT JS</p>
              </div>
              <div>
                <DiPhp className="icon" />
                <DiMysql className="icon" />
                <p>PHP & MYSQL</p>
              </div>
              <div>
                <BiCodeAlt className="icon" />

                <p>VB.NET</p>
              </div>
            </div>
          </div>
        </div>
        <div className="body-box">
          <div className="box-header">
            <AiOutlineTool className="icon" /> <span>Tools</span>
            <AiOutlineTool className="icon" />
          </div>
          <div className="box-body">
            <div className="box-title-skill">
              <div>
                <DiVisualstudio className="icon" />

                <p>Visual Studio Code</p>
              </div>
              <div>
                <DiNodejsSmall className="icon" />
                <p>Node JS</p>
              </div>
              <div>
                <AiFillGithub className="icon" />
                <p>Github</p>
              </div>
              <div>
                <SiXampp className="icon" />

                <p>Xampp</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Home;

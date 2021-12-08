import "../styles/About.scss";
import { useState } from "react";
import { GrCircleInformation } from "react-icons/gr";
import { IoBodyOutline } from "react-icons/io5";
import { BiBookBookmark } from "react-icons/bi";
import { MdWork } from "react-icons/md";
function About() {
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <article className="container">
      <section className="body">
        <div className="body-box">
          <div className="box-header">
            <GrCircleInformation className="icon" /> <span>About Me</span>
            <GrCircleInformation className="icon" />
            <div className={imageOpen ? "box-image-popup" : "box-image"}>
              <img
                src="https://sv1.picz.in.th/images/2021/09/25/CHEQcf.jpg"
                onClick={() => setImageOpen(!imageOpen)}
              ></img>
            </div>
          </div>
          <div className="box-body">
            <div className="box-about">
              <p>
                <span className="about-header">First Name:</span>{" "}
                <span className="about-information">Yutthapichai</span>{" "}
                <span className="about-header">Last Name:</span>
                <span className="about-information"> Chaiwong</span>
              </p>
              <p>
                <span className="about-header">Nickname:</span>{" "}
                <span className="about-information">Phoom</span>{" "}
              </p>
              <p>
                <span className="about-header">Address: </span>{" "}
                <span className="about-information">
                  420 QueenPlace 1 Onnuct 40 Sukhumvit 77 Suan Luang ฺBangkok
                  10250
                </span>
              </p>
              <p>
                <span className="about-header">Goolge Map: </span>{" "}
                <span className="about-information">
                  <a href="https://goo.gl/maps/EekonzRcDA4fCfMU8">CLICK HERE</a>
                </span>
              </p>
              <p>
                <span className="about-header">Email: </span>{" "}
                <span className="about-information">
                  ch.yutthapichai@gmail.com or poom376@gmail.com
                </span>
                <span className="about-header">Line: </span>{" "}
                <span className="about-information">
                  Tel: 0802084855 or ID: d2one
                </span>
              </p>
              <p>
                <span className="about-header">Mobile: </span>{" "}
                <span className="about-information">080-208-4855</span>
                <span className="about-header">Facebook: </span>{" "}
                <span className="about-information">
                  <a href="https://www.facebook.com/phoomFh/">CLICK HERE</a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="body-box">
          <div className="box-header">
            <IoBodyOutline className="icon" /> <span>Personal Details</span>
            <IoBodyOutline className="icon" />
          </div>
          <div className="box-body">
            <div className="box-about">
              <p>
                <span className="about-header">Sex:</span>{" "}
                <span className="about-information">Male</span>{" "}
              </p>
              <p>
                <span className="about-header">Date Of Birth:</span>{" "}
                <span className="about-information">29/07/1999</span>{" "}
                <span className="about-header">Age:</span>{" "}
                <span className="about-information">22 year</span>{" "}
              </p>
              <p>
                <span className="about-header">Height: </span>{" "}
                <span className="about-information">163 cm.</span>
                <span className="about-header">Weight: </span>{" "}
                <span className="about-information">56 kg.</span>
              </p>
              <p>
                <span className="about-header">Nationality: </span>{" "}
                <span className="about-information">Thai</span>
                <span className="about-header">Religion: </span>{" "}
                <span className="about-information">Buddhism</span>
              </p>
              <p>
                <span className="about-header">Marital Status: </span>{" "}
                <span className="about-information">Single</span>
                <span className="about-header">Military Status: </span>{" "}
                <span className="about-information">
                  Exemption / Completion of Territorial Defense Course
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="body-box">
          <div className="box-header">
            <BiBookBookmark className="icon" /> <span>Educational Record</span>
            <BiBookBookmark className="icon" />
          </div>
          <div className="box-body">
            <div className="box-about">
              <p>
                <span className="about-header">University Level</span>
              </p>
              <p>
                <span className="about-header">
                  Thai-Nichi Institute of Technology
                </span>
              </p>
              <p>
                <span className="about-header">Year:</span>{" "}
                <span className="about-information">2560 - 2564</span>{" "}
              </p>
              <p>
                <span className="about-header">Faculty Of:</span>{" "}
                <span className="about-information">
                  Information Technology
                </span>{" "}
                <span className="about-header">Major In:</span>{" "}
                <span className="about-information">
                  Information Technology
                </span>{" "}
              </p>
              <p>
                <span className="about-header">GPA: </span>{" "}
                <span className="about-information">3.08</span>
                <span className="about-header">Transcript: </span>{" "}
                <span className="about-information">
                  <a href="https://drive.google.com/file/d/1cgZJLebgpQ96hjrZ3IkirdNAimzfo-hZ/view?usp=sharing">
                    CLICK HERE
                  </a>
                </span>
              </p>
              <p>
                <span className="about-header">High School Level</span>{" "}
              </p>
              <p>
                <span className="about-header">
                  Triamudomsuksa Pattanakarn School
                </span>{" "}
              </p>
              <p>
                <span className="about-header">Year:</span>{" "}
                <span className="about-information">2554 - 2560</span>{" "}
              </p>
              <p>
                <span className="about-header">Major In:</span>{" "}
                <span className="about-information">English-Mathematics</span>
                <span className="about-header">GPA</span>{" "}
                <span className="about-information">2.74</span>
              </p>
            </div>
          </div>
        </div>

        <div className="body-box">
          <div className="box-header">
            <MdWork className="icon" /> <span>INTERNSHIP/WORK</span>
            <MdWork className="icon" />
          </div>
          <div className="box-body">
            <div className="box-about">
              <p>
                <span className="about-header">Company:</span>{" "}
                <span className="about-information">After you co. ltd</span>{" "}
              </p>
              <p>
                <span className="about-header">Position:</span>{" "}
                <span className="about-information">Intern Developer</span>{" "}
                <span className="about-header">Wage:</span>{" "}
                <span className="about-information">200/day</span>{" "}
              </p>
              <p>
                <span className="about-header">Date:</span>{" "}
                <span className="about-information">
                  01/06/2563 - 30/09/2563
                </span>{" "}
              </p>
              <p>
                <span className="about-header">Responsibility:</span>{" "}
                <span className="about-information">
                  Developed a Queue Caller Management System, the system can
                  check the function of the queue system of each branch whether
                  the queue is online or not, how many queues have been called
                  ->{" "}
                  <a href="http://queue.afteryoudessertcafe.com/getData.aspx">
                    CLICK HERE
                  </a>{" "}
                  Help develop applications for sale to use with Citizen
                  printers. use kotlin language in development.
                </span>{" "}
              </p>
              <br />
              <p>
                <span className="about-header">Company:</span>{" "}
                <span className="about-information">After you co. ltd</span>{" "}
              </p>
              <p>
                <span className="about-header">Position:</span>{" "}
                <span className="about-information">Developer Part Time</span>{" "}
                <span className="about-header">Wage:</span>{" "}
                <span className="about-information">500/day</span>{" "}
              </p>
              <p>
                <span className="about-header">Date:</span>{" "}
                <span className="about-information">
                  01/06/2563 - 30/09/2563
                </span>{" "}
              </p>
              <p>
                <span className="about-header">Responsibility:</span>{" "}
                <span className="about-information">
                  Develop an application for sale to use with a Star printer via
                  bluetooth using kotlin language. Develop a website for testing
                  employees in the company who will fill in unsafe links. Use
                  HTML, PHP, CSS, MySQL database. Website development MikkaCafe
                  -> <a href="https://www.cafemikka.com/">CLICK HERE</a> using
                  html,JavaScript,CSS.
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default About;

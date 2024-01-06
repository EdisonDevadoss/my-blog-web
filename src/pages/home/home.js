import { React } from 'react';
import './home.css';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin, FaMedium, FaPhoneSquare } from 'react-icons/fa';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

import { Link } from 'react-router-dom';

// const

export default function home() {
  return (
    <>
      {/* <Header /> */}
      <div className="home">
        <div className="header">
          <div className="img-user">
            <img
              src={require('../../assets/edison.jpg')}
              alt="Edison Devadoss"
              className="user-profile"
            />
          </div>
          <div className="user-name">
            <h2 style={{ fontSize: '50px' }}>J. Edison Devadoss</h2>
            <h4 style={{ fontSize: '20px', color: 'blue' }}>
              Software Engineer
            </h4>
          </div>
        </div>

        <div className="user-skill">
          <div className="summary">
            <h2>Summary</h2>
            <ol>
              <li>
                6 Years and of experience in designing and developing
                applications and capable of meeting the project goals within the
                time constraints.
              </li>
              <li>
                Knowledge in Linux Platform, that involves Design and
                Development using NodeJS, Frontend and Mobile app developments
              </li>
              <li>
                Experience in developing enterprise applications and experience
                in Client-Server, Web-based using technologies like ReactJS and
                expert in back end scripting using NodeJS
              </li>
              <li>
                Experience in developing cross-platform mobile apps using React
                Native
              </li>
              <li>
                Highly responsible to take up activities and finish the
                activities within the committed time.
              </li>
            </ol>
            <div style={{ marginTop: '20px' }}>
              <h2>Contact Us</h2>
              <div className="contact">
                <ul className="contact-detail">
                  <li className="contact-list">
                    <FiMail />
                    <p className="contact-text">edisondevadoss@gmail.com</p>
                  </li>
                  <li className="contact-list">
                    <FaPhoneSquare />
                    <p className="contact-text">+9043487398</p>
                  </li>
                  <li className="contact-list">
                    <FaMedium />
                    <p className="contact-text">
                      <Link
                        to="https://medium.com/@edisondevadoss"
                        target="_blank"
                      >
                        https://medium.com/@edisondevadoss
                      </Link>
                    </p>
                  </li>
                  <li className="contact-list">
                    <FaLinkedin />
                    <p className="contact-text">
                      <Link
                        to="https://www.linkedin.com/in/edison-devadoss-602207179/"
                        target="_blank"
                      >
                        https://www.linkedin.com/in/edison-devadoss-602207179
                      </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ width: '65%' }}>
            <div>
              <h2>Technical skill</h2>
              <ul class="technology-list">
                <li className="technology">React</li>
                <li className="technology">NestJs</li>
                <li className="technology">Node.js</li>
                <li className="technology">Express</li>
                <li className="technology">Fastify</li>
                <li className="technology">PostgreSQL</li>
                <li className="technology">MySQL</li>
                <li className="technology">TimescaleDB</li>
                <li className="technology">InfluxDB</li>
                <li className="technology">ELK Stack</li>
                <li className="technology">TICK Stack</li>
                <li className="technology">Redis</li>
                <li className="technology">Kafka</li>
                <li className="technology">SSO</li>
                <li className="technology">AWS</li>
                <li className="technology">Digital Ocean</li>
                <li className="technology">React-Native</li>
                <li className="technology">HTML</li>
                <li className="technology">CSS</li>
                <li className="technology">JavaScript</li>
                <li className="technology">Typescript</li>
                <li className="technology">Firebase</li>
                <li className="technology">Mocha and Chai</li>
                <li className="technology">Git</li>
              </ul>
            </div>
            <div className="work-experience">
              <h2>My Work Experience</h2>
              <ul className="contact-detail">
                <li className="work-exp-list">
                  <VscWorkspaceTrusted />
                  <p className="work-text">
                    Coding Town India - <span>Software Engineer</span>
                  </p>
                </li>
                <li className="work-exp-list">
                  <VscWorkspaceTrusted />
                  <p className="work-text">
                    Yavar Tech Works - <span>Senior Software Engineer</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

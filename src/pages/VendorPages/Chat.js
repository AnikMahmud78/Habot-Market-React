import Search from "./img/Vector.png";
import Avatar2 from "./img/Avatar.png";
import MenuDots from "./img/menu (8) 1.png";
import Ibutton from "./img/Vector 2.png";
import Send from "./img/send.png";
import File from "./img/file.png";
import Tick from "./img/tick.png";
import Avatar3 from "./img/Ellipse 1.png";
import Arrow from "./img/down-arrow.png";
import Badge from "./img/Badge.png";
import { NavLink } from "react-router-dom";
const Chats = () => {
  return (
    <>
      <div className="chatPage">
        <section className="navigation">
          <nav className="navbar">
            <div className="left-nav">
              <div className="brand_img">Image</div>
            </div>
            <div className="right-nav">
              <ul>
                <li>
                  <NavLink to="/message">
                    <svg
                      className="svg-1"
                      width="25"
                      height="28"
                      viewBox="0 0 25 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 8.725V20C25 21.375 23.875 22.5 22.5 22.5H5L0 27.5V5C0 3.625 1.125 2.5 2.5 2.5H15.125C15.05 2.9 15 3.325 15 3.75C15 4.175 15.05 4.6 15.125 5H2.5V20H22.5V9.875C23.425 9.6875 24.275 9.275 25 8.725ZM17.5 3.75C17.5 5.825 19.175 7.5 21.25 7.5C23.325 7.5 25 5.825 25 3.75C25 1.675 23.325 0 21.25 0C19.175 0 17.5 1.675 17.5 3.75Z"
                        fill="white"
                      />
                    </svg>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/notification" className="check">
                    <i class="bellicon fa-regular fa-bell"></i>
                  </NavLink>
                  <span className="num">3</span>
                </li>
                <li className="opened-profile">
                  <img className="avatar3" src={Avatar3} alt="avatar" />
                  <span>David</span>
                  <img src={Arrow} alt="arrow" />
                </li>
              </ul>
            </div>
          </nav>
        </section>
        <div className="pad-wrapper pad-append">
          <div className="notification-bar">
            <div className="header">Mensagens</div>
            <div className="field">
              <img src={Search} alt="search" />
              <input type="text" placeholder="Pesquisar chat" />
            </div>
            <div className="msg">
              <div className="left-area">
                <div className="client-img">
                  <img src={Avatar2} alt="avatar" />
                  <img className="dot-img" src={Badge} alt="dot-dot" />
                </div>
                <div className="msg-bar">
                  <div className="name">Client name</div>
                  <div className="job-type mute-text">job headline</div>
                </div>
              </div>
              <span className="dots">
                <img src={MenuDots} alt="dot-dot" />
              </span>
            </div>
            <div className="msg">
              <div className="left-area">
                <div className="client-img">
                  <img src={Avatar2} alt="avatar" />
                  <img className="dot-img" src={Badge} alt="dot-dot" />
                </div>
                <div className="msg-bar">
                  <div className="name">Client name</div>
                  <div className="job-type mute-text">job headline</div>
                </div>
              </div>
              <span className="dots">
                <img src={MenuDots} alt="dot-dot" />
              </span>
            </div>
            <div className="msg">
              <div className="left-area">
                <div className="client-img">
                  <img src={Avatar2} alt="avatar" />
                  <img className="dot-img" src={Badge} alt="badge" />
                </div>
                <div className="msg-bar">
                  <div className="name">Client name</div>
                  <div className="job-type mute-text">Job headline</div>
                </div>
              </div>
              <span className="dots">
                <img src={MenuDots} alt="dot-dot" />
              </span>
            </div>
          </div>
          <div className="mainchat-area">
            <div className="header">
              <div className="left-area">
                <div className="client-img">
                  <img src={Avatar2} alt="avatar" />
                </div>
                <div className="about-client">
                  <div className="client-name">Client name</div>
                  <div className="Job-type">Job Headline Demo</div>
                </div>
              </div>
              <div className="right-area">
                <img src={Ibutton} alt="i-button"></img>
              </div>
            </div>
            <div className="main-content">
              <div className="p-wrapper">
                <div className="cells">
                  <div className="recieved-chat">
                    <div className="profile">OP</div>
                    <div className="received-msg">
                      <p className="message">
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum dummy
                        output 2015 to now
                      </p>
                      <span className="time">8:00 PM</span>
                    </div>
                  </div>
                  <div className="sent-chat">
                    <div className="client-img profile margin-append">
                      <img src={Avatar2} alt="avatar" />
                    </div>

                    <div className="sent-msg">
                      <p className="message">
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum dummy
                        output 2015 to now
                      </p>
                      <span className="time">8:00 PM</span>
                    </div>
                  </div>
                  <div className="recieved-chat">
                    <div className="profile">OP</div>
                    <div className="received-msg">
                      <p className="message">
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum dummy
                        output 2015 to now
                      </p>
                      <span className="time">8:00 PM</span>
                    </div>
                  </div>
                  <div className="sent-chat">
                    <div className="client-img profile margin-append">
                      <img src={Avatar2} alt="avatar" />
                    </div>
                    <div className="sent-msg">
                      <p className="message">
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum dummy
                        output 2015 to now
                      </p>
                      <span className="time">8:00 PM</span>
                    </div>
                  </div>
                  <div className="recieved-chat rec-append">
                    <span className="dots">
                      <img src={MenuDots} alt="menu-btn" />
                    </span>
                    <div className="profile">OP</div>
                  </div>
                  <div className="input-area">
                    <input type="text" placeholder="Type your message"></input>
                    <span className="send-btn">
                      <img src={Send} alt="send" />
                    </span>
                    <img src={File} className="file" alt="file" />
                    <img src={Tick} className="checked" alt="checked" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chats;

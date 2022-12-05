import React from "react";
import { Card, Col, Dropdown, Row } from "react-bootstrap";
import Footer from "../Layout/Footer";
import NavBarChat from "../ClientNavbar/ClientNav";
import vendorAva from "../Dashboard/Asset/vendorUser.png";

const Message = () => {
  return (
    <div>
      <NavBarChat />
      <div className="p-md-5 p-2 py-4">
        <Row className="m-0 ">
          <Col className="col-md-4 col-12">
            <Card className="users-card">
              <div className="search-chat">
                <p className="fs-5 fw-semibold text-start">Messenger</p>
                <div className="search-box mb-2">
                  <input
                    type="text"
                    placeholder="Pesquisar chat"
                    className="chat-search-field"
                  />
                  <i class="fa-sharp fa-solid fa-magnifying-glass chat-search-ico"></i>
                </div>
              </div>
              <Card className="client-card my-2">
                <div className="chatingUsers p-3">
                  <img className="chat-ava" src={vendorAva} alt="" />
                  <div>
                    <span className="fs-5 fw-semibold">Client name</span> <br />
                    <span>Job headline</span>
                  </div>
                </div>
                {/* <button className='threeDot'><i class="fa-solid fa-ellipsis"></i></button> */}
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="threeDot">
                    <i class="fa-solid fa-ellipsis"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card>
              <Card className="client-card my-2">
                <div className="chatingUsers p-3">
                  <img className="chat-ava" src={vendorAva} alt="" />
                  <div>
                    <span className="fs-5 fw-semibold">Client name</span> <br />
                    <span>Job headline</span>
                  </div>
                </div>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="threeDot">
                    <i class="fa-solid fa-ellipsis"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card>
              <Card className="client-card my-2">
                <div className="chatingUsers p-3">
                  <img className="chat-ava" src={vendorAva} alt="" />
                  <div>
                    <span className="fs-5 fw-semibold">Client name</span> <br />
                    <span>Job headline</span>
                  </div>
                </div>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="threeDot">
                    <i class="fa-solid fa-ellipsis"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card>
            </Card>
          </Col>

          {/*------------------------------ chatting part//
========================================================= */}

          <Col className="col-md-8 co-12">
            <Card className="p-md-4 p-2 chatting-card">
              {/* header// */}
              <div className="chatHeader">
                <div className="header-profile">
                  <img src={vendorAva} alt="" />
                  <div>
                    <span className="user-name">Vendor Name</span> <br />
                    <span className="chat-title">JOB HEADLINE DEMO</span>
                  </div>
                </div>
                <i class="fa-solid fa-circle-info text-primary"></i>
              </div>
              <hr className="divider" />

              {/* chat// */}
              <div>
                <div className="chat-container">
                  <Row>
                    <Col sm={12}>
                      <div className="sender-sms">
                        <div className="user-avater">OP</div>
                        <div className="chat-text-sender">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                        </div>
                        <span className="chat-time-sender">8.00 PM</span>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="receiver-sms">
                        <div className="chat-text-receiver">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                        </div>
                        <div className="receiver-avater">
                          <img
                            className="receiver-ava"
                            src={vendorAva}
                            alt=""
                          />
                        </div>
                        <span className="chat-time-receiver">8.00 PM</span>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="sender-sms">
                        <div className="user-avater">OP</div>
                        <div className="chat-text-sender">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                        </div>
                        <span className="chat-time-sender">8.00 PM</span>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="receiver-sms">
                        <div className="chat-text-receiver">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                        </div>
                        <div className="receiver-avater">
                          <img
                            className="receiver-ava"
                            src={vendorAva}
                            alt=""
                          />
                        </div>
                        <span className="chat-time-receiver">8.00 PM</span>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="sender-sms">
                        <div className="user-avater">OP</div>
                        <div className="chat-text-sender">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                        </div>
                        <span className="chat-time-sender">8.00 PM</span>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="receiver-sms">
                        <div className="chat-text-receiver">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                        </div>
                        <div className="receiver-avater">
                          <img
                            className="receiver-ava"
                            src={vendorAva}
                            alt=""
                          />
                        </div>
                        <span className="chat-time-receiver">8.00 PM</span>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="sender-sms">
                        <div className="user-avater">OP</div>
                        <div className="chat-text-sender">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                        </div>
                        <span className="chat-time-sender">8.00 PM</span>
                      </div>
                    </Col>
                    <Col sm={12}>
                      <div className="receiver-sms">
                        <div className="chat-text-receiver">
                          Lorem Ipsum has been the industry's standard dummy
                          text ever since the 1500s,
                        </div>
                        <div className="receiver-avater">
                          <img
                            className="receiver-ava"
                            src={vendorAva}
                            alt=""
                          />
                        </div>
                        <span className="chat-time-receiver">8.00 PM</span>
                      </div>
                    </Col>
                  </Row>
                </div>

                {/* chating text input field// */}
                <div>
                  <div>
                    <div className="user-avater-typing">OP</div>
                  </div>
                  <div className="sms-type-container">
                    <input
                      type="text"
                      placeholder="type your message"
                      className="sms-input"
                    />
                    <div className="chat-icon">
                      <span className="send-ico">
                        {" "}
                        <i class="fa-solid fa-paper-plane send-icon"></i>
                      </span>
                      <i class="fa-solid fa-paperclip attatch"></i>
                      <i class="fa-solid fa-check"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Message;

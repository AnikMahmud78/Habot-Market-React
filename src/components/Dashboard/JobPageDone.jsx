import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../Layout/Footer";
import NavBar from "../ClientNavbar/ClientNav";
import vendorAva from "../Dashboard/Asset/vendorUser.png";

const JobPageDone = () => {
  return (
    <div>
      <NavBar />
      <div className="p-md-5 p-4">
        <NavLink to="/JobPageMain" className="d-flex text-dark mb-5">
          Go Back
        </NavLink>
        <Card className="mainjob-card p-md-5 p-4 mb-4">
          <div className="text-start">
            <p className="inprocess">Completed</p>
            <span className="fs-5 fw-semibold">Job Headline</span> <br />
            <span>Emirate Name</span> <br />
            <small className="post-time">
              12/12/2022 &nbsp; &nbsp; 2:00 AM
            </small>
            <p className="pt-3 text-secondary">
              Vamos lá pôr os pontos nos ii Não queremos que faça má figura.
              Seja lá o que for que precisa colocar na internet, nós estamos cá
              para o ajudar. Temos uma equipa multi-disciplinar capaz de
              enfrentar o mais terrífico desafio.Vamos lá pôr os pontos nos ii
              Não queremos que faça má figura. Seja lá o que for que precisa
              colocar na internet, nós estamos cá para o ajudar. Temos uma
              equipa multi-disciplinar capaz de enfrentar o mais terrífico
              desafio.Vamos lá pôr os pontos nos ii Não queremos que faça má
              figura. Seja lá o que for que precisa colocar na internet, nós
              estamos cá para o ajudar. Temos uma equipa multi-disciplinar capaz
              de enfrentar o mais terrífico desafio.Vamos lá pôr os pontos nos
              ii Não queremos que faça má figura. Seja lá o que for que precisa
              colocar na internet, nós estamos cá para o ajudar. Temos uma
              equipa multi-disciplinar capaz de enfrentar o mais terrífico
              desafio.
            </p>
          </div>
        </Card>

        <Card className="vendor-card-selected my-2">
          <div className="vendor-details p-3">
            <img className="vendor-ava me-2" src={vendorAva} alt="" />
            <div>
              <span className="fs-5 fw-semibold">vendor Name</span> <br />
              <span>lorem@gmail.com</span>
            </div>
          </div>
          <button className="selected-btn">
            Selected &nbsp; &nbsp; &nbsp; &nbsp;
            <i class="fa-solid fa-circle-check selected-ico"></i>
          </button>
        </Card>

        <button className="delete-job-btn">Delete Job</button>
      </div>
      <Footer />
    </div>
  );
};

export default JobPageDone;

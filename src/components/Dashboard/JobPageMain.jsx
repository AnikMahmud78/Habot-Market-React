import React from "react";
import { Card } from "react-bootstrap";
import Footer from "../Layout/Footer";
import NavBar from "../ClientNavbar/ClientNav";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";

const JobPageMain = () => {
  return (
    <div>
      <NavBar />
      <div className="p-md-5 p-4">
        <NavLink to="/jobPage" className="d-flex text-dark mb-5">
          Go Back
        </NavLink>
        <Card className="mainjob-card p-md-5 p-4 mb-4">
          <div className="text-start">
            <p className="inprocess">In process</p>
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
        <NavLink to="/JobPageDone">
          <button className="set-complete-btn mt-4">Set as Completed</button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default JobPageMain;

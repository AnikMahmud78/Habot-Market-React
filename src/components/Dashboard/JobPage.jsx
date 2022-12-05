import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Footer from "../Layout/Footer";
import NavBar from "../ClientNavbar/ClientNav";
import vendorData from "../../Vendor";
import { NavLink } from "react-router-dom";

const JobPage = () => {
  const [selVendor, setSelVendor] = useState("");

  const vendorSelect = (id) => {
    if (selVendor === "") {
      setSelVendor(id);
      const vendor = document.getElementById(id);
      vendor.style.border = "2px solid #4CB71A";
    } else {
      const vendor = document.getElementById(selVendor);
      vendor.style.border = "1px solid #ccc";
      const vendors = document.getElementById(id);
      vendors.style.border = "2px solid #4CB71A";
      setSelVendor(id);
    }
  };

  return (
    <div>
      <NavBar />
      <Card className="p-4 m-md-5 m-3">
        <button className="edit-ico">
          <i class="fa-regular fa-pen-to-square "></i>
        </button>
        <div className="d-flex justify-content-between px-md-5 pt-4">
          <p className="fs-5 fw-semibold">Job Headline</p>
          <p className="inprogress fs-5">In progress</p>
        </div>
        <small className="time-text text-start ms-0 ps-md-5">
          3:00 AM 12/12/2022
        </small>
        <p className="text-start ps-md-5 mt-2 me-md-5 pe-md-5 text-secondary">
          Vamos lá pôr os pontos nos ii Não queremos que faça má figura. Seja lá
          o que for que precisa colocar na internet, nós estamos cá para o
          ajudar. Temos uma equipa multi-disciplinar capaz de enfrentar o mais
          terrífico desafio.Vamos lá pôr os pontos nos ii Não queremos que faça
          má figura. Seja lá o que for que precisa colocar na internet, nós
          estamos cá para o ajudar. Temos uma equipa multi-disciplinar capaz de
          enfrentar o mais terrífico desafio.Vamos lá pôr os pontos nos ii Não
          queremos que faça má figura. Seja lá o que for que precisa colocar na
          internet, nós estamos cá para o ajudar. Temos uma equipa
          multi-disciplinar capaz de enfrentar o mais terrífico desafio.Vamos lá
          pôr os pontos nos ii Não queremos que faça má figura. Seja lá o que
          for que precisa colocar na internet, nós estamos cá para o ajudar.
          Temos uma equipa multi-disciplinar capaz de enfrentar o mais terrífico
          desafio.
        </p>
        <p className="text-start ps-md-5 mt-2 fs-5 fw-semibold mt-4">
          Select Your Vendor
        </p>

        <div className="select-vendor px-md-5">
          {vendorData.map((vendor, index) => (
            <Card
              className="vendor-card my-2"
              id={vendor.id}
              key={index}
              onClick={() => vendorSelect(vendor.id)}
            >
              <div className="vendor-details p-3">
                <img
                  className="vendor-ava"
                  src="https://i.ibb.co/kM3bGHB/vendor-User.png"
                  alt=""
                />
                <div>
                  <span className="fs-5 fw-semibold">{vendor.name}</span> <br />
                  <span>{vendor.email}</span>
                </div>
              </div>
              <i class="fa-solid fa-angle-right fs-4 text-secondary me-4"></i>
            </Card>
          ))}
        </div>

        <div className="d-flex align-items-center ps-md-5 p-md-5 flex-md-row flex-column mb-5">
          <NavLink to="/JobPageMain">
            <button className="pair-btn-postJob">Mark As Complete</button>
          </NavLink>
          <a className="text-danger fs-5 ms-md-4" href="##">
            Delete Job
          </a>
        </div>
      </Card>
      <Footer />
    </div>
  );
};

export default JobPage;

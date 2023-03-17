import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Bubble } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { getExpensesByUser } from "../../Actions/expenseAction";
import { getRecordsByUser } from "../../Actions/recordAction";
import { SIGNOUT } from "../../Constants/constants";

const NavBar = () => {
  const dispatch = useDispatch();
  const handleHome = () => {
    window.location.href = "/dashboard";
  };
  const handleBo = () => {
    window.location.href = "/bookkeeping";
  };
  const handleAdd = () => {
    window.location.href = "/add";
  };
  const handleRe = () => {
    window.location.href = "/reports";
  };
  const handleP = () => {
    window.location.href = "/settings";
  };
  const handleSign = () => {
    dispatch({ type: SIGNOUT });
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justifyContent">
      <a
        className="navbar-brand"
        style={{ marginLeft: "15px" }}
        href="/dashboard
        
        
        "
      >
        Money Manager
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active" style={{ marginLeft: "500px" }}>
            <Button onClick={handleHome} varient="contained">
              <i className="fa-solid fa-house-chimney" title="Home"></i> Home
              <span className="sr-only">(current)</span>
            </Button>
          </li>
          <li className="nav-item">
            <Button onClick={handleRe} varient="contained">
              <i className="fa-solid fa-chart-column"></i>
              Reports
            </Button>
          </li>
          <li className="nav-item">
            <Button onClick={handleBo} varient="contained">
              <i className="fa-solid fa-book-bookmark" title="Book-Keeping"></i>
              Records
            </Button>
          </li>
          <li className="nav-item">
            <Button onClick={handleP}>
              <i className="fa-regular fa-address-card" title="Profile"></i>
              Profile
            </Button>
          </li>
          <li className="nav-item">
            <Button onClick={handleAdd}>
              <i className="fa-solid fa-plus" title="FAQs"></i>
              Add Transaction
            </Button>
          </li>
          <li className="nav-item">
            <Button onClick={handleSign}>
              <i className="fa-solid fa-gear" title="FAQs"></i>
              Sign-out
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

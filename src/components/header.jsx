import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 id="mainTitle">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p><h2>"{props.data ? props.data.paragraph : "Loading"}"</h2>
                  <h3> -{props.data ? props.data.Author : "Loading"}</h3>
                </p>

                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

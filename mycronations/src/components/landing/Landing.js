import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

export default function Landing({ countries }) {
  const Navigate = useNavigate();

  return (
    <div className="Landing mx-auto text-center mt-3">
      <h1>Top Nations</h1>
      <hr />
      {/* {countries &&
        countries
          .sort((a, b) => a.rank - b.rank)
          .map((c) => {
            c.rank >= 3 ? (
              <div
                className="card mt-5 mx-auto text-center bg-light text-dark"
                style={{ width: "30vw" }}
              >
                <div className="card-header bg-dark text-white">
                  Rank: #{c.rank}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{c.name}</h5>
                  <p className="card-text">{c.description}</p>
                  <a
                    onClick={() =>
                      Navigate(`/countries/${c.name.replace(/ /g, "")}`)
                    }
                    className="btn btn-dark"
                  >
                    View Country Page
                  </a>
                </div>
              </div>
            ) : (
              <div>fkjdskhdsjkkhfd</div>
            );
          })} */}

      {!countries ? (
        <></>
      ) : (
        <>
          {countries &&
            countries
              .sort((a, b) => a.rank - b.rank)
              .map((c) => {
                if (c.rank <= 5) {
                  return (
                    <div
                      className="card mt-5 mx-auto text-center bg-light text-dark"
                      style={{ width: "30vw" }}
                      data-toggle="toggle"
                    >
                      <div className="card-header bg-dark text-white">
                        Rank: #{c.rank}
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{c.name}</h5>
                        <p className="card-text">{c.description}</p>
                        <a
                          onClick={() =>
                            Navigate(`/countries/${c.name.replace(/ /g, "")}`)
                          }
                          className="btn btn-dark"
                        >
                          View Country Page
                        </a>
                      </div>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              })}
        </>
      )}
    </div>
  );
}

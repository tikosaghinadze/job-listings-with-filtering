import { useState } from "react";
import "./App.css";
import headerMobile from "../public/assets/images/bg-header-mobile.svg";
import data from "../data.json";

function App() {
  const [jobs, setJobs] = useState(data);
  const [filteredArray, setFilteredArray] = useState([]);
  //onclick function
  const onclickFilterHandler = (obj) => {
    setFilteredArray((state) => {
      return [...state, obj];
    });
  };
  console.log(filteredArray);
  return (
    <>
      <header>
        <img
          className="header-mobile-img"
          src={headerMobile}
          alt="header mobile pic"
        />
      </header>
      {filteredArray.length > 0 ? (
        <div className="filters">
          <div className="filter-items"></div>
          <button className="clear">Clear</button>
        </div>
      ) : null}

      <main
        className="main-container"
        style={{ marginTop: filteredArray.length > 0 ? "120px" : "56px" }}
      >
        {jobs.map((job) => {
          return (
            <div className="job-div" key={job.id}>
              <div className="left-div">
                <img className="logoSvg" src={job.logo} alt="" />
                <div className="header-job">
                  <div className="company-new-feature">
                    <span className="company">{job.company}</span>
                    <div className="new-featured">
                      {job.new ? <button className="new">NEW!</button> : null}
                      {job.featured ? (
                        <button className="featured">FEATURED</button>
                      ) : null}
                    </div>
                  </div>
                  <h3 className="position">{job.position}</h3>
                  <div className="more-details">
                    <span className="postedDay">{job.postedAt}</span>
                    <div className="circle"></div>
                    <span className="contract">{job.contract}</span>
                    <div className="circle"></div>
                    <span className="location">{job.location}</span>
                  </div>
                </div>
              </div>
              <div className="rectangle"></div>
              <div className="footer-job">
                <button
                  className="footer-btns"
                  onClick={() => {
                    onclickFilterHandler({ property: "role", value: job.role });
                  }}
                >
                  {job.role}
                </button>
                <button
                  className="footer-btns"
                  onClick={() => {
                    onclickFilterHandler({
                      property: "level",
                      value: job.level,
                    });
                  }}
                >
                  {job.level}
                </button>
                {job.languages.map((lang) => {
                  return (
                    <button
                      key={lang}
                      className="footer-btns"
                      onClick={() => {
                        onclickFilterHandler({
                          property: "languages",
                          value: lang,
                        });
                      }}
                    >
                      {lang}
                    </button>
                  );
                })}
                {job.tools.map((tool) => {
                  return (
                    <button
                      key={tool}
                      className="footer-btns"
                      onClick={() => {
                        onclickFilterHandler({
                          property: "tools",
                          value: tool,
                        });
                      }}
                    >
                      {tool}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;

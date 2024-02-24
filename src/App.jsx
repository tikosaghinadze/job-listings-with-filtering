import "./App.css";
import headerMobile from "../public/assets/images/bg-header-mobile.svg";
import companylogo from "../public/assets/images/photosnap.svg";

function App() {
  return (
    <>
      <header>
        <img
          className="header-mobile-img"
          src={headerMobile}
          alt="header mobile pic"
        />
        <div className="filters">
          <div className="filter-items"></div>
          <span className="clear">Clear</span>
        </div>
      </header>
      <main className="main-container">
        <div className="job-div">
          <div className="left-div">
            <img className="logoSvg" src={companylogo} alt="" />
            <div className="header-job">
              <div className="company-new-feature">
                <span className="company">Photosnap</span>
                <div className="new-featured">
                  <button className="new">NEW!</button>
                  <button className="featured">FEATURED</button>
                </div>
              </div>
              <h3 className="position"> Senior Frontend Developer</h3>
              <div className="more-details">
                <span className="postedDay">1d ago</span>
                <div className="circle"></div>
                <span className="contract">Full Time</span>
                <div className="circle"></div>
                <span className="location">USA only</span>
              </div>
            </div>
          </div>
          <div className="rectangle"></div>
          <div className="footer-job">
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
          </div>
        </div>
        <div className="job-div">
          <div className="left-div">
            <img className="logoSvg" src={companylogo} alt="" />
            <div className="header-job">
              <div className="company-new-feature">
                <span className="company">Photosnap</span>
                <div className="new-featured">
                  <button className="new">NEW!</button>
                  <button className="featured">FEATURED</button>
                </div>
              </div>
              <h3 className="position"> Senior Frontend Developer</h3>
              <div className="more-details">
                <span className="postedDay">1d ago</span>
                <div className="circle"></div>
                <span className="contract">Full Time</span>
                <div className="circle"></div>
                <span className="location">USA only</span>
              </div>
            </div>
          </div>
          <div className="rectangle"></div>
          <div className="footer-job">
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
            <button className="footer-btns">Frontend</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

import React from "react";
import "./project.css";
import krishak from "../../assets/KrishakImage.jpg";
import healthhelp from "../../assets/medi_con.jpg";
import happyplace from "../../assets/online2.png";
import fitgo from "../../assets/E_commerce.png";

export const Project = () => {
  return (
    <section className="card section" id="card">
      <div className="card--container container">
        <h2 className="section--title">Projects</h2>

        <div className="cards--container container">

          <article className="card--item">
            <div className="card--item-image">
              <img src={krishak} alt="" srcset="" />
            </div>
            <h3>Krishak Toolkit</h3>
            <div className="btnn">
              <div className="btn">Arduino</div>
              <div className="btn">IoT</div>
              <div className="btn">ML</div>
              <div className="btn">Flask</div>
              <div className="btn">Rest Api</div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={happyplace} alt="" srcset="" />
            </div>
            <h3>Online Event Management</h3>
            <div className="btnn">
              <div className="btn">HTML/CSS</div>
              <div className="btn">SQL</div>
              <div className="btn">PHP</div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={healthhelp} alt="" srcset="" />
            </div>
            <h3>Medi Consult App</h3>
            <div className="btnn">
              <div className="btn">Java</div>
              <div className="btn">Android Studio</div>
              <div className="btn">Google MAP Api</div>
            </div>
          </article>

          <article className="card--item">
            <div className="card--item-image">
              <img src={fitgo} alt="" srcset="" />
            </div>
            <h3>E-Commerce</h3>
            <div className="btnn">
              <div className="btn">HTML</div>
              <div className="btn">CSS</div>
              <div className="btn">React JS</div>
              <div className="btn">MongoDB</div>
            </div>
          </article>

          {/* ADD MORE PROJECTS */}

        </div>
      </div>
    </section>
  );
};

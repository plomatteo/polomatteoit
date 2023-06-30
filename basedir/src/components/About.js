const About = () => {
  return (
    <section
      id="biografia"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/noi.jpg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>Mi presento</h3>
              </div>
              <div className="about-text">

                <p>
                  Diplomato in informatica e laureato in Scienze dell'amministrazione e delle organizzazioni. <br /><br />
                  Lavoro come Frontend Developer per un'azienda di Treviso. <br /><br />
                  Il tempo che mi rimane lo dedico a far crescere il movimento politico Open FVG di cui sono il Presidente e co-fondatore. <br /><br />
                  Già Vicesindaco e Assessore al Turismo, attività produttive e sport del Comune di Grado tra il 2016 ed il 2021.
                </p>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contatti">
                    <span>Contattami</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Guarda i progetti</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
      </div>
    </section>
  );
};
export default About;

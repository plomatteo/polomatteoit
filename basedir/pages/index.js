import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import Footer from "../src/layout/Footer";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import { useEffect } from "react";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <meta property="og:url" content="https://matteopolo.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Matteo Polo - Regionali 2023" />
      <meta property="og:description" content="Mi chiamo Matteo, ho 31 anni, lavoro come Frontend Developer. Tra il 2016 e il 2021 sono stato Vicesindaco e Assessore al Turismo, AA.PP. e sport" />
      <meta property="og:image" content="	https://matteopolo.com/static/img/matteo-polo.png" />
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Candidato alle regionali del 2 e 3 aprile</h6>
                  <h1 className="font-alt">Matteo Polo</h1>
                  <p className="desc">
                    Candidato alle elezioni regionali del 2 e 3 aprile
                    con la lista Open Sinistra FVG di cui sono il Presidente e co-fondatore <br />
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#le-nostre-idee">
                      Scopri le nostre idee
                    </a>

                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/home-banner.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      {/* <Portfolio /> */}
      {/* End Portfolio */}
      {/* Blog */}
      <Blog />
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
      <Footer />
    </Layout>
  );
};
export default Index;

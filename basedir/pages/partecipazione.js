import Layout from "../src/layout/Layout";
const partecipazione = () => {
  return (
    <Layout blog >
      <meta property="og:url" content="https://matteopolo.com/partecipazione" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Provandoci sempre le cose possono cambiare - Marta Cester" />
      <meta property="og:description" content="Oggi vorrei attraverso questo post, rivolgermi ai più giovani, a quelli che potrebbero essere miei coetanei" />
      <meta property="og:image" content="https://matteopolo.com/static/img/partecipazione.png" />
      <div className="single-blog">
        <div className="container">
          <div className="blog-feature-img">
            <img src="static/img/partecipazione.png" title="" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">Democrazia</a>
                  </h6>
                  <h2> Provandoci sempre le cose possono cambiare - Marta Cester</h2>
                  <div className="media">
                    <div className="avatar">
                      <img src="static/img/marta-cester.png" title="" alt="" />
                    </div>
                    <div className="media-body">
                      <label>Marta Cester</label>
                      <span>12 MAR 2023</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>Oggi vorrei attraverso questo post, rivolgermi ai più giovani, a quelli che potrebbero essere miei coetanei. </p>
                  <p>Vorrei rivolgermi a quelli che si sentono disillusi, che vedono un futuro grigio, quelli che pensano che le cose non cambieranno mai. </p>
                  <p>Vi voglio dire che solo provandoci e credendoci sempre, anche se è difficile, le cose possono cambiare. </p>
                  <p>Andare a votare è importante, perché è solo così che possiamo provarci davvero ad apportare una differenza in questa Italia che non vediamo adatta a noi. </p>
                  <p>Andate a votare, non importa quale simbolo, quale partito, esprimete la vostra idea e la vostra preferenza. Abbiate il coraggio di fare una scelta e di dare la vostra fiducia a qualcuno, perché solo con l’unione possiamo apportare una vera differenza. </p>
                  <p>Vedo sempre più giovani lasciare questo paese, perché non è più a portata di giovani, perché l’età media è altissima, perché i giovani vengono considerati davvero poco. </p>
                  <p>È solo facendo sentire la nostra voce che possiamo cambiare le cose ed essere considerati davvero, perché io non voglio andare all’estero per essere considerata e per avere uno stipendio dignitoso.
                    Voglio averlo qui, in Italia, a casa mia.</p>
                </div>
                <div className="nav tag-cloud">
                  <a href="#">Investimenti</a>
                  {/* <a href="#">Prima casa</a>
                  <a href="#">Grado</a> */}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div >
    </Layout >
  );
};
export default partecipazione;

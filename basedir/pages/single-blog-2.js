import Layout from "../src/layout/Layout";
const SingleBlog2 = () => {
  return (
    <Layout blog>
      <div className="single-blog">
        <div className="container">
          <div className="blog-feature-img">
            <img src="static/img/precarieta.jpeg" title="" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">Politiche</a>
                  </h6>
                  <h2>Lotta alla precarietà, difesa dei servizi di base e dell’ambiente, investimenti per il progresso economico e sociale.</h2>
                  <div className="media">
                    <div className="avatar">
                      <img src="static/img/autore-matteo.png" title="" alt="" />
                    </div>
                    <div className="media-body">
                      <label>Matteo Polo</label>
                      <span>9 MAR 2023</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>Sabato 11 marzo saremo al mercato settimanale di Città Giardino, per ritrovarci, per salutarci, per dirci ciò che non va e che vogliamo cambiare, ciò che va e che vogliamo migliorare. Mettersi in ascolto delle persone è il modo più giusto di costruire una proposta politica. Vogliamo iniziare così la nostra campagna collettiva.</p>

                  <p>Ci sono molte questioni che in queste settimane vogliamo rimettere al centro del dibattito pubblico, tra queste ce ne sono quatto che hanno la priorità.</p>

                  <p>La prima questione è far arrivare gli investimenti per creare sviluppo sostenibile e lavoro, per contrastare il dissesto idrogeologico e salvaguardare il territorio. Riteniamo che il mandato di questa giunta regionale abbia fortemente penalizzato Grado da questo punto di vista.</p>

                  <p>La seconda questione riguarda le politiche regionali per la prima casa, il welfare e la sanità. I costi degli appartamenti e degli affitti nella città di Grado impongono il potenziamento delle misure regionali esistenti per il sostegno agli affitti e all’acquisto della prima casa. Le carenze più volte riscontrate sulla medicina territoriale vanno colmate una volta per tutte, così come risulta inaccettabile la mancanza di adeguati servizi per l’infanzia in una comunità che è in calo demografico.</p>

                  <p>La terza questione riguarda l’ambiente. Servono più investimenti per l’economia circolare, per le comunità energetiche, per la manutenzione del territorio e per la lotta ai cambiamenti climatici. Dobbiamo dire no al rigassificatore a largo di Grado, perché sarebbe un danno per la nostra pesca, per il nostro turismo e per il traffico portuale della nostra regione.</p>

                  <p>La quarta questione riguarda l’istruzione e la formazione pubblica. È fondamentale dare slancio con nuove progettualità al fine di garantire a tutti un'adeguata educazione scolastica e la possibilità di affermarsi nella vita e di accedere a vecchie e nuove professioni.</p>

                  <p>Sintetizzando in pochi concetti: lotta alle condizioni di precarietà delle persone, difesa dei servizi di base e dell’ambiente, investimenti per il progresso economico e sociale.</p>

                  <p>Vi aspettiamo sabato al mercato, sarà una campagna collettiva  </p>

                </div>
                <div className="nav tag-cloud">
                  <a href="#">Politiche abitative</a>
                  <a href="#">Prima casa</a>
                  <a href="#">Grado</a>
                </div>
              </article>
              <div className="contact-form article-comment">
                <h4>Leave a Reply</h4>
                <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="Name"
                          id="name"
                          placeholder="Name *"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          name="Email"
                          id="email"
                          placeholder="Email *"
                          className="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Your message *"
                          rows={4}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send">
                        <button className="px-btn px-btn-theme">
                          <span>Submit</span> <i className="arrow" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SingleBlog2;

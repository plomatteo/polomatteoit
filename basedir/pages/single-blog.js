import Layout from "../src/layout/Layout";
const SingleBlog = () => {
  return (
    <Layout blog>
      <div className="single-blog">
        <div className="container">
          <div className="blog-feature-img">
            <img src="static/img/casa.png" title="" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">Politiche abitative</a>
                  </h6>
                  <h2>La prima casa deve essere un diritto anche se nasci in una località turistica</h2>
                  <div className="media">
                    <div className="avatar">
                      <img src="static/img/autore-matteo.png" title="" alt="" />
                    </div>
                    <div className="media-body">
                      <label>Matteo Polo</label>
                      <span>4 MAR 2023</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>
                    Non mi stancherò mai di ripetere come Grado abbia bisogno di tutte quelle forme di edilizia che possono facilitare l'acquisto della prima casa per i residenti.Ne sono fermamente convinto. Basta dare un’occhiata ai prezzi al metro quadro di un appartamento per capire che non tutti i lavoratori e le lavoratrici possono ormai permettersi l'acquisto di un bene primario come la casa.
                  </p>
                  <p>
                    Siamo dentro l'inverno demografico e se accettiamo che il mercato immobiliare della nostra città metta alle porte anche i pochi residenti che siamo, rischiamo di trasformare Grado in una località turistica senza l'anima della sua comunità.
                  </p>
                  <h4>Cosa abbiamo fatto durante il mandato di Dario Raugna?</h4>
                  <p>
                    Durante lo scorso mandato comunale siamo intervenuti con il recupero di 5 appartamenti comunali in stato di abbandono e li abbiamo messi a disposizione per l’emergenza abitativa temporanea. Sono appartamenti ad alta rotazione che servono a non lasciare per strada nessuno. <br /><br /> Abbiamo anche varato il nuovo piano regolatore che ha aumentato le superfici edificabili con edilizia convenzionata.
                  </p>
                  <h4>Cosa si deve fare adesso?</h4>
                  <p>
                    Adesso serve una “fase 2” che necessità del sostegno economico della regione per concretizzare la realizzazione di nuove abitazioni.
                  </p>
                  <p>
                    Servono nuovi appartamenti e nuove assegnazioni di case ATER. La Regione intervenga rapidamente sulla questione a lungo trascurata delle case ATER attualmente locate. Più attenzione e cura verso queste abitazioni da parte delle Aziende Territoriali e più personale per migliorare l’efficienza del servizio erogato al cittadino.
                  </p>
                  <p>
                    La misura regionale per “l’acquisto, nuova costruzione e recupero della prima casa di abitazione” andrebbe rivista e aumentata per i residenti delle località turistiche in considerazione delle peculiarità del mercato immobiliare. La stessa cosa va fatta per la misura di sostegno agli affitti.
                  </p>
                  <p>Il tema della prima casa lo avevo posto anche al tavolo del “G20 spiagge” (che è un nome altisonante per indicare il summit annuale tra le prime 20 località balneare italiane) ed avevo registrato come è ovvio che anche molte altre località hanno questa problematica. Ecco perché sarebbe molto utile partecipare a quelle riunioni (!) e condizionarne il dibattito come abbiamo fatto negli anni passati assieme all’allora Sindaco di Lignano. Peraltro la capacità del “G20 spiagge” di incidere sulle decisioni del Governo nazionale di quel tavolo l’abbiamo misurata anche in occasione della crisi pandemica.
                  </p>
                  <p>
                    Questa è la nostra proposta in sintesi, ma ci tengo anche a mettermi in ascolto.
                    Se avete dei suggerimenti o anche domande vi lascio a disposizione nei commenti un form di contatto.
                  </p>
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
export default SingleBlog;

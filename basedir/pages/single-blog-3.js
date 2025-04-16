import Layout from "../src/layout/Layout";
const SingleBlog2 = () => {
  return (
    <Layout blog >
      <meta property="og:url" content="https://matteopolo.com/single-blog-3" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Lotta alla precarietà, difesa dei servizi, investimenti per il progresso." />
      <meta property="og:description" content="Ci sono molte questioni che in queste settimane vogliamo rimettere al centro del dibattito pubblico, tra queste ce ne sono quatto che hanno la priorità." />
      <meta property="og:image" content="https://matteopolo.com/static/img/mare-montagna.png" />
      <div className="single-blog">
        <div className="container">
          <div className="blog-feature-img">
            <img src="static/img/mare-montagna.png" title="" alt="" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="article">
                <div className="article-title">
                  <h6>
                    <a href="#">Investimenti</a>
                  </h6>
                  <h2>Finanziamenti per impianti di risalita a bassa quota sì, escavi delle cavane no</h2>
                  <div className="media">
                    <div className="avatar">
                      <img src="static/img/dario-raugna.png" title="" alt="" />
                    </div>
                    <div className="media-body">
                      <label>Dario Raugna</label>
                      <span>11 MAR 2023</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>Recentemente mi sono imbattuto in un articolo che dedica un intero paragrafo alla nostra Regione. Il tema è quello ambientale e la critica riguarda l’opportunità di investire ingenti somme di denaro pubblico sugli <b>impianti sciistici a bassa quota</b>, da tempo privi di innevamento naturale, cosicché invece di procedere attraverso la riconversione socioeconomica del nostro territorio e delle comunità che lo abitano si persevera incuranti degli effetti del <b>cambiamento climatico</b> ormai noti a tutti noi e non soltanto al mondo della scienza.</p>
                  <p>Capita che a Sella Nevea sia prevista la costruzione un <b>nuovo impianto di risalita</b> per servire una pista sul versante esposto al sole chiamata “Slalom”, <b>già dismessa nel 2006 per mancanza di neve</b>; che nel comprensorio di Pradibosco, alla stupefacente altitudine di 1200 metri sul livello del mare, venga <b>riaperto un impianto già chiuso per otto anni a causa dello scarso innevamento</b>,  che è perfino diventato un “caso di studio” da parte dell’organismo indipendente internazionale Eurac che punta ad aiutare le stazioni sciistiche e le comunità che orbitano loro intorno a superare la propria dipendenza dalla neve.</p>
                  <p>Ma Il caso più emblematico è quello di Tarvisio dove è prevista la realizzazione di una pista da sci lungo il Monte Florianca, che arriva fino alla Piana dell’Angelo, a <b>780 metri di quota</b>. Per ironia della sorte il caso vuole che proprio lì ci sia il <b>ristorante “Al Vecchio Skilift” di proprietà del vicepresidente del Consiglio regionale</b>, il leghista <b>Stefano Mazzolini</b>. Il costo si aggira intorno ai 2,5 milioni di euro e poco importa se per creare il tracciato sarà necessario <b>abbattere un fitto bosco di circa 6 ettari.</b></p>
                  <p>Sono convinto che al di là del macroscopico tema ambientale, sconosciuto soltanto a chi ci governa, si possa trarre insegnamento anche dalle notizie più infelici, come quelle qui sopra riportate. Sto pensando ad una soluzione per <b>l’escavazione delle nostre cavane</b>, che la Regione di era ripromessa di voler fare. Ecco, dopo vari tentativi finiti come un sasso nell’acqua (sarebbe meglio dire nel fango), <b>forse la soluzione è più vicina di quel che si potesse pensare</b>: basterà <b>regalare un casone al vicepresidente del consiglio</b> o ad altro soggetto affine il governatore Fedriga <b>per portare finalmente l’attenzione della nostra laguna</b> al cospetto di chi si era impegnato a fornirci una soluzione.</p>
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
export default SingleBlog2;

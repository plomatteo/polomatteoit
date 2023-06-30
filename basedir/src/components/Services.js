import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="le-nostre-idee"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>I miei progetti</h3>
        </div>
        <div className="row">

          <h1>Coming soon</h1>
          {/* <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i class="icon theme-bg bi-house-door" />
              <div className="feature-content media-body">
                <h5>Nuove politiche abitative</h5>
                <p>
                  Tutte le persone hanno diritto ad avere un tetto sopra la testa. Vogliamo creare <strong>nuova edilizia convenzionata</strong>. Sostenere maggiormente i singoli e le famiglie nell'acquisto o nella locazione della <strong>prima casa</strong>. Intervenire rapidamente sulla questione a lungo trascurata delle <strong>case ATER</strong> attualmente locate. Più <strong>attenzione</strong> e<strong> cura</strong> verso queste abitazioni e più personale per migliorare l’efficienza del servizio.

                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg bi-universal-access" />
              <div className="feature-content media-body">
                <h5>Ridurre le diseguaglianze</h5>
                <p>
                  Vogliamo realizzare un nuovo <strong>welfare di prossimità</strong>, che non si limiti ad assistere ma costruisca <strong>percorsi di emancipazione</strong> e di <strong>autonomia</strong>. Reintrodurremo la <strong>Misura attiva di sostegno al reddito</strong>, che a differenza del RdC, prevede la <strong>presa in carico personalizzata</strong> da parte del Servizio sociale dei Comuni, in
                  raccordo con i Centri per l’Impiego e i Servizi regionali per l’Orientamento.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Fare economie, creare lavoro</h5>
                <p>
                  <p>Basta con <strong>inutili contributi</strong> a pioggia: milioni di euro per nuovi impianti sciistici a bassa quota, rimborsi insufficienti alle imprese per i <strong>costi energetici</strong>, incentivi sulle fonti rinnovabili erogati in modo inefficiente e a <strong>favore di pochi</strong>, mancanza di una seria programmazione della spesa pubblica. Servono scelte coraggiose.<br />Destinare almeno il 3% del PIL regionale alla <strong>ricerca</strong>, favorire l’<strong>economia circolare</strong> e la crescita delle professionalità necessarie alla <strong>transizione ecologica</strong>; responsabilità sociale d’impresa e <strong>stop al lavoro precario</strong>, portare l’<strong>occupazione femminile</strong> al 70% e ridurre la disoccupazione dei <strong>giovani</strong> che non studiano né lavorano sotto il 10%.</p>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg bi-heart-pulse" />
              <div className="feature-content media-body">
                <h5>La sanità è pubblica</h5>
                <p><strong>Code</strong> interminabili per visite urgenti, <strong>personale</strong> medico e ospedaliero <strong>allo stremo</strong>, macchinari obsoleti, <strong>pronto soccorsi affollati</strong>, eccesso di <strong>mortalità tra i peggiori d’Italia</strong> a seguito del Covid-19, crescita dell’<strong>offerta privata</strong> a scapito della efficienza delle <strong>strutture pubbliche</strong>; la sanità regionale va completamente risanata.&nbsp;<br />Investire davvero nella <strong>sanità territoriale</strong>, riconoscere i giusti <strong>incentivi al personale</strong>, affrontare la carenza di medici di base, potenziare la <strong>prevenzione</strong>, sviluppare la <strong>telemedicina</strong>, nominare ai vertici delle aziende sanitarie i <strong>professionisti migliori</strong>. <br /><br />
                  {/* a)	equità di servizi tra aree urbane, interne e montane, garantendo guardie mediche e medici di base; <br /><br />
                  b)	destinare alla prevenzione almeno il 5% delle risorse destinate alla sanità, agire con il potenziamento della medicina di iniziativa per promuovere la salute, la prevenzione e i corretti stili di vita; <br /><br />
                  c)	contrasto alla privatizzazione e all’aziendalizzazione delle strutture sanitarie; <br /><br />
                  d)  rilanciare la sanità pubblica attraverso un piano di assunzioni concordato con i rappresentanti dei lavoratori; contrastare la fuga dei professionisti attraverso misure di incentivazione economica e di valorizzazione del personale; <br /><br />
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg bi-tree" />
              <div className="feature-content media-body">
                <h5>Conversione ecologica e ambiente</h5>
                <p>Non abbiamo altra terra che quella in cui viviamo. Eppure <strong>consumiamo suolo</strong>, disperdiamo acqua nonostante la <strong>siccità</strong> imminente, tolleriamo nuove <strong>opere inutili</strong> ed impattanti, non ci preoccupiamo dell’aria <strong>inquinata</strong>, dei fiumi in secca e degli <strong>incendi</strong> estivi. Non possiamo più perdere tempo.<br />Istituire un tavolo permanente per l’<strong>emergenza ambientale</strong>, rendere subito operativo un <strong>Piano di adattamento ai cambiamenti climatici</strong>, finanziare investimenti per diminuire le perdite di acqua potabile, incentivare il <strong>riutilizzo di acque depurate</strong> per industrie e abitazioni. <br /><br />
                  a) Obiettivo “consumo di suolo 0” e investimenti su prevenzione del dissesto idrogeologico <br /><br />
                  b) Premiare chi diminuisce le emissioni di CO2 e monitorare l’avvicinamento al FIT for 55 <br /><br />
                  c) Meno spreco di risorse idriche in agricoltura modificando tipologie e modalità di coltivazione. Realizzazione di acquedotti duali<br /><br />
                  d) Sostegno a filiere corte e colture biologiche. Superamento dei fertilizzanti chimici e pesticidi <br /><br />
                  e) Tutela della biodiversità e del benessere animale.<br /><br />
                  f) Economia circolare per superare il ricorso a discariche e inceneritori.<br /><br />
                  g) NO al rigassificatore nel Golfo di Trieste, è incompatibile con le attività portuali, di pesca ed ha un impatto paesaggistico con riflessi sull'economia turistica della costa
                </p>
              </div>
            </div>
          </div> */}

        </div>
        <div className="separated" />
        {/* <Testimonials /> */}
      </div>
    </section>
  );
};
export default Services;

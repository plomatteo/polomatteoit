import emailjs from "emailjs-com";
import { useState } from "react";
const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    mobilePhone: "",
    subject: "",
    message: "",
  });
  const { name, email, mobilePhone, message, subject } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      mobilePhone === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_uxrnh5p", // service id
          // "template_21aw58z", // template id
          mailData,
          "xGk2IdutR2RWZt5FD" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", mobilePhone: "", message: "", subject: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <section
      id="contatti"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Contattami</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>Rimaniamo in contatto</h4>
              <p>
                Hai una proposta o un messaggio? Rimaniamo in contatto
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">
                    Grado
                  </span>
                </li>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">matte.polo@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
              <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        onChange={(e) => onChange(e)}
                        value={name}
                        id="name"
                        placeholder="Nome *"
                        className={`form-control ${error ? (!name ? "invalid" : "") : ""
                          }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        onChange={(e) => onChange(e)}
                        value={email}
                        id="email"
                        placeholder="Email *"
                        className={`form-control ${error ? (!email ? "invalid" : "") : ""
                          }`}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="mobilePhone"
                        onChange={(e) => onChange(e)}
                        value={mobilePhone}
                        id="mobilePhone"
                        placeholder="Telefono *"
                        className={`form-control ${error ? (!mobilePhone ? "invalid" : "") : ""
                          }`}
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        onChange={(e) => onChange(e)}
                        value={subject}
                        id="subject"
                        placeholder="Oggetto *"
                        className={`form-control ${error ? (!subject ? "invalid" : "") : ""
                          }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        id="message"
                        placeholder="Il tuo messaggio *"
                        rows={5}
                        className={`form-control ${error ? (!message ? "invalid" : "") : ""
                          }`}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      {/* <button
                        onSubmit={(e) => onSubmit(e)}
                        className="px-btn px-btn-theme"
                        type="button"
                        value="Send"
                      >
                        {" "}
                        send message
                      </button> */}
                      <input
                        className="px-btn px-btn-theme"
                        type="submit"
                        value="Invia il messaggio"
                      />
                    </div>
                    <span
                      id="suce_message"
                      className="text-success"
                      style={{
                        display:
                          error !== null ? (!error ? "block" : "none") : "none",
                      }}
                    >
                      Messaggio inviato con successo
                    </span>
                    <span
                      id="err_message"
                      className="text-danger"
                      style={{ display: "none" }}
                    >
                      Messaggio non inviato
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

import Link from "next/link";

const Blog = () => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Open Blog</h3><br /><br />
          <h6>Uno spazio aperto ai contributi di chi si riconosce in questa campagna</h6>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog-3" legacyBehavior >
                  <a>
                    <img src="static/img/mare-montagna.png" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info" legacyBehavior>
                <div className="meta">11/MAR/2023</div>
                <h6>
                  <Link href="/single-blog-3" legacyBehavior>
                    <a>
                      Finanziamenti per impianti di risalita a bassa quota sì, escavi delle cavane no
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog-2" legacyBehavior>
                  <a>
                    <img src="static/img/precarieta.jpeg" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">9/MAR/2023</div>
                <h6>
                  <Link href="/single-blog-2" legacyBehavior>
                    <a>
                      Lotta alla precarietà, difesa dei servizi di base e dell’ambiente, investimenti
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog" legacyBehavior>
                  <a>
                    <img src="static/img/casa.png" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">4/MAR/2023</div>
                <h6>
                  <Link href="/single-blog" legacyBehavior>
                    <a>
                      La prima casa deve essere un diritto anche se nasci in una località turistica
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>


          {/* <div className="col-12 read-more-blog text-center">
            <Link href="/blog">
              <a className="px-btn px-btn-theme">More Blogs</a>
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Blog;

import { FaEnvelope } from "react-icons/fa";

const Footerbar = () => {
  return (
    <section className="footer">
      <div className="footerbar">
        <div className="about-us">
          <h2>About Tsinda</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tenetur
            accusamus fugiat et nesciunt ipsum id eligendi quia necessitatibus
            nisi alias deleniti nemo esse magni delectus cum, sunt, non
            pariatur.
          </p>
        </div>
        <div className="related-footer">
          <h2>populer</h2>
          <div className="related-content-footer">
            <img src="/footbalimg/arsenal1.jpg" />
            <div className="footer-desc">
              <h3>
                <a href="">amafoto utabonye kumukino wa rayon</a>
              </h3>
              <p>25,june 2023</p>
            </div>
          </div>
          <div className="related-content-footer">
            <img src="/footbalimg/arsenal1.jpg" />
            <div className="footer-desc">
              <h3>
                <a href="">amafoto utabonye kumukino wa rayon</a>
              </h3>
              <p>25,june 2023</p>
            </div>
          </div>
          <div className="related-content-footer">
            <img src="/footbalimg/arsenal1.jpg" />
            <div className="footer-desc">
              <h3>
                <a href="">amafoto utabonye kumukino wa rayon</a>
              </h3>
              <p>25,june 2023</p>
            </div>
          </div>
        </div>
        <div className="tags">
          <h2>tags</h2>

          <ul>
            <li>
              <a href="">transfer news</a>
            </li>
            <li>
              <a href="">basketball news</a>
            </li>
            <li>
              <a href="">football news</a>
            </li>
            <li>
              <a href="">rwandan volleyball</a>
            </li>
            <li>
              <a href="">rwanda premeir league</a>
            </li>
          </ul>
        </div>
        <div className="footer-news">
          <h2>news letter</h2>
          <p>Subscribe to our news letter</p>
          <form method="POST">
            <input type="email" placeholder="Enter your Email " />
            <button>
              <FaEnvelope />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Footerbar;

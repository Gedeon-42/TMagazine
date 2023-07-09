import {
  FaArrowLeft,
  FaArrowRight,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Recentpost = () => {
  return (
    <div>
      <div className="recent-post-container">
        <div className="post-container">
          <h1>Lates Post</h1>
          <div className="post-content">
            <img src="footbalimg/ferwafa3.jpg" />
            <div className="post-desc">
              <a href="" className="category-link">
                football
              </a>
              <h3> amavubi yatwaye zone 5 muri BAL</h3>
              <p>
                26june
                <span>
                  {" "}
                  <FaClock /> 2mins read
                </span>
              </p>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore ad alias accusamus esse in obcaecati aliquam error
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore ad alias accusamus esse in obcaecati aliquam error
              </p>
              <a href="" className="readmore">
                READ MORE{" "}
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className="post-content">
            <img src="footbalimg/ferwafa5.jpg" />
            <div className="post-desc">
              <a href="" className="category-link">
                volleyball
              </a>
              <h3> amavubi yatwaye zone 5 muri BAL</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore ad alias accusamus esse in obcaecati aliquam error
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore ad alias accusamus esse in obcaecati aliquam error
              </p>
              <a href="" className="readmore">
                READ MORE{" "}
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className="post-content">
            <img src="footbalimg/Ferwafa1.jpg" />
            <div className="post-desc">
              <a href="" className="category-link">
                basketball
              </a>
              <h3> amavubi yatwaye zone 5 muri BAL</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore ad alias accusamus esse in obcaecati aliquam error !
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore ad alias accusamus esse in obcaecati aliquam error
              </p>
              <a href="" className="readmore">
                READ MORE{" "}
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
          <div className="post-content">
            <img src="footbalimg/ferwafa3.jpg" />
            <div className="post-desc">
              <a href="" className="category-link">
                volleyball
              </a>
              <h3> amavubi yatwaye zone 5 muri BAL</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore ad alias accusamus esse in obcaecati aliquam error
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore ad alias accusamus esse in obcaecati aliquam error
              </p>
              <a href="" className="readmore">
                READ MORE{" "}
                <span>
                  <FaArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="related-post">
          <h2>follow us</h2>
          <div className="social-container">
            <a href="" className="social-link">
              {" "}
              <FaFacebook /> | facebook <span>65k</span>
            </a>
            <a href="" className="social-link">
              {" "}
              <FaTwitter /> | twitter <span>12k</span>
            </a>
            <a href="" className="social-link">
              {" "}
              <FaInstagram /> | instagram <span> 24k</span>
            </a>
          </div>
          <div className="related-desc">
            <ul>
              <li>
                <a href="">popular</a>
              </li>
              <li>
                <a href="">feature</a>
              </li>
              <li>
                <a href="">commets</a>
              </li>
            </ul>
            <div className="related-container">
              <div className="related-content">
                <img
                  src="footbalimg/ferwafa3.jpg"
                  style={{
                    width: "150px",
                    height: "100px",
                    borderRadius: "7px",
                  }}
                />
                <div className="related-link">
                  <a href="" className="category-link">
                    volleyball
                  </a>
                  <h3>
                    <a href="">
                      Lorem ipsum dolor sit amet consectetur Saepe ullam aliquam
                    </a>
                  </h3>
                </div>
              </div>
              <div className="related-content">
                <img
                  src="footbalimg/ferwafa3.jpg"
                  style={{
                    width: "150px",
                    height: "100px",
                    borderRadius: "7px",
                  }}
                />
                <div className="related-link">
                  <a href="" className="category-link">
                    volleyball
                  </a>
                  <h3>
                    <a href="">
                      Lorem ipsum dolor sit amet consectetur Saepe ullam aliquam
                    </a>
                  </h3>
                </div>
              </div>
              <div className="related-content">
                <img
                  src="footbalimg/Ferwafa1.jpg"
                  style={{
                    width: "150px",
                    height: "100px",
                    borderRadius: "7px",
                  }}
                />
                <div className="related-link">
                  <a href="" className="category-link">
                    volleyball
                  </a>
                  <h3>
                    <a href="">
                      Lorem ipsum dolor sit amet consectetur Saepe ullam aliquam
                    </a>
                  </h3>
                </div>
              </div>
              <div className="related-content">
                <img
                  src="footbalimg/ferwafa5.jpg"
                  style={{
                    width: "150px",
                    height: "100px",
                    borderRadius: "7px",
                  }}
                />
                <div className="related-link">
                  <a href="" className="category-link">
                    volleyball
                  </a>
                  <h3>
                    <a href="">
                      Lorem ipsum dolor sit amet consectetur Saepe ullam aliquam
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recentpost;

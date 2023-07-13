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
            <img src="footbalimg/mancity5.jpg" />
            <div className="post-desc">
              <a href="" className="category-link">
                football
              </a>
              <h3>
                {" "}
                <a href=""> man city yatwaye igikombe cya championa</a>{" "}
              </h3>
              <span className="date">
                26june <FaClock /> 2mins read
              </span>

              <p>
                Ishyirahamwe ry'umupira w'amaguru ( FERWAFA) ryabonye umuyobozi
                mushya ariwe Munyentwari Alphonse watorewe kuba umuyobozi mukuru
                wa FERWAFA akugirizwa na Habyarimana Matiku Marcel naho Visi
                Perezida wa kabiri ushinzwe Tekiniki akaba Mugisha Richard.
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
              <h3>
                {" "}
                <a href="">Ferwafa yanzuye inteko rusange</a>
              </h3>
              <span className="date">
                26june <FaClock /> 2mins read
              </span>
              <p>
                Ishyirahamwe ry'umupira w'amaguru ( FERWAFA) ryabonye umuyobozi
                mushya ariwe Munyentwari Alphonse watorewe kuba umuyobozi mukuru
                wa FERWAFA akugirizwa na Habyarimana Matiku Marcel naho Visi
                Perezida wa kabiri ushinzwe Tekiniki akaba Mugisha Richard.
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
            <img src="footbalimg/arsenal2.jpg" />
            <div className="post-desc">
              <a href="" className="category-link">
                basketball
              </a>
              <h3>
                <a href="">Jorginho yongereye amasezerano</a>{" "}
              </h3>
              <span className="date">
                26june <FaClock /> 2mins read
              </span>
              <p>
                Ishyirahamwe ry'umupira w'amaguru ( FERWAFA) ryabonye umuyobozi
                mushya ariwe Munyentwari Alphonse watorewe kuba umuyobozi mukuru
                wa FERWAFA akugirizwa na Habyarimana Matiku Marcel naho Visi
                Perezida wa kabiri ushinzwe Tekiniki akaba Mugisha Richard.
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
              <h3>
                {" "}
                <a href="">vision yamanutse mucyakabiri L</a>{" "}
              </h3>
              <span className="date">
                26june <FaClock /> 2mins read
              </span>
              <p>
                Ishyirahamwe ry'umupira w'amaguru ( FERWAFA) ryabonye umuyobozi
                mushya ariwe Munyentwari Alphonse watorewe kuba umuyobozi mukuru
                wa FERWAFA akugirizwa na Habyarimana Matiku Marcel naho Visi
                Perezida wa kabiri ushinzwe Tekiniki akaba Mugisha Richard.
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
                    football
                  </a>
                  <h3>
                    <a href="">vision yamanutse mucyiciro cya kane</a>
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
                    <a href="">Amagaju yagarutse mucyiciro cyambere</a>
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
                    <a href="">mukura yaguze umukinnyi ukomeye</a>
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
                    <a href="">Urwanda rwatwaye irushanwa ryisi</a>
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

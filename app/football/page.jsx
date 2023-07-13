import Link from "next/link";
import {
  FaArrowRight,
  FaCircleNotch,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export const metadata = {
  title: "football",
};

const Footballpage = () => {
  return (
    <div className="category-container">
      <div className="main-category">
        <div className="main-category-content">
          <img
            src="/footbalimg/Ferwafa5.jpg"
            className="main-category-img"
            alt=""
          />
          <div className="main-category-desc">
            <a href="" className="category-link">
              <FaCircleNotch style={{ fontSize: "8px" }} /> football
            </a>
            <h2>
              <a href="">FERWAFA yabonye umuyobozi mushya.</a>
            </h2>
            <span className="date">22 july 2023</span>
            <p>
              Ishyirahamwe ry'umupira w'amaguru ( FERWAFA) ryabonye umuyobozi
              mushya ariwe Munyentwari Alphonse watorewe kuba umuyobozi mukuru
              wa FERWAFA akugirizwa na Habyarimana Matiku Marcel naho Visi
              Perezida wa kabiri ushinzwe Tekiniki akaba Mugisha Richard.
            </p>
          </div>
          {/* categorypost wrapper */}
          <div className="category-post-wrapper">
            <div className="category-post-content">
              <img src="/footbalimg/arsenal2.jpg" />
              <div className="category-post-desc">
                <a href="" className="category-link">
                  <FaCircleNotch style={{ fontSize: "10px" }} /> football
                </a>
                <h2>
                  <a href="">Jorginho muri arsenal</a>
                </h2>
                <div className="date">11 may 2023</div>
                <p>
                  Ikipe ya Manchester city yamaze kumvikana n'umukinnyi
                  w'umunyaCroatia Mateo Kovacic kuyerekezamo mu gihe kigana
                  n'imyaka 5 akaba aguzwe agera kuri miliyoni 30 z'amapawundi.
                </p>
                <a href="" className="readmore">
                  READ MORE{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="category-post-content">
              <img src="/footbalimg/real3.jpg" />
              <div className="category-post-desc">
                <a href="" className="category-link">
                  <FaCircleNotch style={{ fontSize: "10px" }} /> football
                </a>
                <h2>
                  <a href="">luca modrich munzira isohoka muri Real</a>
                </h2>
                <div className="date">11 may 2023</div>
                <p>
                  Ikipe ya Manchester city yamaze kumvikana n'umukinnyi
                  w'umunyaCroatia Mateo Kovacic kuyerekezamo mu gihe kigana
                  n'imyaka 5 akaba aguzwe agera kuri miliyoni 30 z'amapawundi.
                </p>
                <a href="" className="readmore">
                  READ MORE{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="category-post-content">
              <img src="/footbalimg/real2.jpg" />
              <div className="category-post-desc">
                <a href="" className="category-link">
                  <FaCircleNotch style={{ fontSize: "10px" }} /> football
                </a>
                <h2>
                  <a href="">vinicius yongereye amasezerano azageza 2025</a>
                </h2>
                <div className="date">11 may 2023</div>
                <p>
                  Ikipe ya Manchester city yamaze kumvikana n'umukinnyi
                  w'umunyaCroatia Mateo Kovacic kuyerekezamo mu gihe kigana
                  n'imyaka 5 akaba aguzwe agera kuri miliyoni 30 z'amapawundi.
                </p>
                <a href="" className="readmore">
                  READ MORE{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="category-post-content">
              <img src="/footbalimg/real1.jpg" />
              <div className="category-post-desc">
                <a href="" className="category-link">
                  <FaCircleNotch style={{ fontSize: "10px" }} /> football
                </a>
                <h2>
                  <a href="">real madrid yatinze barcelona</a>
                </h2>
                <div className="date">11 may 2023</div>
                <p>
                  Ikipe ya Manchester city yamaze kumvikana n'umukinnyi
                  w'umunyaCroatia Mateo Kovacic kuyerekezamo mu gihe kigana
                  n'imyaka 5 akaba aguzwe agera kuri miliyoni 30 z'amapawundi.
                </p>
                <a href="" className="readmore">
                  READ MORE{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="category-post-content">
              <img src="/footbalimg/mancity5.jpg" />
              <div className="category-post-desc">
                <a href="" className="category-link">
                  <FaCircleNotch style={{ fontSize: "10px" }} /> football
                </a>
                <h2>
                  <a href="">mancity yararye bamwe mu bakinnyi</a>
                </h2>
                <div className="date">11 may 2023</div>
                <p>
                  Ikipe ya Manchester city yamaze kumvikana n'umukinnyi
                  w'umunyaCroatia Mateo Kovacic kuyerekezamo mu gihe kigana
                  n'imyaka 5 akaba aguzwe agera kuri miliyoni 30 z'amapawundi.
                </p>
                <a href="" className="readmore">
                  READ MORE{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="category-post-content">
              <img src="/footbalimg/arsenal1.jpg" />
              <div className="category-post-desc">
                <a href="" className="category-link">
                  <FaCircleNotch style={{ fontSize: "10px" }} /> football
                </a>
                <h2>
                  <a href="">smith rowe yavuye munvune</a>
                </h2>
                <div className="date">11 may 2023</div>
                <p>
                  Ikipe ya Manchester city yamaze kumvikana n'umukinnyi
                  w'umunyaCroatia Mateo Kovacic kuyerekezamo mu gihe kigana
                  n'imyaka 5 akaba aguzwe agera kuri miliyoni 30 z'amapawundi.
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
          {/* endof categorynpost wrapper */}
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
        <img src="advert/primus2.jpg" className="advert-img" />
        <div className="link-category">
          <div className="link-cat-desc">
            <h3>Categories</h3>
            <ul>
              <li>
                <a href="/football">football</a>
                <p>(255)</p>
              </li>
              <li>
                <a href="/basketball">basketball</a>
                <p>(124)</p>
              </li>
              <li>
                <a href="/volleyball">volleyball</a>
                <p>(25)</p>
              </li>
              <li>
                <a href="/handball">handball</a>
                <p>(5)</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="related-container">
          <h3>Latest post</h3>
          <div className="related-content">
            <img
              src="footbalimg/mancity5.jpg"
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
              <p className="date">15 february 2023</p>
            </div>
          </div>
          <div className="related-content">
            <img
              src="footbalimg/arsenal2.jpg"
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
              <p className="date">15 february 2023</p>
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
                football
              </a>
              <h3>
                <a href="">ferwafa yatoye umunyamabanga</a>
              </h3>
              <p className="date">15 february 2023</p>
            </div>
          </div>
          <div className="related-content">
            <img
              src="footbalimg/real1.jpg"
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
                <a href="">Apr yatsinze kiyovu</a>
              </h3>
              <p className="date">15 february 2023</p>
            </div>
          </div>
          <div className="related-content">
            <img
              src="footbalimg/arsenal1.jpg"
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
                <a href="">rayon sport yabonye umutoza</a>
              </h3>
              <p className="date">15 january 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footballpage;

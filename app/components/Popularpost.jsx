"use client";
import CountUp from "react-countup";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Popularpost = () => {
  return (
    <div className="popular">
      <div className="main-popular">
        <h3>popular</h3>
        <div className="main-desc">
          <img src="footbalimg/Ferwafa5.jpg" />
          <h3>
            <a href="">Ferwafa yabonye umuyobozi mushya</a>
          </h3>
          <p>26june,2023</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            neque culpa reiciendis, nisi illum eveniet, dignissimos deleniti
            voluptatibus quibusdam laborum enim nobis libero at. Eius
            necessitatibus dignissimos nostrum consectetur tempore!
          </p>
        </div>
      </div>
      <div className="popular-category">
        <div className="cat-links">
          <ul>
            <li>
              <a href="">football</a>
            </li>
            <li>
              <a href="">basketball</a>
            </li>
            <li>
              <a href="">volleyball</a>
            </li>
          </ul>
        </div>
        <div className="popular-cat-desc">
          <div className="pupular-categ">
            <img src="footbalimg/ferwafa5.jpg" />
            <h3>
              <a href="">kovacic muri city</a>
            </h3>
            <p>22 july 2023</p>
          </div>
          <div className="pupular-categ">
            <img src="footbalimg/ferwafa3.jpg" />
            <h3>
              <a href="">arsenal imeze nabi</a>
            </h3>
            <p>22 july 2023</p>
          </div>
          <div className="pupular-categ">
            <img src="footbalimg/ferwafa5.jpg" />
            <h3>
              <a href="">spurs yagarutse</a>
            </h3>
            <p>22 july 2023</p>
          </div>
        </div>
      </div>
      <div className="related-posts">
        <h3>Follow us</h3>
        <div className="social-container">
          <a href="" className="social-link">
            {" "}
            <FaFacebook /> | facebook{" "}
            <span>
              <CountUp start={40} end={50} duration={4} />k
            </span>
          </a>
          <a href="" className="social-link">
            {" "}
            <FaTwitter /> | twitter{" "}
            <span>
              <CountUp start={20} end={30} duration={4} />k
            </span>
          </a>
          <a href="" className="social-link">
            {" "}
            <FaInstagram /> | instagram{" "}
            <span>
              {" "}
              <CountUp start={5} end={10} duration={4} />k
            </span>
          </a>
        </div>
        <img src="advert/fanta1.jpg" className="advert-img" />
      </div>
    </div>
  );
};
export default Popularpost;

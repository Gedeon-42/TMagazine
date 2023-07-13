import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt } from "react-icons/fa";

const Thumbnail = () => {
  return (
    <>
      <section className="thumb-section">
        <div className="thumb-container">
          <div className="content-wrapper">
            <Link href="" className="btn-link">
              football
            </Link>
            <h1>
              {" "}
              <a href="">Ferwafa yabonye umuyobozi mushya</a>
            </h1>
            <span className="date">
              <FaPencilAlt />
              26 june,2023
            </span>
            <p>
              Ishyirahamwe ry'umupira w'amaguru ( FERWAFA) ryabonye umuyobozi
              mushya ariwe Munyentwari Alphonse watorewe kuba umuyobozi mukuru
              wa FERWAFA akugirizwa na Habyarimana Matiku Marcel naho Visi
              Perezida wa kabiri ushinzwe Tekiniki akaba Mugisha Richard.
            </p>
          </div>
          <div className="img-content-wapper">
            <img src="/footbalImg/Ferwafa5.jpg" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Thumbnail;

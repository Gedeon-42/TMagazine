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
            <h1>Ferwafa yabonye umuyobozi mushya</h1>
            <span>
              <FaPencilAlt />
              26 june,2023
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              beatae odio autem error accusantium doloribus, eos magni
              reprehenderit reiciendis nobis. Nobis perspiciatis obcaecati
              eligendi doloremque labore in quod provident error?
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

import { FaSearch } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-link">
          <div className="logo">
            <h2>kora magazine</h2>
          </div>
          <Link href="/football">football </Link>
          <Link href="/basketball">basketball</Link>
          <Link href="/volleyball">volleyball </Link>
          <Link href="/golf">golf</Link>
          <Link href="/tenis">tenis </Link>
          <Link href="/cycling">cycling</Link>
          <Link href="/handball">handball </Link>
          <Link href="/code/repos">repos </Link>
        </div>
        <div className="search-blog">
          <span>
            <FaSearch />
          </span>
        </div>
      </div>
    </>
  );
};
export default Navbar;

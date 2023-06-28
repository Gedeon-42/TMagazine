import Link from "next/link";

const Footballpage = ({ params: { name } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>single page for footbale</p>
    </div>
  );
};
export default Footballpage;

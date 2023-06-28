import Repo from "@/app/components/Repo";

const SingleRepo = ({ params: { name } }) => {
  return (
    <div>
      <Repo name={name} />
    </div>
  );
};
export default SingleRepo;

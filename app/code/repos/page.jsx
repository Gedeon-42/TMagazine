import Link from "next/link";
import { FaEye, FaStar } from "react-icons/fa";

async function fetchrepos() {
  const response = await fetch(
    "https://api.github.com/users/bradtraversy/repos"
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const repos = await response.json();
  return repos;
}
const Repospage = async () => {
  const repos = await fetchrepos();
  return (
    <div>
      <h1>repos page</h1>
      <div>
        {repos.map((repo) => (
          <div key={repo.name}>
            <Link href={`/code/repos/${repo.name}`}>
              <h4>{repo.name}</h4>
            </Link>
            <p>{repo.description}</p>
            <FaStar /> <span>{repo.stargazers_count}</span>
            <span>
              {" "}
              <FaEye />
              {repo.watchers_count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Repospage;

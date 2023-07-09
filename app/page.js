import Link from "next/link";
import { resolve } from "styled-jsx/css";
import Thumbnail from "./components/Thumbnail";
import Recentpost from "./components/recentpost";
import Videopart from "./components/Videopart";

async function fetchrepos() {
  const response = await fetch("https://api.github.com/users/Gedeon-42/repos");
  await new Promise((resolve) => setTimeout(resolve, 2000)); // wai 1second to laod data
  const repos = await response.json();
  return repos;
}
const Homepage = async () => {
  const repos = await fetchrepos();
  //console.log(repos);

  return (
    <div>
      <Thumbnail />
      <Recentpost />
      <Videopart />
      <div>
        {repos.map((repo) => (
          <div key={repo.id}>
            <Link href={`/football/category/cat/${repo.name}`}>
              <h3>{repo.name}</h3>
            </Link>
            <p>{repo.description}</p>
            <p>{repo.stargazers_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Homepage;

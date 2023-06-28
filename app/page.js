import Link from "next/link";
import { resolve } from "styled-jsx/css";

async function fetchrepos() {
  const response = await fetch("https://api.github.com/users/Gedeon-42/repos");
  await new Promise((resolve) => setTimeout(resolve, 2000)); // wai 1second to laod data
  const repos = await response.json();
  return repos;
}
const Homepage = async () => {
  const repos = await fetchrepos();
  console.log(repos);
  return (
    <div>
      <Link href="/football">football </Link>
      <Link href="/basketball">basketball</Link>
      <Link href="/volleyball">volleyball </Link>
      <Link href="/golf">golf</Link>
      <Link href="/tenis">tenis </Link>
      <Link href="/cycling">cycling</Link>
      <Link href="/handball">handball </Link>
      <Link href="/code/repos">repos </Link>
      <br />
      {/* {repos[1].name} */}
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

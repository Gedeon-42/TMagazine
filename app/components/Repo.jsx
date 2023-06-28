async function fetchrepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}`
  );
  const repo = await response.json();
  return repo;
}

const Repo = async ({ name }) => {
  const repo = await fetchrepo(name);
  return (
    <>
      <div>
        <h4>{repo.name}</h4>
        <p>{repo.description}</p>
      </div>
    </>
  );
};
export default Repo;

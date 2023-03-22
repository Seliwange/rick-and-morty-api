export async function fetchAllCharacters({ request }) {
  const searchTerm = new URL(request.url).searchParams;
  const search = searchTerm.get("name");
  let filter = "";
  if (search) {
    filter = `?name=${search}`;
  }

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${filter}`
  );
  if (response.status === 404) {
    console.log("Not Found", { status: 404 });
  }
  return response.json();
}

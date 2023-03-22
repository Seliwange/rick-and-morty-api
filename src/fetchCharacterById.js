export async function fetchCharacterById(id) {
  const api = `https://rickandmortyapi.com/api/character/${id}`;
  const data = await fetch(api).then((res) => res.json());
  return data;
}

export const fetchCharacterByIdRouted = ({ params: { characterId } }) =>
  fetchCharacterById(characterId);

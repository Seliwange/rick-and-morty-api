export const ROUTES = {
  characters: "/",
  character: (id = null) =>
    id ? `/character/${id}` : "/character/:characterId",
};

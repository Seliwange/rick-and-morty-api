import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CharacterDetailsPage } from "../components/CharacterDetailsPage/character.details.page";
import { ROUTES } from "../components/routes";
import { Layout } from "../layout";
import { fetchCharacterByIdRouted } from "../fetchCharacterById";
import { ErrorPage } from "../error.page";
import { CharactersPage } from "../components/CharactersPage/characters.page";
import { fetchAllCharacters } from "../fetchAllCharacters";

export const router = createBrowserRouter([
  {
    path: ROUTES.characters,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CharactersPage />,
        loader: fetchAllCharacters,
      },
    ],
  },
  {
    path: ROUTES.character(),
    element: <CharacterDetailsPage />,
    errorElement: <ErrorPage />,
    loader: fetchCharacterByIdRouted,
  },
]);

export const App = () => <RouterProvider router={router}></RouterProvider>;

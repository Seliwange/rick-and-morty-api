import "./Characters.scss";
import { NavLink, useLoaderData } from "react-router-dom";
import { ROUTES } from "../routes";
import { SearchForm } from "../SearchForm/searchForm";
import sortBy from "sort-by";

export const CharactersPage = () => {
  const characters = useLoaderData();
  const { results } = characters;

  return (
    <>
      <SearchForm />
      <section className="characters">
        <div className="container">
          <div className="characters__wrap">
            {results ? (
              results?.sort(sortBy("name", "status")).map((character) => {
                const { id, name, image, species } = character;
                return (
                  <NavLink
                    to={ROUTES.character(id)}
                    key={id}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    <img src={image} alt={name} />
                    <div className="character__heading">
                      <h3>{name}</h3>
                      <h4>{species}</h4>
                    </div>
                  </NavLink>
                );
              })
            ) : (
              <p>No matches found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

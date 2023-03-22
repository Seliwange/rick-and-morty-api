import "./SearchForm.scss";
import {
  Form,
  useNavigation,
  useSubmit,
  useSearchParams,
} from "react-router-dom";
import { useEffect } from "react";

export const SearchForm = () => {
  const navigation = useNavigation();
  const submit = useSubmit();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchCharacters = searchParams.get("name") ?? "";

  const search = async () => {
    searchParams.set("name", searchCharacters);
    setSearchParams(searchParams);
  };

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("name");

  useEffect(() => {
    document.getElementById("search").value = searchCharacters;
  }, [searchCharacters]);

  return (
    <>
      <section className="search">
        <div className="container">
          <Form
            className="search__form"
            id="search-form"
            onSubmit={search}
            role="search"
          >
            <input
              id="search"
              className={searching ? "loading" : ""}
              aria-label="Search contacts"
              placeholder="Filter by name..."
              type="search"
              name="name"
              defaultValue={searchCharacters}
              onChange={(event) => {
                const isFirstSearch = !searchCharacters;
                submit(event.currentTarget.form, {
                  replace: !isFirstSearch,
                });
              }}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
          </Form>
        </div>
      </section>
    </>
  );
};

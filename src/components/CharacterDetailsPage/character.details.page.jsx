import "./CharacterDetails.scss";
import { useLoaderData, useNavigate } from "react-router-dom";

export const CharacterDetailsPage = () => {
  const character = useLoaderData();
  const navigate = useNavigate();

  const { image, name, gender, status, species, origin, type } = character;

  return (
    <div className="character-details">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src="../images/arrow.svg" alt="arrow" />
        Go back
      </button>

      <div className="container">
        <div className="character-details__wrapper">
          <img className="character-details__avatar" src={image} alt={name} />
          <h2 className="character-details__name">{name}</h2>
          <p className="character-details__desc">Informations</p>
          <div className="character-details__info">
            <div>
              <h4>Gender</h4>
              <p>{gender}</p>
            </div>
            <div>
              <h4>Status</h4>
              <p>{status}</p>
            </div>
            <div>
              <h4>Specie</h4>
              <p>{species}</p>
            </div>
            <div>
              <h4>Origin</h4>
              <p>{origin.name}</p>
            </div>
            <div>
              <h4>Type</h4>
              <p>{type === "" ? "Unknown" : type}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useLocation } from "react-router-dom";

const GameDetails = () => {
  const data = useLocation().state;
  console.log("ki", data);
  const {
    thumbnail,
    title,
    genre,
    developer,
    publisher,
    release_date,
    platform,
    short_description,
    game_url,
  } = data.item;
  return (
    <div className="filter-display">
      <h1>More Description About The Game</h1>
      <div className="display-detail">
        <img className="align" src={thumbnail} alt="thubmnail images" />
        <div className="align-content">
          <p className="detail-title">{title} </p>
          <p className="detail-genre">Category :{genre}</p>
          <p className="detail-developer">Developed By :{developer}</p>
          <p className="detail-developer">Published By :{publisher}</p>
          <p className="detail-developer">Release date :{release_date}</p>
          <div className="description-content">
            <p>More Description About the game</p>
            <p>The game can be played only {platform}</p>
            <p>Short Description: {short_description}</p>
            <a href={game_url} >
              Click here to view the game{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;

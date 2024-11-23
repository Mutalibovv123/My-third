import React from "react";
import "./App.css";
import { useState } from "react";
import LikeButton from "./assets/like-button.jpg";
import Card from "./assets/components/Card";
import Data from "./assets/movies.json"

function App() {
   const [likes, setLikes]= useState(0)
   function handleLike(isLiked){
    setLikes((prev) => (isLiked ? prev + 1 : prev - 1))
   }
  return (
    <div>
      <header className="header__container container">
        <div className="logo">
          <div className="logo-img"></div>
          <h1>Kino Ro'yxati</h1>
        </div>
        <nav className="nav">
          <ul className="header-list">
            <li>
              <a href="#">Bosh sahifa</a>
            </li>
            <li>
              <a href="#">Kinolar</a>
            </li>
            <li>
              <a href="#">Yangiliklar</a>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <img src={LikeButton} width={70} height={70} alt="" />
          <span>{likes}</span>
          <h3>Likes</h3>
        </div>
      </header>
      <div className="movie">
        {Data.length > 0 &&
          Data.map(function (movie) {
            return (
              <Card
                key={movie.id}
                image={movie.Images[1]}
                title={movie.Title}
                plot={movie.Plot}
                year={movie.Year}
                released={movie.Released}
                runtime={movie.Runtime}
                language={movie.Language}
                rated={movie.Rated}
                country={movie.Country}
                like={handleLike}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
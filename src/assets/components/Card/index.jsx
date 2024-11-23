import React from "react";
import "./index.css";
import Like from "../../../assets/Liki.png";
import { useState } from "react";

function Card({image,title,plot,year,rated,released,runtime,language,country,like}){
    const [isLiked, setIsLiked]= useState(false)
    function handleImg(){
        setIsLiked(!isLiked);
        like(!isLiked)
    }
  return (
    <div>
      <div className="movie__container">
        <div className="movie-card-container">
          <div className="card">
            <img src={image} alt="" width={500} height={400} />
            <div className="information">
              <div className="title">
                <div className="titles">
                  <h3>{title}</h3>
                  <div className="like">
                    <img src={Like} width={25} height={25} alt="" onClick={handleImg}/>

                  </div>
                </div>
                <p>{plot}</p>
              </div>
              <div className="year-rating">
                <div className="year">
                  <h5>Yil:</h5>
                  <p>{year}</p>
                </div>
                <div className="rating">
                  <h5>Reyting:</h5>
                  <p>{rated}</p>
                </div>
              </div>
              <div className="time">
                <div className="made-time">
                  <h5>Chiqarilgan sana:</h5>
                  <p>{released}</p>
                </div>
                <div className="movie-time">
                  <h5>Davomiyligi:</h5>
                  <p>{runtime}</p>
                </div>
              </div>
              <div className="language">
                <div className="movie-language">
                  <h5>Til:</h5>
                  <p>{language}</p>
                </div>
                <div className="country">
                  <h5>Mamlakat:</h5>
                  <p>{country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;


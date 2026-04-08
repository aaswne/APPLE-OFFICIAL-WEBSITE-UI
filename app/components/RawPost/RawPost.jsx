import React from "react";
import "./RawPost.css";
import {API_KEY,BASE_URL} from "../../constant/constant"
import axios from "axios";
import { useState,useEffect } from "react";

function RawPost(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovie(response.data.results);
    });
  }, [props.url]);

  return (
    <div className="row">
      <h1 className="heading">Endless entertainment.</h1>

     <div className="slider">
  {movie.map((item) => (
    <div className="mainCard" key={item.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt={item.title}
      />

      <div className="overlay">
        <h2>{item.title}</h2>

        <div className="bottom">
          <button>More Info</button>
          <p>{item.overview?.slice(0, 20)}...</p>
        </div>
      </div>
    </div>
  ))}
</div>
    <div className="thumbRow">
  {movie.map((item) => (
    <div className="thumb" key={item.id}>
      <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}alt={item.title} />

      <div className="thumbOverlay">
        <span className="thumbBrand">Music</span>

        <div className="thumbContent">
          <h4>{item.title}</h4>
          <button>Listen Now</button>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default RawPost;
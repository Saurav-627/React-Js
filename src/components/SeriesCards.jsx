import React from "react";
import styles from "./Netflix.module.css";
import styled from "styled-components";

const SeriesCards = ({ data }) => {
  const { img_url, name, cast, genre, description, watch_url, rating } = data;

  //     const btn_style = {
  //       padding : "0.6rem",
  //       backgroundColor : `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //       fontSize : "1.6rem",
  //       color : "var(--font-color)",
  //       borderRadius : "0.6rem",
  //       border : "none",
  //       cursor : "pointer",
  //  };
  //! Creating styled component using style object
  const SaurabButton = styled.button({
    padding: "0.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    fontSize: "1.6rem",
    color: "var(--font-color)",
    borderRadius: "0.6rem",
    border: "none",
    cursor: "pointer",
  });

  //! Creating styled component using template literals
  //  const SaurabButton = styled.button`
  //   padding : 0.6rem ;
  //   background-color : ${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
  //   font-size : 1.6rem;
  //   color : var(--font-color);
  //   border-radius : 0.6rem;
  //   border : none;
  //   cursor : pointer;
  //  `;

  const ratingClass = `${rating >= 8.5 ? styles.super_hit : styles.average}`;

  return (
    // <li className={styles.cards}>
    <li className="flex flex-col p-3 gap-6 shadow-md shadow-gray-400">
      <div>
        <img src={img_url} alt={name} width="100%" height="100%" />
      </div>
      <h2>Name : {name}</h2>
      <h3>
        Rating:{" "}
        <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
      </h3>
      <p className="text-3xl font-bold underline text-cyan-300">
        Summary: {description}
      </p>
      <p>Genre : {genre}</p>
      <p>Cast : {cast}</p>
      <a href={watch_url} target="_blank">
        {/* <button style={btn_style}>Watch Now</button> */}

        <SaurabButton rating={rating}>Watch Now</SaurabButton>
      </a>
    </li>
  );
};

export default SeriesCards;

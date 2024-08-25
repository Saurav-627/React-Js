import seriesData from "../api/seriesData.json";
import SeriesCards from "./SeriesCards";
const NetflixSeries = () => {
  // const name = "Queen of Tears";
  // const rating = "8.2";
  // const summary =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore qui minus laudantium nisi repellat dicta laborum eligendi dolorem suscipit illum?";
  // const age = 19;

  // const returnGenre = () => {
  //   const genre = "RomCom";
  //   return genre;
  // };

  // if (age < 18) {
  //   return (
  //     <div>
  //       <div>
  //         <img src="qot.jpg" alt="qot.jpg" width="40%" height="40%" />
  //       </div>
  //       <h2>Name : {name}</h2>
  //       <h3>Rating: {rating}</h3>
  //       <p>Summary: {summary}</p>
  //       <p>Genre : {returnGenre()}</p>
  //       <button>Not Available</button>
  //     </div>
  //   );
  // } OLD TARIKA VAYO IF ELSE USE GARDA SAME CODE COPY PASTE

  //   return (
  //     <div>
  //       <div>
  //         <img src="qot.jpg" alt="qot.jpg" width="40%" height="40%" />
  //       </div>
  //       <h2>Name : {name}</h2>
  //       <h3>Rating: {rating}</h3>
  //       <p>Summary: {summary}</p>
  //       <p>Genre : {returnGenre()}</p>
  //       <button>{age>=18 ? "Watch Now" : "Not available"}</button> {/* using ternary*/}
  //     </div>
  //   );
  // };

  // Another tarika

  // let canWatch = "Not available";
  // if(age>=18) canWatch = "Watch Now";

  // return (
  //   <div>
  //     <div>
  //       <img src="qot.jpg" alt="qot.jpg" width="40%" height="40%" />
  //     </div>
  //     <h2>Name : {name}</h2>
  //     <h3>Rating: {rating}</h3>
  //     <p>Summary: {summary}</p>
  //     <p>Genre : {returnGenre()}</p>
  //     <button>{canWatch}</button>
  //   </div>
  // );
  // };

  //*! Another Tarika by making function canWatch() also we can make it dynamic by passing parameter

  //   const canWatch = () => {
  //     if(age>=18)
  //       return "Watch Now";
  //     return "Not available";
  //   };

  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((curElem) => (
        <SeriesCards key={curElem.id} data={curElem} />
      ))}
    </ul>
  );
};

export default NetflixSeries;

import React, { useEffect, useState } from "react";
import axios from "axios";
function Weather() {
  const [title, setTitle] = useState("test");
  // useEffect(async () => {
  //   console.log("run useEffect");
  //   let response = await axios({
  //     method: "post",
  //     url: "http://localhost:8080/get-data-by-url",
  //   });
  // }, []);
  // console.log("run render");

  return <div>Weather : {title}</div>;
}

export default Weather;

// export default class Weather extends React.Component {
//   async componentDidMount() {
//     let data = await axios({
//       method: "post",
//       url: "http://localhost:8080/get-data-by-url",

//     });
//     console.log(data.data);
//   }

//   render() {
//     return <div></div>;
//   }
// }

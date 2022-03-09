const express = require("express");
const app = express();
const port = 3000;

// const [data, setData] = useState(null);

// useEffect(() => {
//   const fetchData = async () => {
//     let response = await fetch(
//       `${process.env.REACT_APP_API_URL}/forecast?lat=51.51&lon=-0.13&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
//     );
//     let data = await response.json();
//     setData(data);
//     console.log(data);
//     // .then((res) => res.json())
//   };
//   fetchData();
// });

app.get(
  // api.openweathermap.org/data/2.5/forecast?lat=51.51&lon=-0.13&units=imperial&appid=8c911114f301aae0444d13de55d3fd59
  // ${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}
  `${process.env.REACT_APP_API_URL}/forecast?lat=51.51&lon=-0.13&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`,
  function (req, res) {
    let data = res.json;
    console.log(data);
  }
);
app.get("/weather", function (req, res) {
  res.json("base message");
  console.log("base");
});
app.get("/api", function (req, res) {
  // It will not fetch and display any data in the index page
  res.json({ message: "Hello from Express!" });
  console.log("here");
});

// app.get("/getweather", function (req, res) {
//   let response = await fetch(
//     `${process.env.REACT_APP_API_URL}/forecast?lat=51.51&lon=-0.13&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
//   );
//   let data = await response.json();
//   console.log(data);
//   return data;
// });

app.post("/", function (req, res) {
  // Get city name passed in the form
  let city = req.body.city;

  // Use that city name to fetch data
  // Use the API_KEY in the '.env' file
  let url = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`;
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

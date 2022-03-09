import Express from "express";
import { useState, useEffect } from "react";
/*
API call - api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&units=imperial&appid={API key}
key - 8c911114f301aae0444d13de55d3fd59

*/
export default function forcast() {
  const key = "8c911114f301aae0444d13de55d3fd59";
  //   const [feels_like, setFeelsLike] = useState("");
  //   const [mainTemp, setMainTemp] = useState("");
  //   const [description, setDescription] = useState("");
  //   const [main, setMain] = useState("");
  //   const [iconID, setIconID] = useState("");
  useEffect(() => {
    fetch(
      `api.openweathermap.org/data/2.5/forecast?lat=51.15&lon=-0.13&units=imperial&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <>
      <div>
        <h2>
          <p>{data}</p>
        </h2>
      </div>
    </>
  );
}

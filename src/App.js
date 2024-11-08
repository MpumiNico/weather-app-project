import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Pretoria" />
        <footer>
          This project is was coded by{" "}
          <a href="https://github.com/MpumiNico">Mpumi Nicollete Mahlalela</a> and is{" "}
          <a href="https://github.com/MpumiNico/weather-app-project">
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
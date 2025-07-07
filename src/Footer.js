import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/Tania-Figueiredo/Tania-Figueiredo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tânia Figueiredo
        </a>
        , is{" "}
        <a
          href="https://github.com/Tania-Figueiredo/weatherapp-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://reactweatherappfreshstartdev.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
        .
      </p>
    </footer>
  );
}

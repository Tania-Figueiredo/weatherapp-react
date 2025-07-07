import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("Leiria");

  useEffect(() => {
    const toggleButton = document.getElementById("dark-mode-toggle");

    function toggleDarkMode() {
      document.body.classList.toggle("dark");

      const logo = document.querySelector(".logo");
      if (document.body.classList.contains("dark")) {
        logo.setAttribute(
          "src",
          "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/166/410/original/Logo_sem_fundo.png?1747936347"
        );
        toggleButton.textContent = "Light Mode";
      } else {
        logo.setAttribute(
          "src",
          "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/166/413/original/Logo_fundo_branco.png?1747937312"
        );
        toggleButton.textContent = "Dark Mode";
      }
    }

    if (toggleButton) {
      toggleButton.addEventListener("click", toggleDarkMode);
    }

    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener("click", toggleDarkMode);
      }
    };
  }, []);

  function handleCityChange(newCity) {
    setCity(newCity);
  }

  return (
    <div className="container">
      <Header onCityChange={handleCityChange} />
      <Main city={city} />
      <Footer />
    </div>
  );
}

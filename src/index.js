import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Llamamos la funcion de app que ya cuenta con todo lo necesario
//para renderizar y lo ponemos dentro del set interval para mostrar
//la hora en tiempo real.
setInterval(App, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

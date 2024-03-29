import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter,BrowserRouter,Redirect} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import logo from "./Images/logo.png"






ReactDOM.render(
  
  <React.StrictMode>
    <Helmet>
      <title>Matias Feliz Fotografia</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap" rel="stylesheet"/>
      <link rel="shortcut icon" href={logo} />

    </Helmet>
    <HashRouter basename={process.env.PUBLIC_URL}>
          <Redirect
            from="/"
            to="/home" />
      <App />
    </HashRouter>

  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
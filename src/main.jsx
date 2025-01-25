import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './assets/scss/style.scss'
import { HashRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMod?e>
  //   <HashRoute?r>
  //     <HelmetPr?ovider>
        <App />
  //     </HelmetProvider>
  //   </HashRouter>
  // </React.StrictMode>,
)

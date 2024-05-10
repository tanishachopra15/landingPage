// import './App.css';

import CryptoPage from "./Page/CryptoPage/CryptoPage";
import NewsifyPage from "./Page/NewsifyPage/NewsifyPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <Routes>
          <Route path="/" element={<NewsifyPage />} />
          <Route path="/crypto-land" element={<CryptoPage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
        </Routes>


      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes, 
} from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import SingleView from './pages/SingleView';
import NavBar from './components/MuiNavbar'
import { SearchContext } from './context/search';
import { Helmet } from 'react-helmet';

function App() {





  const [animeData, setAnimeData] = useState([]);
  const [singleData, setSingleData] = useState({});

  const setData = (data) => {
    setAnimeData(data);
  };

  const setSingle = (data) => {
    setSingleData(data);
  };

  const search = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=21&sfw`
    ).then((response) => response.json());
  };


  return (
    <SearchContext.Provider value={{search, animeData, setData, singleData, setSingle}}>
    <Helmet>
    <title>AniFind</title>
    <meta name="description" content="test on react-helmet" />
    <meta name="theme-color" content="#ccc" />
    </Helmet>
    <Router>
      <NavBar />
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/single-view" element={<SingleView />} />
        <Route 
          path="*" 
          element={<Navigate to="/" replace />}/>
        </Routes>
      </main>
    </Router>
    </SearchContext.Provider>
  );
}

export default App;

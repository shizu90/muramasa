import React from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import LoginPage from './pages/login/Login';
import RegisterPage from './pages/register/Register';
import SearchPage from './pages/search/Search';
import SeasonsPage from './pages/seasons/Seasons';
import CommunityPage from './pages/community/Community';
import SingleView from './pages/singleview/SingleView';
import ProfilePage from './pages/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/register" element={<RegisterPage/>}></Route>
          <Route path="/search" element={<SearchPage/>}></Route>
          <Route path="/seasons" element={<SeasonsPage/>}></Route>
          <Route path="/community" element={<CommunityPage/>}></Route>
          <Route path="/anime/:id" element={<SingleView/>}></Route>
          <Route path="/manga/:id" element={<SingleView/>}></Route>
          <Route path="/profile/:id" element={<ProfilePage/>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

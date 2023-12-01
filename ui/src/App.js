import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./components/detailsPage/DetailsPage";
import CatBasedPosts from "./components/categoryList/CatBasedPosts";
import About from './components/navbar/About';
import Contact from './components/navbar/Contact';
import Latest from "./components/navbar/Latest";
import Popular from "./components/navbar/Popular";


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes textDecoration="None">

          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main/>} />
         <Route textDecoration="none" path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/latest" element={<Latest/>} />
         <Route path="/popular" element={<Popular/>} />
          <Route path="/details/:slug" element={<DetailsPage />} />
          <Route path="/category/:id" element={<CatBasedPosts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}


export default App;

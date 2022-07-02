import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/portfolio" element={<PortfolioPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

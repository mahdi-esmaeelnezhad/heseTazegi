import React from "react";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";

import { Container } from "react-bootstrap"

import Home from "./pages/Home/Home";
import Account from "./pages/Account/Account";
import CardStore from "./pages/CardStore/CardStore";
import ProductP from "./pages/ProductP/ProductP";
import "./App.css"

const App = () => {
    return(
    <Router>
        <Header />
        <main className="main py-4">
        <Container>
            <Routes>
                <Route path="/" element=<Home/> />
                <Route path="/account" element=<Account/> />
                <Route path="/cart" element=<CardStore/> />
                <Route path="/product/:id" element=<ProductP/> />
            </Routes>
        </Container>
        </main>
        <Footer />
    </Router>
    )
}
export default App
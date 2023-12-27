import React from 'react';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./views/home";
import AboutPage from "./views/AboutPage";
import Login from "./views/login";
import Signup from "./views/signup";
import Menu from "./views/menu";
import product from "./views/product"
import { BrowserRouter, Route, Routes } from "react-router-dom";


interface Props {
}

interface State {
    count: number
}

class App extends React.Component<Props, State> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/AboutPage"} element={<AboutPage/>}/>
                        <Route path={"/signin"} element={<Login/>}/>
                        <Route path={"/signup"} element={<Signup/>}/>
                        <Route path={"/menu"} element={<Menu/>}/>
                        <Route path={"/product"} element={<product/>}/>

                    </Routes>

                </BrowserRouter>
            </div>
        );
    }

}

export default App

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";

const App = () => {


    return (
        <>
           <BrowserRouter>
               <Routes>
                   <Route exact path="/" element={<HomePage/>}/>
                   <Route exact path="/cart" element={<CartPage/>}/>
               </Routes>
           </BrowserRouter>
        </>
    );
}

export default App;
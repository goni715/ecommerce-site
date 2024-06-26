import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import CollectionDetailsPage from "./pages/CollectionDetailsPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";

const App = () => {


    return (
        <>
           <BrowserRouter>
               <Routes>
                   <Route exact path="/" element={<HomePage/>}/>
                   <Route exact path="/cart" element={<CartPage/>}/>
                   <Route exact path="/wishlist" element={<WishlistPage/>}/>
                   <Route exact path="/orders" element={<OrdersPage/>}/>
                   <Route exact path="/products/:id" element={<ProductDetailsPage/>}/>
                   <Route exact path="/collections/:id" element={<CollectionDetailsPage/>}/>
                   <Route exact path="/search/:searchKey" element={<SearchPage/>}/>
               </Routes>
           </BrowserRouter>
        </>
    );
}

export default App;
import Navbar from "../components/Navbar/Navbar.jsx";
import Home from "../components/Home/Home.jsx";
import Collections from "../components/Collections/Collections.jsx";
import ProductList from "../components/ProductList/ProductList.jsx";


const HomePage = () => {
    return (
        <>
            <Navbar/>
            <Home/>
            <Collections/>
            <ProductList/>
        </>
    );
};

export default HomePage;
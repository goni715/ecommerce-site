import {Link} from "react-router-dom";
import collection_1 from "../../assets/images/collection_1.jpeg";
import collection_2 from "../../assets/images/collection_2.jpeg";
import collection_3 from "../../assets/images/collection_3.webp";
import ProductCard from "./ProductCard.jsx";


const ProductList = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-10 py-8 px-5">
                <p className="text-heading1-bold">Products</p>
                {/*<p className="text-body-bold">No products found</p>*/}
                <div className="flex flex-wrap justify-center items-center gap-16">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </>
    );
};

export default ProductList;
import Gallery from "./Gallery.jsx";
import ProductInfo from "./ProductInfo.jsx";
import ProductCard from "./ProductCard.jsx";

const ProductDetails = () => {

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-16 py-10 px-5">
                <Gallery/>
                <ProductInfo/>
            </div>

            <div className="flex flex-col items-center px-3 md:px-10 py-5">
                <p className="text-heading3-bold">Related Products</p>
                <div className="flex flex-wrap gap-16 mx-auto mt-8">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
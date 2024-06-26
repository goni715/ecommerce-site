import ProductCard from "../ProductList/ProductCard.jsx";


const Wishlist = () => {
    return (
        <>
            <div className="px-10 py-5">
                <p className="text-heading3-bold my-10">Your Wishlist</p>
                {/*<p>No items in your wishlist</p>*/}
                <div className="flex flex-wrap justify-center gap-16">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </>
    );
};

export default Wishlist;
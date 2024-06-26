import ProductCard from "../ProductList/ProductCard.jsx";


const Search = () => {
    return (
        <>
            <div className="px-10 py-5">
                <p className='text-heading3-bold my-10'>Search results for "Laptop"</p>
                {/*<p className='text-body-bold my-5'>No product found</p>*/}
                <div className="flex flex-wrap gap-16 justify-center">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </>
    );
};

export default Search;
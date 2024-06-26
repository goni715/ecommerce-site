import collection_3 from '../../assets/images/collection_3.webp';
import ProductCard from "../ProductList/ProductCard.jsx";

const CollectionsDetails = () => {
    return (
        <>
            <div className="px-10 py-5 flex flex-col items-center gap-8">
                <img src={collection_3} alt="collection" className="w-full h-[400px] object-cover rounded-xl"/>
                <p className="text-heading3-bold text-grey-2">Travels</p>
                <p className="text-body-normal text-grey-2 text-center max-w-[900px]">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio earum porro rerum. Ad atque blanditiis consequatur dignissimos enim eos esse harum laudantium libero maxime, mollitia neque quibusdam sequi tempore vero.
                </p>
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

export default CollectionsDetails;
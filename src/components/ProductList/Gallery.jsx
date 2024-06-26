import collection_3 from "../../assets/images/collection_3.webp";


const Gallery = () => {
    return (
        <>
            <div className="flex flex-col gap-3 max-w-96">
                <img src={collection_3} alt="product" className="w-96 h-96 rounded-lg shadow-xl object-cover"/>
                <div className="flex gap-2 overflow-auto">
                    <img src={collection_3} alt="product"
                         className="w-20 h-20 rounded-lg cursor-pointer object-cover"/>
                    <img src={collection_3} alt="product"
                         className="w-20 h-20 rounded-lg cursor-pointer object-cover"/>
                    <img src={collection_3} alt="product"
                         className="w-20 h-20 rounded-lg cursor-pointer object-cover"/>
                    <img src={collection_3} alt="product"
                         className="w-20 h-20 rounded-lg cursor-pointer object-cover"/>
                </div>
            </div>
        </>
    );
};

export default Gallery;
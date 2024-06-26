import collection_1 from '../../assets/images/collection_1.jpeg';
import {Heart, Eye} from 'lucide-react';
import {Link} from 'react-router-dom';

const ProductCard = () => {
    const handleLike = () => {

    }
    return (
        <>
            <div className="w-[220px] flex flex-col gap-2">
                <img src={collection_1} alt="product" className="h-[250px] rounded-lg object-cover"/>
                <div>
                    <p className="text-base-bold">HP New Laptop</p>
                    <p className="text-small-medium text-grey-2">Laptop</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-body-bold">$500</p>
                    <div className="flex gap-3">
                        <button onClick={handleLike}>
                            <Eye/>
                            {/*<Heart fill={`${isLiked ? "red" : "white"}`}/>*/}
                        </button>
                        <button onClick={handleLike}>
                            <Heart/>
                            {/*<Heart fill={`${isLiked ? "red" : "white"}`}/>*/}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
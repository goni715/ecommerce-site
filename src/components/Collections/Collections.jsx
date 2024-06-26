import collection_1 from '../../assets/images/collection_1.jpeg';
import collection_2 from '../../assets/images/collection_2.jpeg';
import collection_3 from '../../assets/images/collection_3.webp';
import {Link} from "react-router-dom";

const Collections = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-10 py-8 px-5">
                <p className="text-heading1-bold">Collections</p>
                {/*<p className="text-body-bold">No collections found</p>*/}
                <div className="flex flex-wrap justify-center items-center gap-8">
                    <Link to="/collections/1">
                        <img src={collection_1} alt="" className="h-[200px] rounded-lg cursor-pointer"/>
                    </Link>
                    <Link to="/collections/2">
                        <img src={collection_2} alt="" className="h-[200px] rounded-lg cursor-pointer"/>
                    </Link>
                    <Link to="/collections/3">
                        <img src={collection_3} alt="" className="h-[200px] rounded-lg cursor-pointer"/>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Collections;
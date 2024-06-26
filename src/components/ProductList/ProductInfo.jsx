import {Heart, MinusCircle, PlusCircle} from "lucide-react";


const ProductInfo = () => {
    const handleLike = () => {
      
    }
    return (
        <>
            <div className="max-w-[400px] flex flex-col gap-4">
                <div className="flex items-center">
                    <p className="text-heading3-bold">Laptop Title </p>
                    <button onClick={handleLike}>
                        <Heart/>
                        {/*<Heart fill={`${isLiked ? "red" : "white"}`}/>*/}
                    </button>
                </div>
                <div className="flex gap-2">
                    <p className="text-base-medium text-grey-2">Category:</p>
                    <p className="text-base-bold"> Laptop</p>
                </div>
                <p className="text-heading3-bold">$500 </p>
                <div className="flex gap-2">
                    <p className="text-base-medium text-grey-2">Description:</p>
                    <p className="text-small-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea eaque error facere
                        natus nihil perspiciatis vero. Assumenda blanditiis, consectetur consequatur,
                    </p>
                </div>

                {/*Colors*/}
                <div className="flex flex-col gap-2">
                    <p className="text-base-medium text-grey-2">Colors:</p>
                    <div className="flex gap-2">
                        <p className="border border-black px-2 py-1 rounded-lg cursor-pointer bg-black text-white">
                            Red
                        </p>
                        <p className="border border-black px-2 py-1 rounded-lg cursor-pointer">
                            White
                        </p>
                        <p className="border border-black px-2 py-1 rounded-lg cursor-pointer">
                            Black
                        </p>
                    </div>
                </div>

                {/*Sizes*/}
                <div className="flex flex-col gap-2">
                    <p className="text-base-medium text-grey-2">Sizes:</p>
                    <div className="flex gap-2">
                        <p className="border border-black px-2 py-1 rounded-lg cursor-pointer bg-black text-white">
                            Small
                        </p>
                        <p className="border border-black px-2 py-1 rounded-lg cursor-pointer">
                            Medium
                        </p>
                        <p className="border border-black px-2 py-1 rounded-lg cursor-pointer">
                            Large
                        </p>
                    </div>
                </div>


                <div className="flex flex-col gap-2">
                    <p className="text-base-medium text-grey-2">Quantity:</p>
                    <div className="flex gap-4 items-center">
                        <MinusCircle
                            className="hover:text-red-1 cursor-pointer"
                        />
                        <p className="text-body-bold">{"2"}</p>
                        <PlusCircle
                            className="hover:text-red-1 cursor-pointer"
                        />
                    </div>
                </div>

                <button
                    className="outline text-base-bold py-3 rounded-lg hover:bg-black hover:text-white"
                >
                    Add To Cart
                </button>

            </div>
        </>
    );
};

export default ProductInfo;
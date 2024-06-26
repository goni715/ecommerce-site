import {Trash, MinusCircle,PlusCircle} from "lucide-react";
import collection_3 from '../../assets/images/collection_3.webp';

const Cart = () => {
    return (
        <>
            <div className="flex gap-20 py-16 px-3 sm:px-10 flex-col lg:flex-row">
                <div className="w-full lg:w-2/3">
                    <p className="text-heading3-bold">Shopping Cart</p>
                    <hr className="my-6"/>
                    {/*<p className="text-body-bold">No item in cart</p>*/}
                    <div>
                        <div
                            className="w-full flex flex-col sm:flex-row gap-3 sm:gap-0 hover:bg-grey-1 px-4 py-3 items-start sm:items-center sm:justify-between">
                            <div className="flex items-center">
                                <img src={collection_3} alt="product" className="w-32 h-32 rounded-lg object-cover"/>
                                <div className="flex flex-col gap-3 ml-4">
                                    <p className="text-body-bold">Title</p>
                                    <p className="text-small-medium">Red</p>
                                    <p className="text-small-medium">Small</p>
                                    <p className="text-small-medium">$500</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <MinusCircle
                                    className="hover:text-red-1 cursor-pointer"
                                />
                                <p className="text-body-bold">3</p>
                                <PlusCircle
                                    className="hover:text-red-1 cursor-pointer"
                                />
                            </div>
                            <Trash
                                className="hover:text-red-1 cursor-pointer"
                            />

                        </div>
                        <div
                            className="w-full flex flex-col sm:flex-row gap-3 sm:gap-0 hover:bg-grey-1 px-4 py-3 items-start sm:items-center sm:justify-between">
                            <div className="flex items-center">
                                <img src={collection_3} alt="product" className="w-32 h-32 rounded-lg object-cover"/>
                                <div className="flex flex-col gap-3 ml-4">
                                    <p className="text-body-bold">Title</p>
                                    <p className="text-small-medium">Red</p>
                                    <p className="text-small-medium">Small</p>
                                    <p className="text-small-medium">$500</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <MinusCircle
                                    className="hover:text-red-1 cursor-pointer"
                                />
                                <p className="text-body-bold">3</p>
                                <PlusCircle
                                    className="hover:text-red-1 cursor-pointer"
                                />
                            </div>
                            <Trash
                                className="hover:text-red-1 cursor-pointer"
                            />

                        </div>

                    </div>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col gap-8 bg-grey-1 rounded-lg px-4 py-5">
                    <p className="text-heading4-bold pb-4">
                        Summary{" "}
                        <span>3 items</span>
                    </p>
                    <div className="flex justify-between text-body-semibold">
                        <span>Total Amount</span>
                        <span>$ 600</span>
                    </div>
                    <button
                        className="border rounded-lg text-body-bold bg-white py-3 w-full hover:bg-black hover:text-white"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;
import collection_3 from '../../assets/images/collection_3.webp';


const Orders = () => {
    return (
        <>
            <div className="px-3 sm:px-10 py-5">
                <p className="text-heading3-bold my-10">Your Orders</p>
                {/*<p className="text-body-bold my-5">You have no orders yet.</p>*/}
                <div className="flex flex-col gap-10">
                    {/*orders 01*/}
                    <div className="flex flex-col gap-8 p-4 hover:bg-grey-1">
                        <div className="flex flex-col gap-3 md:gap-20 md:flex-row">
                            <p className="text-base-bold">Order ID: u844935gdgs5374hjd</p>
                            <p className="text-base-bold">
                                Total Amount: $7000
                            </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            {/*order products*/}
                            <div className="flex gap-4">
                                <img src={collection_3} alt="order_product"
                                     className="w-32 h-32 object-cover rounded-lg"/>
                                <div className="flex flex-col justify-between">
                                    <p className="text-small-medium">
                                        Title:{" "}
                                        <span className="text-small-bold">
                                        HP Laptop
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Color:{" "}
                                        <span className="text-small-bold">
                                        Red
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Size:{" "}
                                        <span className="text-small-bold">
                                        Small
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Unit price:{" "}
                                        <span className="text-small-bold">$500</span>
                                    </p>
                                    <p className="text-small-medium">
                                        Quantity:{" "}
                                        <span className="text-small-bold">3</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <img src={collection_3} alt="order_product"
                                     className="w-32 h-32 object-cover rounded-lg"/>
                                <div className="flex flex-col justify-between">
                                    <p className="text-small-medium">
                                        Title:{" "}
                                        <span className="text-small-bold">
                                        HP Laptop
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Color:{" "}
                                        <span className="text-small-bold">
                                        Red
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Size:{" "}
                                        <span className="text-small-bold">
                                        Small
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Unit price:{" "}
                                        <span className="text-small-bold">$500</span>
                                    </p>
                                    <p className="text-small-medium">
                                        Quantity:{" "}
                                        <span className="text-small-bold">3</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <img src={collection_3} alt="order_product"
                                     className="w-32 h-32 object-cover rounded-lg"/>
                                <div className="flex flex-col justify-between">
                                    <p className="text-small-medium">
                                        Title:{" "}
                                        <span className="text-small-bold">
                                        HP Laptop
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Color:{" "}
                                        <span className="text-small-bold">
                                        Red
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Size:{" "}
                                        <span className="text-small-bold">
                                        Small
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Unit price:{" "}
                                        <span className="text-small-bold">$500</span>
                                    </p>
                                    <p className="text-small-medium">
                                        Quantity:{" "}
                                        <span className="text-small-bold">3</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*orders 02*/}
                    <div className="flex flex-col gap-8 p-4 hover:bg-grey-1">
                        <div className="flex flex-col gap-3 md:gap-20 md:flex-row">
                            <p className="text-base-bold">Order ID: u844935gdgs5374hjd</p>
                            <p className="text-base-bold">
                                Total Amount: $7000
                            </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            {/*order products*/}
                            <div className="flex gap-4">
                                <img src={collection_3} alt="order_product"
                                     className="w-32 h-32 object-cover rounded-lg"/>
                                <div className="flex flex-col justify-between">
                                    <p className="text-small-medium">
                                        Title:{" "}
                                        <span className="text-small-bold">
                                        HP Laptop
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Color:{" "}
                                        <span className="text-small-bold">
                                        Red
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Size:{" "}
                                        <span className="text-small-bold">
                                        Small
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Unit price:{" "}
                                        <span className="text-small-bold">$500</span>
                                    </p>
                                    <p className="text-small-medium">
                                        Quantity:{" "}
                                        <span className="text-small-bold">3</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <img src={collection_3} alt="order_product"
                                     className="w-32 h-32 object-cover rounded-lg"/>
                                <div className="flex flex-col justify-between">
                                    <p className="text-small-medium">
                                        Title:{" "}
                                        <span className="text-small-bold">
                                        HP Laptop
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Color:{" "}
                                        <span className="text-small-bold">
                                        Red
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Size:{" "}
                                        <span className="text-small-bold">
                                        Small
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Unit price:{" "}
                                        <span className="text-small-bold">$500</span>
                                    </p>
                                    <p className="text-small-medium">
                                        Quantity:{" "}
                                        <span className="text-small-bold">3</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <img src={collection_3} alt="order_product"
                                     className="w-32 h-32 object-cover rounded-lg"/>
                                <div className="flex flex-col justify-between">
                                    <p className="text-small-medium">
                                        Title:{" "}
                                        <span className="text-small-bold">
                                        HP Laptop
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Color:{" "}
                                        <span className="text-small-bold">
                                        Red
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Size:{" "}
                                        <span className="text-small-bold">
                                        Small
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Unit price:{" "}
                                        <span className="text-small-bold">$500</span>
                                    </p>
                                    <p className="text-small-medium">
                                        Quantity:{" "}
                                        <span className="text-small-bold">3</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*orders 03*/}
                    <div className="flex flex-col gap-8 p-4 hover:bg-grey-1">
                        <div className="flex flex-col gap-3 md:gap-20 md:flex-row">
                            <p className="text-base-bold">Order ID: u844935gdgs5374hjd</p>
                            <p className="text-base-bold">
                                Total Amount: $7000
                            </p>
                        </div>
                        <div className="flex flex-col gap-5">
                            {/*order products*/}
                            <div className="flex gap-4">
                                <img src={collection_3} alt="order_product"
                                     className="w-32 h-32 object-cover rounded-lg"/>
                                <div className="flex flex-col justify-between">
                                    <p className="text-small-medium">
                                        Title:{" "}
                                        <span className="text-small-bold">
                                        HP Laptop
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Color:{" "}
                                        <span className="text-small-bold">
                                        Red
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Size:{" "}
                                        <span className="text-small-bold">
                                        Small
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Unit price:{" "}
                                        <span className="text-small-bold">$500</span>
                                    </p>
                                    <p className="text-small-medium">
                                        Quantity:{" "}
                                        <span className="text-small-bold">3</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <img src={collection_3} alt="order_product"
                                     className="w-32 h-32 object-cover rounded-lg"/>
                                <div className="flex flex-col justify-between">
                                    <p className="text-small-medium">
                                        Title:{" "}
                                        <span className="text-small-bold">
                                        HP Laptop
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Color:{" "}
                                        <span className="text-small-bold">
                                        Red
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Size:{" "}
                                        <span className="text-small-bold">
                                        Small
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Unit price:{" "}
                                        <span className="text-small-bold">$500</span>
                                    </p>
                                    <p className="text-small-medium">
                                        Quantity:{" "}
                                        <span className="text-small-bold">3</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <img src={collection_3} alt="order_product"
                                     className="w-32 h-32 object-cover rounded-lg"/>
                                <div className="flex flex-col justify-between">
                                    <p className="text-small-medium">
                                        Title:{" "}
                                        <span className="text-small-bold">
                                        HP Laptop
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Color:{" "}
                                        <span className="text-small-bold">
                                        Red
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Size:{" "}
                                        <span className="text-small-bold">
                                        Small
                                    </span>
                                    </p>
                                    <p className="text-small-medium">
                                        Unit price:{" "}
                                        <span className="text-small-bold">$500</span>
                                    </p>
                                    <p className="text-small-medium">
                                        Quantity:{" "}
                                        <span className="text-small-bold">3</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Orders;
import logo from '../../assets/images/logo.png';
import profile from '../../assets/images/photo.png';
import {Link, useLocation} from "react-router-dom";
import {ShoppingCart, CircleUserRound, Search} from "lucide-react";
import {useState} from "react";


const Navbar = () => {
    const [login, setLogin] = useState(false);
    const [dropdown, setDropdown] = useState(false)
    const location = useLocation()
    const pathname = location.pathname;

    return (
        <>
            <div className="sticky top-0 z-10 px-2 sm:px-10 py-2 flex justify-between items-center bg-white">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-[120px] md:w-[130px]"/>
                </Link>

                <div className="hidden lg:flex gap-4 text-base-bold">
                    <Link to="/" className={`${pathname==="/" && "text-red-1"}`}>Home</Link>
                    <Link to="/wishlist" className={`${pathname==="/wishlist" && "text-red-1"}`}>Wishlist</Link>
                    <Link to="/orders" className={`${pathname==="/orders" && "text-red-1"}`}>Orders</Link>
                    <button className={``}>Logout</button>
                </div>

                <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
                    <input
                        type="text"
                        className="outline-none max-w-[120px] sm:w-auto"
                        placeholder="Search..."
                    />
                    <button>
                        <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
                    </button>
                </div>


                <div className="flex gap-3 items-center relative">
                    <Link to="/cart" className="hidden md:flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white">
                        <ShoppingCart/>
                        <p className="text-base-bold">(0)</p>
                    </Link>
                    {login ? (
                        <img src={profile} alt="logo" className="w-[25px] h-[25px] cursor-pointer" onClick={() => setDropdown(!dropdown)}/>
                    ) : (
                        <button onClick={() => setDropdown(!dropdown)}>
                        <CircleUserRound className="cursor-pointer"/>
                        </button>
                    )}

                    {dropdown && (
                        <div
                            className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
                            <Link to="/" className="hover:text-red-1"> Home</Link>
                            {/*<Link to="/wishlist" className="hover:text-red-1">Wishlist</Link>*/}
                            {/*<Link to="/orders" className="hover:text-red-1">Orders</Link>*/}
                            <Link to="/cart"
                                  className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white">
                                <ShoppingCart/>
                                <p className="text-base-bold">(0)</p>
                            </Link>
                            {/*<p className="hover:text-red-1 cursor-pointer">Logout</p>*/}
                            <p className="hover:text-red-1 cursor-pointer">Login</p>
                        </div>
                    )}

                    {/*{login ? (*/}
                    {/*        <img*/}
                    {/*            alt="user picture"*/}
                    {/*            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1288&amp;q=80"*/}
                    {/*            className="relative cursor-pointer inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"*/}
                    {/*        />*/}
                    {/*) : (*/}
                    {/*    <Link to="login">*/}
                    {/*        <User className="cursor-pointer"/>*/}
                    {/*    </Link>*/}
                    {/*)}*/}
                </div>
            </div>
        </>
    );
};

export default Navbar;
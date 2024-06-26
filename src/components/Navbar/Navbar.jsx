import logo from '../../assets/images/logo.png';
import profile from '../../assets/images/photo.png';
import {Link} from "react-router-dom";
import {ShoppingCart, CircleUserRound} from "lucide-react";
import {useState} from "react";


const Navbar = () => {
    const [login, setLogin] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <div className="sticky top-0 z-10 px-2 sm:px-10 py-2 flex justify-between items-center bg-white">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-[130px]"/>
                </Link>

                <div>
                    <Link to="/">Home</Link>
                </div>

                <div className="flex gap-3 items-center relative">
                    <Link to="/cart" className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white">
                        <ShoppingCart/>
                        <p className="text-base-bold">Cart (0)</p>
                    </Link>
                    {login ? (
                        <img src={profile} alt="logo" className="w-[25px] h-[25px] cursor-pointer" onClick={() => setDropdown(!dropdown)}/>
                    ) : (
                        <Link to="/login">
                        <CircleUserRound className="cursor-pointer"/>
                        </Link>
                    )}

                    {login && dropdown && (
                        <div
                            className="absolute top-10 right-5 flex flex-col gap-2 p-3 rounded-lg border bg-white text-base-bold">
                            <Link to="wishlist" className="hover:text-red-1">Wishlist</Link>
                            <Link to="wishlist" className="hover:text-red-1">Orders</Link>
                          <p className="hover:text-red-1">Logout</p>
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
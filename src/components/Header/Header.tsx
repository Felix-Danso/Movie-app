import {BsFillMoonFill, BsSun} from "react-icons/bs";
import {useAppDispatch, useAppSelector} from "../../Hooks/storeHooks";
import {toggleTheme} from "../../features/theme/themeSlice";

const Header  = () => {
    const { darkTheme} = useAppSelector((state)=>state)

    const dispatch  = useAppDispatch()

    const onToggle = () => dispatch(toggleTheme())

    return (
        <header className="mb-20">
            <nav className="border-b border-gray-200 border-opacity-25 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#!" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap" >
                            Movies
                        </span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        {darkTheme && <BsSun onClick={() => onToggle()} className="hover:opacity-50 cursor-pointer"/>}
                        {!darkTheme && (
                        <BsFillMoonFill onClick={() => onToggle()} className="hover:opacity-50 cursor-pointer"/>
                            )}
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Header;

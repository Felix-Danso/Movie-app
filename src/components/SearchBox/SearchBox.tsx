import {Dispatch, SetStateAction} from "react";

interface searchBoxProps {
    setSearchTeam: Dispatch<SetStateAction<string>>,
}
const SearchBox = (props: searchBoxProps) => {
    const {setSearchTeam} = props;
    return (
        <input
            onChange={(e) => setSearchTeam(e.target.value.trim().toLowerCase())}
            type="search"
            className="block p-4 pl-10 focus:outline-none text-sm
            text-gray-900 bg-gray-50 rounded-lg border border-gray-300
            focus:border-blue-500 dark:bg-gray-700 drak:border-gray-600
            dark:placeholder-gray-400 dark:text-white lg:ml-20"
            placeholder="Search..."
        >
        </input>
    );
};
export default SearchBox;
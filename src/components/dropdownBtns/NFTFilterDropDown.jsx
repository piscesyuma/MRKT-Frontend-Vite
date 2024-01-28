import { HiOutlineChevronDown } from "react-icons/hi";

const NFTFilterDropDown = (txt) => {
    return <div className='px-2 py-2 bg-opacity10 border border-gray-300 dark:border-opacity10 text-sm rounded w-60 flex gap-1 items-center justify-center cursor-pointer'>
        {txt} <HiOutlineChevronDown />
    </div>
}

export default NFTFilterDropDown
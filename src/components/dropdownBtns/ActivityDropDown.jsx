import { HiOutlineChevronDown } from "react-icons/hi";

const ActivityDropDown = (txt) => {
    return <div className='px-2 py-2 bg-opacity10 border border-gray-300 dark:border-opacity10 text-sm rounded flex gap-1 items-center justify-center cursor-pointer'>
        {txt} <HiOutlineChevronDown />
    </div>
}

export default ActivityDropDown
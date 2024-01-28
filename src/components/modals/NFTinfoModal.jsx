import { Modal, Kbd, Table } from 'flowbite-react';
import {
    HiOutlineRefresh,
    HiOutlineX,
    HiOutlineChevronRight,
    HiOutlineChevronLeft,
    HiOutlineExternalLink,
    HiOutlineChevronUp
} from "react-icons/hi";

import ChartDraw from "../ChartDraw";

const NFTinfoModal = ({
    openModal,
    setOpenModal
}) => {

    return <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} size="7xl" className="bg-sysDark">
        <Modal.Body className="dark:bg-sysDark p-0 text-black dark:text-white">
            <div className='border-b dark:border-white/10 border-black/10 p-5'>
                <div className="flex flex-wrap md:flex-nowrap gap-3 justify-center md:justify-between items-end relative pt-8 md:pt-0">
                    <div className='flex items-center gap-2 md:gap-5'>
                        <img src="/images/nft-3.png" className='rounded-lg w-[128px]' alt="nft" />
                        <div>
                            <div className='flex items-center gap-2'>
                                <h3 className='uppercase font-MarvinVisions tracking-widest'>Syan #2808</h3><span className='text-[12px] opacity-50'>Rank 3412</span>
                            </div>
                            <p>Collection: <span className='text-sysPink'>Seiyans</span> • Owned By: <span className='text-sysPink'>Owner</span></p>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-end absolute top-0 right-0">
                        <button className="p-2">
                            <HiOutlineRefresh />
                        </button>
                        <button className="p-2">
                            <HiOutlineChevronLeft />
                        </button>
                        <button className="p-2">
                            <HiOutlineChevronRight />
                        </button>
                        <button onClick={() => setOpenModal(false)} className="p-2">
                            <HiOutlineX />
                        </button>
                    </div>
                    <div className='border border-opacity10 p-2 px-3'>
                        <div>670 SEI <span className='opacity-50 text-[12px]'>($528.98)</span></div>
                        <button className='uppercase bg-sysPink text-white w-full py-1 mt-1 text-sm rounded rounded-tl-none'>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='p-5'>
                <div className='flex flex-wrap justify-between'>
                    <div className='w-full lg:w-1/2 mb-8'>
                        <div>
                            <div className='flex items-end gap-3'>
                                <h1 className='text-xl font-MarvinVisions tracking-widest'>Traits</h1><span className='opacity-50'>Rank 2135</span>
                            </div>
                            <div className='flex flex-wrap gap-3 py-5'>
                                <div className='border border-opacity10 rounded-md rounded-tl-none py-1 px-2 w-fit'>
                                    <div className='opacity-50 text-[12px] uppercase'>Plain Backgrounds</div>
                                    <div className='text-sm font-MarvinVisions tracking-widest uppercase'>3</div>
                                    <div className='opacity-50 text-[12px]'>Rank 78</div>
                                </div>
                                <div className='border border-opacity10 rounded-md rounded-tl-none py-1 px-2 w-fit'>
                                    <div className='opacity-50 text-[12px] uppercase'>Skin</div>
                                    <div className='text-sm font-MarvinVisions tracking-widest uppercase'>White</div>
                                    <div className='opacity-50 text-[12px]'>Rank 78</div>
                                </div>
                                <div className='border border-opacity10 rounded-md rounded-tl-none py-1 px-2 w-fit'>
                                    <div className='opacity-50 text-[12px] uppercase'>Accessories</div>
                                    <div className='text-sm font-MarvinVisions tracking-widest uppercase'>None</div>
                                    <div className='opacity-50 text-[12px]'>Rank 78</div>
                                </div>
                                <div className='border border-opacity10 rounded-md rounded-tl-none py-1 px-2 w-fit'>
                                    <div className='opacity-50 text-[12px] uppercase'>Face</div>
                                    <div className='text-sm font-MarvinVisions tracking-widest uppercase'>Smirk</div>
                                    <div className='opacity-50 text-[12px]'>Rank 78</div>
                                </div>
                                <div className='border border-opacity10 rounded-md rounded-tl-none py-1 px-2 w-fit'>
                                    <div className='opacity-50 text-[12px] uppercase'>Glasses</div>
                                    <div className='text-sm font-MarvinVisions tracking-widest uppercase'>None</div>
                                    <div className='opacity-50 text-[12px]'>Rank 78</div>
                                </div>
                                <div className='border border-opacity10 rounded-md rounded-tl-none py-1 px-2 w-fit'>
                                    <div className='opacity-50 text-[12px] uppercase'>Hair</div>
                                    <div className='text-sm font-MarvinVisions tracking-widest uppercase'>Green</div>
                                    <div className='opacity-50 text-[12px]'>Rank 78</div>
                                </div>
                                <div className='border border-opacity10 rounded-md rounded-tl-none py-1 px-2 w-fit'>
                                    <div className='opacity-50 text-[12px] uppercase'>Clothes</div>
                                    <div className='text-sm font-MarvinVisions tracking-widest uppercase'>Green Shoulders</div>
                                    <div className='opacity-50 text-[12px]'>Rank 78</div>
                                </div>
                                <div className='border border-opacity10 rounded-md rounded-tl-none py-1 px-2 w-fit'>
                                    <div className='opacity-50 text-[12px] uppercase'>Thunder Effect</div>
                                    <div className='text-sm font-MarvinVisions tracking-widest uppercase'>None</div>
                                    <div className='opacity-50 text-[12px]'>Rank 78</div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div className='text-xl font-MarvinVisions tracking-widest'>
                                Collection Details
                            </div>
                            <div className='text-sm font-Poppins py-2'>Creator: <span className='text-base text-sysPink'>0x28...28SJ</span> • Created: Dec 2023 • Creator Earnings: 5%</div>
                            <div className='flex flex-wrap gap-4'>
                                <div>
                                    <div className='opacity-50 text-[12px]'>Contract Address</div>
                                    <div className='text-sysPink text-sm flex items-center gap-2'>0x28...28SJ <HiOutlineExternalLink /></div>
                                </div>
                                <div>
                                    <div className='opacity-50 text-[12px]'>Token ID</div>
                                    <div className='text-sm'>0x28...28SJ</div>
                                </div>
                                <div>
                                    <div className='opacity-50 text-[12px]'>Token Standard</div>
                                    <div className='text-sm'>SEI</div>
                                </div>
                                <div>
                                    <div className='opacity-50 text-[12px]'>Blockchain</div>
                                    <div className='text-sm'>SEI</div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <div className='text-xl font-MarvinVisions tracking-widest mb-2'>
                                Description
                            </div>
                            <div className='text-sm font-Poppins'>Lorem ipsum dolor sit amet consectetur. Enim egestas ullamcorper massa sed.</div>
                            <div className='text-sysPink text-[12px]'>More</div>
                            <div className='flex flex-wrap gap-4 mt-3'>
                                <a href='https://discord.com' target='_black' className='text-sysPink text-sm flex items-center gap-2 uppercase'>Discord <HiOutlineExternalLink /></a>
                                <a href='https://discord.com' target='_black' className='text-sysPink text-sm flex items-center gap-2 uppercase'>Twitter <HiOutlineExternalLink /></a>
                                <a href='https://discord.com' target='_black' className='text-sysPink text-sm flex items-center gap-2 uppercase'>Website <HiOutlineExternalLink /></a>
                                <a href='https://discord.com' target='_black' className='text-sysPink text-sm flex items-center gap-2 uppercase'>Contract <HiOutlineExternalLink /></a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 mb-8'>
                        <div className='flex justify-between'>
                            <div className='flex items-end gap-3'>
                                <h1 className='text-xl font-MarvinVisions tracking-widest'>Last Sale</h1><span className='opacity-50'>590 SEI</span>
                            </div>
                            <button>
                                <HiOutlineChevronUp />
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-1 py-5 font-Poppins">
                            <Kbd className="dark:bg-opacity10 dark:border-white/10">Listings</Kbd>
                            <Kbd className="dark:bg-opacity10 dark:border-white/10">Sales</Kbd>
                            <Kbd className="dark:bg-opacity10 dark:border-white/10">Transfers</Kbd>
                            <Kbd className="dark:bg-opacity10 dark:border-white/10">Cancellations</Kbd>
                        </div>
                        <div>
                            <ChartDraw />
                        </div>
                        <div>
                            <Table className="bg-transparent dark:bg-transparent">
                                <Table.Head className="border-b border-opacity10">
                                    <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50"></Table.HeadCell>
                                    <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50">Price</Table.HeadCell>
                                    <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50">By</Table.HeadCell>
                                    <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50">To</Table.HeadCell>
                                    <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50 text-right">Time</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="text-sm">
                                    <Table.Row className="">
                                        <Table.Cell className="dark:text-white py-0">
                                            <span className="w-fit uppercase text-[11px] bg-[#FF2B2B10] text-[#FF2B2B] font-bold px-2 rounded">Sell</span>
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-0">
                                            <div className='flex items-center gap-1'>
                                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='dark:invert'>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.486 11.5C7.11988 11.5 8.58782 10.7911 9.59753 9.66494C9.12783 9.25778 8.41999 9.23304 7.91996 9.63549L7.82444 9.71238C6.9089 10.4493 5.57483 10.3404 4.79148 9.46498C4.36423 8.98751 3.63252 8.93876 3.14542 9.35529L2.04403 10.2971C2.98736 11.0499 4.18398 11.5 5.486 11.5ZM7.2738 8.83674C8.14583 8.13486 9.37154 8.16004 10.2103 8.83791C10.7116 8.00938 11 7.03829 11 6.00001C11 4.84629 10.6439 3.77554 10.0353 2.89119C9.64294 2.80784 9.21769 2.90518 8.89489 3.19052L8.803 3.27173C7.92252 4.04997 6.58486 4.00268 5.76183 3.16422C5.31297 2.70692 4.57977 2.6919 4.11244 3.13044L2.83075 4.33318L2.12567 3.58565L3.40736 2.38289C4.28277 1.5614 5.65623 1.58953 6.49709 2.44617C6.93644 2.89377 7.65053 2.91902 8.12055 2.50356L8.21244 2.42235C8.49775 2.17016 8.82784 2.00015 9.17348 1.91073C8.19656 1.03373 6.90376 0.5 5.486 0.5C2.68686 0.5 0.374872 2.5804 0.0193643 5.27561C0.869573 4.86866 1.91831 5.02526 2.61152 5.73335C3.04916 6.18036 3.75383 6.22753 4.24742 5.84289L4.96404 5.28446C5.86469 4.58263 7.13782 4.6166 7.99955 5.36545L9.39474 6.57792L8.71881 7.35178L7.32362 6.13934C6.83363 5.71349 6.10967 5.69417 5.59755 6.09325L4.88093 6.65171C3.97403 7.35839 2.67937 7.27172 1.87532 6.45043C1.40777 5.97284 0.643089 5.95618 0.155077 6.41295L0 6.55809C0.116055 7.70682 0.586505 8.75127 1.30064 9.58093L2.47568 8.5761C3.38816 7.79577 4.75884 7.8871 5.55918 8.78154C5.97736 9.24891 6.68952 9.30697 7.17824 8.9136L7.2738 8.83674Z" fill="black" />
                                                </svg>
                                                <span className='text-black dark:text-white'>100.04</span>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-0">
                                            0x49...43ad
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-0">
                                            0x49...43ad
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-1 text-right">
                                            2d
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="">
                                        <Table.Cell className="dark:text-white py-0">
                                            <span className="w-fit uppercase text-[11px] bg-[#FF4EB510] text-[#FF4EB5] font-bold px-2 rounded">List</span>
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-0">
                                            <div className='flex items-center gap-1'>
                                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='dark:invert'>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.486 11.5C7.11988 11.5 8.58782 10.7911 9.59753 9.66494C9.12783 9.25778 8.41999 9.23304 7.91996 9.63549L7.82444 9.71238C6.9089 10.4493 5.57483 10.3404 4.79148 9.46498C4.36423 8.98751 3.63252 8.93876 3.14542 9.35529L2.04403 10.2971C2.98736 11.0499 4.18398 11.5 5.486 11.5ZM7.2738 8.83674C8.14583 8.13486 9.37154 8.16004 10.2103 8.83791C10.7116 8.00938 11 7.03829 11 6.00001C11 4.84629 10.6439 3.77554 10.0353 2.89119C9.64294 2.80784 9.21769 2.90518 8.89489 3.19052L8.803 3.27173C7.92252 4.04997 6.58486 4.00268 5.76183 3.16422C5.31297 2.70692 4.57977 2.6919 4.11244 3.13044L2.83075 4.33318L2.12567 3.58565L3.40736 2.38289C4.28277 1.5614 5.65623 1.58953 6.49709 2.44617C6.93644 2.89377 7.65053 2.91902 8.12055 2.50356L8.21244 2.42235C8.49775 2.17016 8.82784 2.00015 9.17348 1.91073C8.19656 1.03373 6.90376 0.5 5.486 0.5C2.68686 0.5 0.374872 2.5804 0.0193643 5.27561C0.869573 4.86866 1.91831 5.02526 2.61152 5.73335C3.04916 6.18036 3.75383 6.22753 4.24742 5.84289L4.96404 5.28446C5.86469 4.58263 7.13782 4.6166 7.99955 5.36545L9.39474 6.57792L8.71881 7.35178L7.32362 6.13934C6.83363 5.71349 6.10967 5.69417 5.59755 6.09325L4.88093 6.65171C3.97403 7.35839 2.67937 7.27172 1.87532 6.45043C1.40777 5.97284 0.643089 5.95618 0.155077 6.41295L0 6.55809C0.116055 7.70682 0.586505 8.75127 1.30064 9.58093L2.47568 8.5761C3.38816 7.79577 4.75884 7.8871 5.55918 8.78154C5.97736 9.24891 6.68952 9.30697 7.17824 8.9136L7.2738 8.83674Z" fill="black" />
                                                </svg>
                                                <span className='text-black dark:text-white'>100.04</span>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-0">
                                            0x49...43ad
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-0">
                                            0x49...43ad
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-1 text-right">
                                            2d
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="">
                                        <Table.Cell className="dark:text-white py-0">
                                            <span className="w-fit uppercase text-[11px] bg-[#52DDD210] text-[#52DDD2] font-bold px-2 rounded">Transfer</span>
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-0">
                                            <div className='flex items-center gap-1'>
                                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='dark:invert'>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.486 11.5C7.11988 11.5 8.58782 10.7911 9.59753 9.66494C9.12783 9.25778 8.41999 9.23304 7.91996 9.63549L7.82444 9.71238C6.9089 10.4493 5.57483 10.3404 4.79148 9.46498C4.36423 8.98751 3.63252 8.93876 3.14542 9.35529L2.04403 10.2971C2.98736 11.0499 4.18398 11.5 5.486 11.5ZM7.2738 8.83674C8.14583 8.13486 9.37154 8.16004 10.2103 8.83791C10.7116 8.00938 11 7.03829 11 6.00001C11 4.84629 10.6439 3.77554 10.0353 2.89119C9.64294 2.80784 9.21769 2.90518 8.89489 3.19052L8.803 3.27173C7.92252 4.04997 6.58486 4.00268 5.76183 3.16422C5.31297 2.70692 4.57977 2.6919 4.11244 3.13044L2.83075 4.33318L2.12567 3.58565L3.40736 2.38289C4.28277 1.5614 5.65623 1.58953 6.49709 2.44617C6.93644 2.89377 7.65053 2.91902 8.12055 2.50356L8.21244 2.42235C8.49775 2.17016 8.82784 2.00015 9.17348 1.91073C8.19656 1.03373 6.90376 0.5 5.486 0.5C2.68686 0.5 0.374872 2.5804 0.0193643 5.27561C0.869573 4.86866 1.91831 5.02526 2.61152 5.73335C3.04916 6.18036 3.75383 6.22753 4.24742 5.84289L4.96404 5.28446C5.86469 4.58263 7.13782 4.6166 7.99955 5.36545L9.39474 6.57792L8.71881 7.35178L7.32362 6.13934C6.83363 5.71349 6.10967 5.69417 5.59755 6.09325L4.88093 6.65171C3.97403 7.35839 2.67937 7.27172 1.87532 6.45043C1.40777 5.97284 0.643089 5.95618 0.155077 6.41295L0 6.55809C0.116055 7.70682 0.586505 8.75127 1.30064 9.58093L2.47568 8.5761C3.38816 7.79577 4.75884 7.8871 5.55918 8.78154C5.97736 9.24891 6.68952 9.30697 7.17824 8.9136L7.2738 8.83674Z" fill="black" />
                                                </svg>
                                                <span className='text-black dark:text-white'>100.04</span>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-0">
                                            0x49...43ad
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-0">
                                            0x49...43ad
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-1 text-right">
                                            2d
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row className="">
                                        <Table.Cell className="dark:text-white py-0">
                                            <span className="w-fit uppercase text-[11px] bg-[#FFFFFF10] text-[#FFFFFF] font-bold px-2 rounded">Cancel</span>
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-0">
                                            <div className='flex items-center gap-1'>
                                                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='dark:invert'>
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.486 11.5C7.11988 11.5 8.58782 10.7911 9.59753 9.66494C9.12783 9.25778 8.41999 9.23304 7.91996 9.63549L7.82444 9.71238C6.9089 10.4493 5.57483 10.3404 4.79148 9.46498C4.36423 8.98751 3.63252 8.93876 3.14542 9.35529L2.04403 10.2971C2.98736 11.0499 4.18398 11.5 5.486 11.5ZM7.2738 8.83674C8.14583 8.13486 9.37154 8.16004 10.2103 8.83791C10.7116 8.00938 11 7.03829 11 6.00001C11 4.84629 10.6439 3.77554 10.0353 2.89119C9.64294 2.80784 9.21769 2.90518 8.89489 3.19052L8.803 3.27173C7.92252 4.04997 6.58486 4.00268 5.76183 3.16422C5.31297 2.70692 4.57977 2.6919 4.11244 3.13044L2.83075 4.33318L2.12567 3.58565L3.40736 2.38289C4.28277 1.5614 5.65623 1.58953 6.49709 2.44617C6.93644 2.89377 7.65053 2.91902 8.12055 2.50356L8.21244 2.42235C8.49775 2.17016 8.82784 2.00015 9.17348 1.91073C8.19656 1.03373 6.90376 0.5 5.486 0.5C2.68686 0.5 0.374872 2.5804 0.0193643 5.27561C0.869573 4.86866 1.91831 5.02526 2.61152 5.73335C3.04916 6.18036 3.75383 6.22753 4.24742 5.84289L4.96404 5.28446C5.86469 4.58263 7.13782 4.6166 7.99955 5.36545L9.39474 6.57792L8.71881 7.35178L7.32362 6.13934C6.83363 5.71349 6.10967 5.69417 5.59755 6.09325L4.88093 6.65171C3.97403 7.35839 2.67937 7.27172 1.87532 6.45043C1.40777 5.97284 0.643089 5.95618 0.155077 6.41295L0 6.55809C0.116055 7.70682 0.586505 8.75127 1.30064 9.58093L2.47568 8.5761C3.38816 7.79577 4.75884 7.8871 5.55918 8.78154C5.97736 9.24891 6.68952 9.30697 7.17824 8.9136L7.2738 8.83674Z" fill="black" />
                                                </svg>
                                                <span className='text-black dark:text-white'>100.04</span>
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-0">
                                            0x49...43ad
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-0">
                                            0x49...43ad
                                        </Table.Cell>
                                        <Table.Cell className="dark:text-white py-1 text-right">
                                            2d
                                        </Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
    </Modal>

}

export default NFTinfoModal;
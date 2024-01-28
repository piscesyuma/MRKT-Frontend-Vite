import { useState } from 'react';
import { Modal } from 'flowbite-react';
import { HiOutlineX } from "react-icons/hi"

const PurchaseModal = ({
    openModal,
    setOpenModal
}) => {
    const [step, setStep] = useState(0);

    return (
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} className="bg-sysDark" size="md">
            <Modal.Body className="dark:bg-sysDark text-black dark:text-white rounded-xl rounded-tl-none w-[480px]">
                <div className='relative text-2xl mb-5'>
                    <h1 className='font-MarvinVisions tracking-widest'>
                        {step === 0 ? "Approve Purchase (3)" : "Your Purchase Is Complete!"}
                    </h1>
                    <div className="flex gap-2 justify-end absolute top-0 right-0 p-1">
                        <button onClick={() => setOpenModal(false)} className="">
                            <HiOutlineX />
                        </button>
                    </div>
                </div>
                {/* step 0 start ----- */}
                {
                    step === 0 &&
                    <>
                        <div className='py-3'>
                            {
                                [1, 2, 3].map(item => (
                                    <div className='flex justify-between items-center mb-2'>
                                        <div className='flex items-center gap-2'>
                                            <img src="/images/nft-1.png" className='w-16 rounded-lg' alt="" />
                                            <div>
                                                <h5 className="text-base font-bold font-MarvinVisions tracking-widest">
                                                    Syan #7134
                                                </h5>
                                                <p className="font-normal opacity-50 text-[12px]">
                                                    Rank 7683
                                                </p>
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <div className="flex items-center gap-1">
                                                <svg className="flex-none" width="16" height="16" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.486 11.5C7.11988 11.5 8.58782 10.7911 9.59753 9.66494C9.12783 9.25778 8.41999 9.23304 7.91996 9.63549L7.82444 9.71238C6.9089 10.4493 5.57483 10.3404 4.79148 9.46498C4.36423 8.98751 3.63252 8.93876 3.14542 9.35529L2.04403 10.2971C2.98736 11.0499 4.18398 11.5 5.486 11.5ZM7.2738 8.83674C8.14583 8.13486 9.37154 8.16004 10.2103 8.83791C10.7116 8.00938 11 7.03829 11 6.00001C11 4.84629 10.6439 3.77554 10.0353 2.89119C9.64294 2.80784 9.21769 2.90518 8.89489 3.19052L8.803 3.27173C7.92252 4.04997 6.58486 4.00268 5.76183 3.16422C5.31297 2.70692 4.57977 2.6919 4.11244 3.13044L2.83075 4.33318L2.12567 3.58565L3.40736 2.38289C4.28277 1.5614 5.65623 1.58953 6.49709 2.44617C6.93644 2.89377 7.65053 2.91902 8.12055 2.50356L8.21244 2.42235C8.49775 2.17016 8.82784 2.00015 9.17348 1.91073C8.19656 1.03373 6.90376 0.5 5.486 0.5C2.68686 0.5 0.374872 2.5804 0.0193643 5.27561C0.869573 4.86866 1.91831 5.02526 2.61152 5.73335C3.04916 6.18036 3.75383 6.22753 4.24742 5.84289L4.96404 5.28446C5.86469 4.58263 7.13782 4.6166 7.99955 5.36545L9.39474 6.57792L8.71881 7.35178L7.32362 6.13934C6.83363 5.71349 6.10967 5.69417 5.59755 6.09325L4.88093 6.65171C3.97403 7.35839 2.67937 7.27172 1.87532 6.45043C1.40777 5.97284 0.643089 5.95618 0.155077 6.41295L0 6.55809C0.116055 7.70682 0.586505 8.75127 1.30064 9.58093L2.47568 8.5761C3.38816 7.79577 4.75884 7.8871 5.55918 8.78154C5.97736 9.24891 6.68952 9.30697 7.17824 8.9136L7.2738 8.83674Z" fill="#FF4EB5" />
                                                </svg>
                                                <span className="">667 SEI</span>
                                            </div>
                                            <div className="text-[12px] opacity-50">($525.82)</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex justify-between items-center mb-3'>
                            <div className='font-bold'>MRKT Fee</div>
                            <div>2%</div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='font-bold'>Total</div>
                            <div className='text-center'>
                                <div className="flex items-center gap-1">
                                    <svg className="flex-none" width="16" height="16" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.486 11.5C7.11988 11.5 8.58782 10.7911 9.59753 9.66494C9.12783 9.25778 8.41999 9.23304 7.91996 9.63549L7.82444 9.71238C6.9089 10.4493 5.57483 10.3404 4.79148 9.46498C4.36423 8.98751 3.63252 8.93876 3.14542 9.35529L2.04403 10.2971C2.98736 11.0499 4.18398 11.5 5.486 11.5ZM7.2738 8.83674C8.14583 8.13486 9.37154 8.16004 10.2103 8.83791C10.7116 8.00938 11 7.03829 11 6.00001C11 4.84629 10.6439 3.77554 10.0353 2.89119C9.64294 2.80784 9.21769 2.90518 8.89489 3.19052L8.803 3.27173C7.92252 4.04997 6.58486 4.00268 5.76183 3.16422C5.31297 2.70692 4.57977 2.6919 4.11244 3.13044L2.83075 4.33318L2.12567 3.58565L3.40736 2.38289C4.28277 1.5614 5.65623 1.58953 6.49709 2.44617C6.93644 2.89377 7.65053 2.91902 8.12055 2.50356L8.21244 2.42235C8.49775 2.17016 8.82784 2.00015 9.17348 1.91073C8.19656 1.03373 6.90376 0.5 5.486 0.5C2.68686 0.5 0.374872 2.5804 0.0193643 5.27561C0.869573 4.86866 1.91831 5.02526 2.61152 5.73335C3.04916 6.18036 3.75383 6.22753 4.24742 5.84289L4.96404 5.28446C5.86469 4.58263 7.13782 4.6166 7.99955 5.36545L9.39474 6.57792L8.71881 7.35178L7.32362 6.13934C6.83363 5.71349 6.10967 5.69417 5.59755 6.09325L4.88093 6.65171C3.97403 7.35839 2.67937 7.27172 1.87532 6.45043C1.40777 5.97284 0.643089 5.95618 0.155077 6.41295L0 6.55809C0.116055 7.70682 0.586505 8.75127 1.30064 9.58093L2.47568 8.5761C3.38816 7.79577 4.75884 7.8871 5.55918 8.78154C5.97736 9.24891 6.68952 9.30697 7.17824 8.9136L7.2738 8.83674Z" fill="#FF4EB5" />
                                    </svg>
                                    <span className="text-xl">667 SEI</span>
                                </div>
                                <div className="text-[12px] opacity-50">($1654.82)</div>
                            </div>
                        </div>
                        <div className='text-center my-3'>
                            <button className='font-blod py-2'>Go to your wallet</button>
                            <p className='text-sm opacity-80'>You’ll be asked to approve this purchase form your wallet.</p>
                        </div>
                        <button onClick={() => setStep(1)} className='uppercase text-white bg-sysPink rounded rounded-tl-none w-full py-2'>Continue</button>
                    </>
                }
                {/* step 1 start ------ */}
                {
                    step === 1 &&
                    <>
                        <div className='flex flex-wrap gap-2'>
                            {
                                Array.apply(null, Array(9)).map(item => <img src="/images/nft-1.png" className='w-16 rounded-lg' alt="" />)
                            }
                        </div>
                        <div className='flex justify-between items-center py-5'>
                            <div className='font-bold'>Total</div>
                            <div className='text-center'>
                                <div className="flex items-center gap-1">
                                    <svg className="flex-none" width="16" height="16" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.486 11.5C7.11988 11.5 8.58782 10.7911 9.59753 9.66494C9.12783 9.25778 8.41999 9.23304 7.91996 9.63549L7.82444 9.71238C6.9089 10.4493 5.57483 10.3404 4.79148 9.46498C4.36423 8.98751 3.63252 8.93876 3.14542 9.35529L2.04403 10.2971C2.98736 11.0499 4.18398 11.5 5.486 11.5ZM7.2738 8.83674C8.14583 8.13486 9.37154 8.16004 10.2103 8.83791C10.7116 8.00938 11 7.03829 11 6.00001C11 4.84629 10.6439 3.77554 10.0353 2.89119C9.64294 2.80784 9.21769 2.90518 8.89489 3.19052L8.803 3.27173C7.92252 4.04997 6.58486 4.00268 5.76183 3.16422C5.31297 2.70692 4.57977 2.6919 4.11244 3.13044L2.83075 4.33318L2.12567 3.58565L3.40736 2.38289C4.28277 1.5614 5.65623 1.58953 6.49709 2.44617C6.93644 2.89377 7.65053 2.91902 8.12055 2.50356L8.21244 2.42235C8.49775 2.17016 8.82784 2.00015 9.17348 1.91073C8.19656 1.03373 6.90376 0.5 5.486 0.5C2.68686 0.5 0.374872 2.5804 0.0193643 5.27561C0.869573 4.86866 1.91831 5.02526 2.61152 5.73335C3.04916 6.18036 3.75383 6.22753 4.24742 5.84289L4.96404 5.28446C5.86469 4.58263 7.13782 4.6166 7.99955 5.36545L9.39474 6.57792L8.71881 7.35178L7.32362 6.13934C6.83363 5.71349 6.10967 5.69417 5.59755 6.09325L4.88093 6.65171C3.97403 7.35839 2.67937 7.27172 1.87532 6.45043C1.40777 5.97284 0.643089 5.95618 0.155077 6.41295L0 6.55809C0.116055 7.70682 0.586505 8.75127 1.30064 9.58093L2.47568 8.5761C3.38816 7.79577 4.75884 7.8871 5.55918 8.78154C5.97736 9.24891 6.68952 9.30697 7.17824 8.9136L7.2738 8.83674Z" fill="#FF4EB5" />
                                    </svg>
                                    <span className="text-xl">667 SEI</span>
                                </div>
                                <div className="text-[12px] opacity-50">($1654.82)</div>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <button className='uppercase text-white bg-opacity10 rounded rounded-tl-none w-full py-2'>View On Seiscan</button>
                            <button className='uppercase text-white bg-sysPink rounded rounded-tl-none w-full py-2'>Close</button>
                        </div>
                    </>
                }
            </Modal.Body>
        </Modal>
    )
}

export default PurchaseModal;
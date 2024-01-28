import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { useToggle } from "../contexts/AppContext";
import NFTinfoModal from "./modals/NFTinfoModal";
import { fromWei, numberWithCommas } from "../utils/utils";
import { useSigningCosmWasmClient, useWallet } from '@sei-js/react';
import PurchaseModal from "./modals/PurchaseModal";

const NFTCard = ({ nft, onSelectedNft, isSelled }) => {
  const CONTRACT_ADDRESS = "sei152u2u0lqc27428cuf8dx48k8saua74m6nql5kgvsu4rfeqm547rsnhy4y9";
  const {connectedWallet, accounts} = useWallet();
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(false);
  const { seiPrice } = useToggle();

  const { signingCosmWasmClient } = useSigningCosmWasmClient();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleBuyNFT = async () => {
    if (!connectedWallet) {
      alert("Connect wallet!");
    }
    else {
        const contractAddress = nft.collection_key;
        const amount = nft.auction.price[0].amount;
        const fund = Math.ceil(parseInt(amount) * 1.02);
        const senderAddress = accounts[0].address;
        const msg = {
          "buy_now": {
            "expected_price": {
              "amount": nft.auction.price[0].amount,
              "denom": "usei"
            },
            "nft": {
              "address": contractAddress,
              "token_id": nft.id
            }
          }
        };

        const gas = 
        {
          amount: [{ amount: '0.1', denom: 'usei' }],
          gas: '5000000'
        };

        const fee = [
          { 
            amount: fund.toString(),
            denom: "usei"
          }
        ];

        const tx = await signingCosmWasmClient?.execute(senderAddress, CONTRACT_ADDRESS, msg, gas, "", fee);
        
        setTxHash(tx.transactionHash);
        setLoading(false);
    }
    
  };

  return (
    <>
      <div onClick={() => {
        setSelected(!selected);
        onSelectedNft(nft.id, !selected);
      }}
        className={`relative max-w-[186px] w-full dark:bg-sysDark rounded-lg rounded-tl-none border hover:border-sysPink group transition ${
          selected ? "border-sysPink dark:border-sysPink" : "border-transparent"
        }`}
      >
        {/* <button
          onClick={() => handleOpenModal()}
          className="absolute inset-0 m-auto w-fit h-fit px-3 py-2 text-black bg-white hidden group-hover:block z-10"
        >
          View
        </button> */}
        <button
          onClick={() => setOpenModal(true)} //{handleBuyNFT}
          className="absolute inset-0 m-auto w-fit h-fit px-3 py-2 text-black bg-white hidden group-hover:block z-10"
        >
          Buy
        </button>
        <img
          src={`https://wsrv.nl/?url=${nft.image}&w=200&h=200&fit=outside`}
          className="w-full rounded-tr-lg group-hover:blur-sm transition"
          alt=""
        />
        <div className="flex flex-col justify-center p-3">
          <h5 className="text-base font-bold font-MarvinVisions tracking-widest">
            {nft.name}
          </h5>
          <p className="font-normal opacity-50 text-[12px]">
            Rank {nft.rarity.rank}
          </p>
          <div className="flex items-center gap-1">
            <svg
              className="flex-none"
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.486 11.5C7.11988 11.5 8.58782 10.7911 9.59753 9.66494C9.12783 9.25778 8.41999 9.23304 7.91996 9.63549L7.82444 9.71238C6.9089 10.4493 5.57483 10.3404 4.79148 9.46498C4.36423 8.98751 3.63252 8.93876 3.14542 9.35529L2.04403 10.2971C2.98736 11.0499 4.18398 11.5 5.486 11.5ZM7.2738 8.83674C8.14583 8.13486 9.37154 8.16004 10.2103 8.83791C10.7116 8.00938 11 7.03829 11 6.00001C11 4.84629 10.6439 3.77554 10.0353 2.89119C9.64294 2.80784 9.21769 2.90518 8.89489 3.19052L8.803 3.27173C7.92252 4.04997 6.58486 4.00268 5.76183 3.16422C5.31297 2.70692 4.57977 2.6919 4.11244 3.13044L2.83075 4.33318L2.12567 3.58565L3.40736 2.38289C4.28277 1.5614 5.65623 1.58953 6.49709 2.44617C6.93644 2.89377 7.65053 2.91902 8.12055 2.50356L8.21244 2.42235C8.49775 2.17016 8.82784 2.00015 9.17348 1.91073C8.19656 1.03373 6.90376 0.5 5.486 0.5C2.68686 0.5 0.374872 2.5804 0.0193643 5.27561C0.869573 4.86866 1.91831 5.02526 2.61152 5.73335C3.04916 6.18036 3.75383 6.22753 4.24742 5.84289L4.96404 5.28446C5.86469 4.58263 7.13782 4.6166 7.99955 5.36545L9.39474 6.57792L8.71881 7.35178L7.32362 6.13934C6.83363 5.71349 6.10967 5.69417 5.59755 6.09325L4.88093 6.65171C3.97403 7.35839 2.67937 7.27172 1.87532 6.45043C1.40777 5.97284 0.643089 5.95618 0.155077 6.41295L0 6.55809C0.116055 7.70682 0.586505 8.75127 1.30064 9.58093L2.47568 8.5761C3.38816 7.79577 4.75884 7.8871 5.55918 8.78154C5.97736 9.24891 6.68952 9.30697 7.17824 8.9136L7.2738 8.83674Z"
                fill="#FF4EB5"
              />
            </svg>
            <span className="text-sm">
              {numberWithCommas(nft?.auction?.price_float)} SEI
            </span>
            <span className="text-sm opacity-50">
              (${numberWithCommas(seiPrice * (nft?.auction?.price_float), 2)})
            </span>
          </div>
        </div>
      </div>
      {/* <NFTinfoModal openModal={openModal} setOpenModal={setOpenModal} /> */}
      <PurchaseModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        selNFTs={[nft]} />
    </>
  );
};

export default NFTCard;

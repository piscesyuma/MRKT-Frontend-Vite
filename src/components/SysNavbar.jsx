import { useContext, useEffect, useState } from "react";
import { useWallet, SeiWalletContext } from "@sei-js/react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import {
  HiOutlineLogout,
  HiOutlineDocumentDuplicate,
  HiOutlineCash,
} from "react-icons/hi";
import ConnectWalletModal from "./modals/ConnectWalletModal";

import initAvatar from "../assets/images/initialAvatar.png";

const NavLinks = () => {
  return (
    <>
      <Navbar.Link
        href="#"
        className="text-base tracking-widest dark:text-white font-MarvinVisions hover:text-pink-400 md:hover:text-pink-400 hover:bg-transparent"
      >
        Collection
      </Navbar.Link>
      <Navbar.Link
        href="#"
        className="text-base tracking-widest opacity-50 dark:text-white font-MarvinVisions hover:text-pink-400 md:hover:text-pink-400 hover:bg-transparent"
      >
        Leaderboard
      </Navbar.Link>
    </>
  );
};

const SysNavbar = () => {
  const { connectedWallet, accounts, setTargetWallet } =
    useContext(SeiWalletContext);
  //   const { connectedWallet, accounts } = useWallet();
  const [openWalletModal, setOpenWalletModal] = useState(false);

  const connect = () => {
    setOpenWalletModal(true);
  };

  const disconnect = () => {
    if (setTargetWallet) setTargetWallet(undefined);
  };

  useEffect(() => {
    if (connectedWallet) {
      const senderAddress = accounts[0].address;
      console.log("Connected address: ", senderAddress);
    }
  }, [connectedWallet]);

  return (
    <Navbar
      fluid
      className="border-b bg-white/10 dark:bg-black/10 dark:border-opacity10"
    >
      <div className="flex flex-wrap items-center justify-between">
        <Navbar.Brand href="/" className="pr-10">
          <span className="self-center text-4xl font-bold whitespace-nowrap text-sysPink font-MarvinVisions">
            MRKT
          </span>
        </Navbar.Brand>
        <Navbar.Collapse className="hidden md:block">
          <NavLinks />
        </Navbar.Collapse>
      </div>
      <div className="flex md:order-2">
        {connectedWallet && (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={initAvatar} rounded />}
            className="dark:bg-[#393939] border-opacity10 pb-3"
          >
            <div className="flex flex-col items-center px-8 pt-6 mx-auto mb-3">
              <Avatar alt="avatar" size="lg" img={initAvatar} rounded />
              <div className="flex gap-3 items-center dark:text-[#D9D9D9] py-2">
                {accounts[0].address} <HiOutlineDocumentDuplicate />
              </div>
              <div className="px-2 text-white rounded-full bg-sysPink w-fit">
                Rank #2973
              </div>
            </div>
            <Dropdown.Item
              //   onClick={() => setIsConnect(false)}
              className="text-lg dark:text-white hover:bg-opacity10 md:hover:bg-opacity10"
            >
              <HiOutlineLogout className="mr-2 text-xl" />{" "}
              <span onClick={disconnect}>Disconnect</span>
            </Dropdown.Item>
          </Dropdown>
        )}
        {!connectedWallet && ( //<WalletConnectButton />
          <button
            onClick={connect}
            className="flex items-center gap-2 px-6 py-2 uppercase rounded rounded-tl-none bg-sysPink"
          >
            <HiOutlineCash /> Connect
          </button>
        )}
        <Navbar.Toggle />
        <ConnectWalletModal
          openModal={openWalletModal}
          setOpenModal={setOpenWalletModal}
        />
      </div>

      <Navbar.Collapse>
        <div className="relative xl:-ml-40">
          <div className="absolute inset-y-0 flex items-center px-2">
            <svg
              className="w-4 h-4 text-black dark:text-white"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="w-full lg:w-[554px] text-sm pl-8 border border-gray-300 dark:border-opacity10 rounded rounded-tl-none bg-opacity10 focus:outline-none"
            placeholder="Search By Collection"
          />
        </div>
        <div className="block md:hidden">
          <NavLinks />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SysNavbar;

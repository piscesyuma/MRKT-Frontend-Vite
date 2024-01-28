import { useContext, useEffect, useMemo, useState } from "react";
import { Modal } from "flowbite-react";
import { HiOutlineX } from "react-icons/hi";

import { SeiWalletContext } from "@sei-js/react";

const ConnectWalletModal = ({ openModal, setOpenModal }) => {
  const {
    connectedWallet,
    setTargetWallet,
    wallets,
    connectionError,
    targetWallet,
    setConnectionError,
  } = useContext(SeiWalletContext);

  const visibleWallets = wallets || [];

  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    if (connectedWallet || connectionError) {
      setIsConnecting(false);
    }
  }, [connectedWallet, connectionError]);

  const isWalletInstalled = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      targetWallet !== undefined &&
      window[targetWallet.walletInfo.windowKey] !== undefined
    );
  }, [targetWallet]);

  const renderWallet = (wallet) => {
    const isConnectedWallet =
      connectedWallet?.walletInfo.name === wallet.walletInfo.name;

    const renderConnection = () => {
      if (isConnectedWallet) return <p>Connected</p>;
      return null;
    };

    const selectWallet = async () => {
      setTargetWallet(wallet);
      if (connectedWallet === wallet) return;
      setIsConnecting(true);
      setConnectionError(undefined);
      setOpenModal(false);
    };

    // const isWalletTargeted =
    //   targetWallet?.walletInfo?.windowKey === wallet.walletInfo.windowKey;

    // let CalculatedItemComponent = Styles.WalletItem;

    // if (isConnectedWallet) CalculatedItemComponent = Styles.WalletItemConnected;
    // if (isWalletTargeted) CalculatedItemComponent = Styles.WalletItemTargeted;

    return (
      <li key={wallet.walletInfo.name}>
        <a
          onClick={selectWallet}
          className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <img
            alt={wallet.walletInfo.name}
            src={wallet.walletInfo.icon}
            className="h-8 rounded-md"
          />
          <span className="flex-1 ms-3 whitespace-nowrap">
            {wallet.walletInfo.name}
          </span>
        </a>
      </li>
    );
  };

  return (
    <Modal
      dismissible
      show={openModal}
      onClose={() => setOpenModal(false)}
      className="bg-sysDark"
      size="md"
    >
      <Modal.Body className="dark:bg-sysDark text-black dark:text-white rounded-xl rounded-tl-none w-[480px]">
        <div className="relative text-2xl">
          <h1 className="tracking-widest font-MarvinVisions">Connect Wallet</h1>
          <div className="absolute top-0 right-0 flex justify-end gap-2 p-1">
            <button onClick={() => setOpenModal(false)} className="">
              <HiOutlineX />
            </button>
          </div>
        </div>
        <div className="p-4 md:p-5">
          <ul className="my-4 space-y-3">{visibleWallets.map(renderWallet)}</ul>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConnectWalletModal;

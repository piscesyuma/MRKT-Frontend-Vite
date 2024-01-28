import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import {
  HiOutlineClipboard,
  HiOutlineRefresh,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi";
import InfiniteScroll from "react-infinite-scroll-component";

import Statusbar from "../components/Statusbar";
import SideBar from "../components/SideBar";
import ActivityRightSbar from "../components/AcitivyRightSbar";
import NFTCard from "../components/NFTCard";
import NFTFilterDropDown from "../components/dropdownBtns/NFTFilterDropDown";

import { useToggle } from "../contexts/AppContext";
import useWindowDimensions from "../hooks/useWindowDimensions";

// nft purchase modal
import PurchaseModal from "../components/modals/PurchaseModal";
import { getNfts, getCollection } from "../utils/apis";
import { LoadingSkeleton } from "../utils/utils";
import { useSigningCosmWasmClient, useWallet } from '@sei-js/react';

const CONTRACT_ADDRESS = "sei152u2u0lqc27428cuf8dx48k8saua74m6nql5kgvsu4rfeqm547rsnhy4y9";

const Collection = () => {
  const { address } = useParams();
  const {connectedWallet, accounts} = useWallet();
  const { signingCosmWasmClient } = useSigningCosmWasmClient();
  const [collection, setCollection] = useState(null);
  const [openPModal, setOpenPModal] = useState(false);
  const { width } = useWindowDimensions();
  const {
    sidebarPin,
    setSidebarPin,
    toggleSidebar,
    rightbarPin,
    setRightbarPin,
    toggleRightSbar,
  } = useToggle();

  const [nfts, setNfts] = useState([]);
  const [sweepIds, setSweepIds] = useState([]);
  const [totalBuying, setTotalBuying] = useState(0);
  const [buyingNFTs, setBuyingNFTs] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [filterParam, setFilterParam] = useState({
    minPrice: 0,
    maxPrice: 0,
    blockchain: "empty",
    collection: "empty",
    saleOnly: false,
    auctionOnly: false,
    offersReceived: false,
    includeBurned: false,
    traits: [],
  });
  const [filteredCount, setFilteredCount] = useState(0);

  const fetchNFTs = async () => {
    setLoading(true);
    const response = await getNfts(address, {
      page: page,
      limit: 24,
      name: search,
      attributes: JSON.stringify(filterParam.traits),
    });
console.log("2222222222222", response);
    const newItems = response.nfts.tokens;
    // const uniqueNewItems = newItems.filter(
    //   (newItem) => !nfts.some((item) => item.token_id === newItem.token_id)
    // );
    const newItemCount = response.nfts.count;
    setNfts([...nfts, ...newItems]);

    // save only when first loading
    const currentPage = parseInt(response.currentPage);
    if (currentPage === 0) {
      setAttributes(response.attributes);
    }

    setFilteredCount(newItemCount);
    setTotalCount(response.totalCounts);
    if (nfts.length >= newItemCount) {
      setHasMore(false);
    } else {
      setPage(page + 1);
    }
    setLoading(false);
  };

  useEffect(() => {
    setNfts([]);
    setPage(0);
    setTotalCount(0);
    setFilteredCount(0);
    setHasMore(true);
    fetchNFTs();
  }, [address]);

  useEffect(() => {
    if (width < 1150) {
      setSidebarPin(false);
      setRightbarPin(false);
    }
  }, [width, setSidebarPin, setRightbarPin]);

  const fetchCollectionSetting = async () => {
    const result = await getCollection(address);
    setCollection(result.collection);
  };

  const handleSweep = (id, selected) => {
    let sweeps = sweepIds;
    if (selected) {
      const selNfts = nfts.filter((nft) => nft.id === id)
      if (selNfts) {
        sweeps.push(selNfts[0]);
      }
    }
    else {
      const selNfts = nfts.filter((nft) => nft.id === id)
      if (selNfts) {
        sweeps.pop(selNfts[0]);
      }
    }
    
    setTotalBuying(sweeps.length);
    setSweepIds(sweeps);
  };

  useEffect(() => {
    if (address) {
      fetchCollectionSetting();
    }
    window.scrollTo(0, 0);
  }, [address]);

  return (
    <>
      {collection && <Statusbar collection={collection} />}

      <div
        className={`flex overflow-hidden text-black dark:text-white mb-10 relative transition-all ${
          !sidebarPin ? `pl-0` : `pl-0 md:pl-[320px]`
        } ${!rightbarPin ? `pr-0` : `pr-0 md:pr-[320px]`}`}
      >
        {/* left filter sidebar */}
        <div
          className={`p-6 bg-gray-100 dark:bg-[#1A1A1A] border-e dark:border-white/10 border-black/10 w-[320px] absolute z-10 left-0 h-full transition ${
            !sidebarPin ? `-translate-x-full` : `translate-x-0`
          }`}
        >
          <SideBar nfts={nfts} onChange={handleSweep} />
          <button
            // onClick={() => toggleSidebar()}
            onClick={()=> sidebarPin1 = !sidebarPin1} //{toggleSidebar}
            className={`p-2 bg-gray-100 dark:bg-[#1A1A1A] border border-l-0 dark:border-white/10 border-black/10 absolute top-6 -right-8 ${
              sidebarPin ? "md:hidden" : "hidden"
            }`}
          >
            <HiOutlineArrowLeft />
          </button>
        </div>

        {/* nft list */}
        <div className="w-full p-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (!sweepIds) {
                    alert("No NFTs!");
                    return;
                  }
                  setOpenPModal(true);
                }}//{() => toggleSidebar()}
                type="button"
                className="p-2 bg-black dark:bg-white rounded-md rounded-tl-none relative"
              >
                <HiOutlineClipboard className="text-white dark:text-black" />
                <div className="absolute bg-sysPink text-white text-[11px] rounded-full px-1 -top-2 -right-2">
                  {totalBuying}
                </div>
              </button>
              <div className="uppercase font-MarvinVisions tracking-widest">
                Items
              </div>
            </div>
            <button
              onClick={() => toggleRightSbar()}
              type="button"
              className="p-2 bg-black dark:bg-white rounded-md rounded-tl-none"
            >
              <svg
                className="dark:invert"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7168 6.90817L10.0002 6.12484L11.7168 5.3415L12.5002 3.62484L13.2835 5.3415L15.0002 6.12484L13.2835 6.90817L12.5002 8.62484L11.7168 6.90817ZM3.3335 10.2915L4.11683 8.57484L5.8335 7.7915L4.11683 7.00817L3.3335 5.2915L2.55016 7.00817L0.833496 7.7915L2.55016 8.57484L3.3335 10.2915ZM7.0835 6.12484L7.99183 4.1165L10.0002 3.20817L7.99183 2.29984L7.0835 0.291504L6.17516 2.29984L4.16683 3.20817L6.17516 4.1165L7.0835 6.12484ZM3.75016 15.7082L8.75016 10.6998L12.0835 14.0332L19.1668 6.0665L17.9918 4.8915L12.0835 11.5332L8.75016 8.19984L2.50016 14.4582L3.75016 15.7082Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 items-center py-3">
            <div className="relative w-full">
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
                className="w-full text-sm pl-8 border border-gray-300 dark:border-opacity10 rounded bg-opacity10 focus:outline-none"
                placeholder="Search By Name or Trait"
              />
            </div>
            <div className="flex gap-2 items-center">
              <Dropdown
                label=""
                renderTrigger={() => NFTFilterDropDown("Price: Low To High")}
                dismissOnClick={false}
                className="bg-white enabled:hover:bg-sysDark dark:bg-sysDark dark:enabled:hover:bg-sysDark"
              >
                <Dropdown.Item>Price: Low To High</Dropdown.Item>
                <Dropdown.Item>Price: Low To High</Dropdown.Item>
                <Dropdown.Item>Price: Low To High</Dropdown.Item>
                <Dropdown.Item>Price: Low To High</Dropdown.Item>
              </Dropdown>
              <button className="p-2">
                <HiOutlineRefresh />
              </button>
            </div>
          </div>
          <InfiniteScroll
            dataLength={nfts.length}
            next={fetchNFTs}
            hasMore={hasMore}
            style={{ width: "100%" }}
          >
            <div
              className={`grid gap-4 grid-cols-2 ${
                !sidebarPin
                  ? `sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9`
                  : `sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7`
              } ${
                !rightbarPin
                  ? `sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9`
                  : `sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7`
              }`}
            >
              {nfts?.length > 0 &&
                nfts.map((item, index) => (
                  <NFTCard
                    key={index}
                    nft={item}
                    onSelectedNft={handleSweep}
                    isSelled={sweepIds.includes(item.id_int)}
                  />
                ))}
              {loading && (
                <>
                  {[...Array(12)].map((e, i) => (
                    <LoadingSkeleton key={i} height={"270px"} className="!rounded-lg" />
                  ))}
                </>
              )}
            </div>
          </InfiniteScroll>
        </div>

        {/* right acitivy bar */}
        <div
          className={`p-6 bg-gray-100 dark:bg-[#1A1A1A] border-s dark:border-white/10 border-black/10 w-[320px] absolute z-10 right-0 h-full transition ${
            !rightbarPin ? `translate-x-full` : `translate-x-0`
          }`}
        >
          <ActivityRightSbar />
          <button
            onClick={() => toggleRightSbar()}
            className={`p-2 bg-gray-100 dark:bg-[#1A1A1A] border border-r-0 dark:border-white/10 border-black/10 absolute top-6 -left-8 ${
              rightbarPin ? "md:hidden" : "hidden"
            }`}
          >
            <HiOutlineArrowRight />
          </button>
        </div>
      </div>

      {/* nft purchase modal */}
      <PurchaseModal
        openModal={openPModal}
        setOpenModal={setOpenPModal}
        selNFTs={sweepIds} />
    </>
  );
};

export default Collection;

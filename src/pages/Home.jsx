import { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import { HiOutlineChevronUp } from "react-icons/hi";
import InfiniteScroll from "react-infinite-scroll-component";
import HeroCard from "../components/HeroCard";
import CollectionList from "../components/collection/CollectionList";
import { getCollections } from "../utils/apis";

const Collection = () => {
  const [collections, setCollections] = useState([]);
  const fetchTopCollections = async () => {
    const resp = await getCollections({
      page: 0,
      limit: 4,
      name: "",
      visible: 1,
    });
    const newItems = resp.collections?.slice(0, 4);
    setCollections([...collections, ...newItems]);
  };

  useEffect(() => {
    fetchTopCollections();
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-5 mb-10">
      {/* Hero section */}
      <section>
        <div className="text-center py-4 mt-4 text-black dark:text-white">
          <h1 className="font-MarvinVisions text-5xl">Where Sei Lives.</h1>
          <p className="opacity-50">
            A Sei Of Traders. An “OpenSei” one might Sei.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {collections?.map((item, index) => (
            <HeroCard key={index} collection={item} />
          ))}
        </div>
      </section>

      {/* Collections */}
      <section>
        {/* filter */}
        <div className="flex flex-wrap md:flex-nowrap items-center mt-5 gap-5 text-black dark:text-white">
          <div className="flex items-center gap-5">
            <div className="font-MarvinVisions tracking-widest uppercase cursor-pointer border-b border-black dark:border-gray-400">
              Trending
            </div>
            <div className="font-MarvinVisions tracking-widest uppercase cursor-pointer opacity-50">
              Top
            </div>
          </div>
          <div className="flex items-center gap-5 px-5">
            <div className="cursor-pointer opacity-50">1h</div>
            <div className="cursor-pointer">24h</div>
            <div className="cursor-pointer opacity-50">7d</div>
          </div>
          <div className="flex items-center w-full gap-3">
            <div className="relative w-full">
              <div className="absolute inset-y-0 flex items-center px-2">
                <svg
                  className="w-4 h-4 text-gray-400"
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
                placeholder="Search By Collection"
              />
            </div>
            <div className="flex-none">
              <div className="rounded border border-black dark:border-white">
                <HiOutlineChevronUp />
              </div>
            </div>
          </div>
        </div>
        {/* table  */}
        <div className="overflow-x-auto my-10">
          <Table striped className="bg-transparent dark:bg-transparent">
            <Table.Head>
              <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50"></Table.HeadCell>
              <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50">
                Collection
              </Table.HeadCell>
              <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50">
                Floor
              </Table.HeadCell>
              <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50">
                24Hr Volume
              </Table.HeadCell>
              <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50">
                24hr Change
              </Table.HeadCell>
              <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50">
                Sales
              </Table.HeadCell>
              <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50">
                Market Cap
              </Table.HeadCell>
              <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50">
                Total Vol
              </Table.HeadCell>
              <Table.HeadCell className="dark:bg-transparent text-black dark:text-white opacity-50 text-right">
                Listed
              </Table.HeadCell>
            </Table.Head>
            <CollectionList />
          </Table>
        </div>
      </section>
    </div>
  );
};

export default Collection;

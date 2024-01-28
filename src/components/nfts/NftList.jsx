import { useState, useEffect } from "react";
import NFTCard from "components/NFTCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { getNfts } from "utils/apis";
import { useToggle } from "contexts/AppContext";
import { LoadingSkeleton } from "utils/utils";

const NFTList = ({ nfts, fetchNFTs, hasMore, loading }) => {
  const { sidebarPin, rightbarPin } = useToggle();

  return (
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
          nfts.map((item, index) => <NFTCard key={`${index}_${item.name}`} nft={item} />)}
        {loading && (
          <>
            {[...Array(12)].map((e, i) => (
              <LoadingSkeleton key={i} height={"270px"} className="!rounded-lg" />
            ))}
          </>
        )}
      </div>
    </InfiniteScroll>
  );
};

export default NFTList;

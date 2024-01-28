import { useState } from "react";
import ReactSlider from "react-slider";
import { Avatar } from "flowbite-react";

const SideBar = ({ nfts, onChange }) => {
  const [sliderVal, setSliderVal] = useState(0);
  const [sweepNfts, setSweepNfts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleChange = (val, i) => {
    setSliderVal(val);
    if (nfts?.length > 0) {
      const sweeps = nfts.slice(0, val);
      setSweepNfts(sweeps);
      let sum = 0;
      let tokenIds = [];
      sweeps.forEach((nft) => {
        sum += nft?.auction?.price_float;
        tokenIds.push(nft?.id_int);
      });
      setTotalPrice(sum);
      onChange(tokenIds);
    }
  };

  return (
    <>
      <div>
        <h3 className="font-MarvinVisions tracking-widest pt-2"> Sweep</h3>
      </div>
      <div>
        <div className="py-3 flex items-center gap-2">
          <ReactSlider
            className="filter-slider w-full"
            thumbClassName="filter-thumb"
            trackClassName="filter-track"
            onChange={handleChange}
            renderThumb={(props, state) => {
              return (
                <div {...props}>
                  <div className="f_mark"></div>
                </div>
              );
            }}
            renderTrack={(props, state) => <div {...props}></div>}
            minDistance={1}
            max={10}
          />
          <div className="rounded text-sm bg-opacity10 px-4 py-2 mt-2 border border-gray-300 dark:border-opacity10">
            {sliderVal}
          </div>
        </div>
        <div className="flex flex-wrap mb-5">
          <Avatar.Group>
            {sweepNfts?.length > 0 &&
              sweepNfts.map((nft, index) => (
                <Avatar
                  img={`https://wsrv.nl/?url=${nft.image}&w=200&h=200&fit=outside`}
                  stacked
                  key={index}
                />
              ))}
          </Avatar.Group>
        </div>
        <button className="w-full bg-sysPink rounded-lg rounded-tl-none py-2 text-white">
          SWEEP {sweepNfts?.length} NFTs for {totalPrice} SEI
        </button>
      </div>
    </>
  );
};

export default SideBar;

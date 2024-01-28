import { fromWei, numberWithCommas } from "../utils/utils";

const Statusbar = ({ collection }) => {
  return (
    <div className="px-10 py-5 flex flex-wrap gap-5 items-center border-b dark:border-white/10 border-black/10 text-black dark:text-white">
      <div className="dark:text-white flex items-center gap-3">
        <img
          src={
            collection?.pfp === ""
              ? `https://static-assets.pallet.exchange/pfp/${collection?.name
                  .toLowerCase()
                  .replaceAll(" ", "")}.png`
              : `https://wsrv.nl/?url=${collection?.pfp}`
          }
          alt="nft"
          className="w-16 rounded-lg rounded-tl-none"
        />
        <div>
          <div className="text-2xl uppercase font-MarvinVisions tracking-widest">
            {collection.name}
          </div>
          <div className="flex gap-2">
            <a
              className="p-1 dark:bg-white/20 bg-black/20 rounded-full"
              href={
                collection.socials.find((item) => "discord" in item)?.discord
              }
              target="_black"
            >
              <svg
                className="dark:invert"
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.69629 1.01332C9.01643 0.701369 8.28739 0.47154 7.52513 0.339908C7.51124 0.337367 7.49738 0.343716 7.49023 0.356414C7.39646 0.523176 7.29261 0.740731 7.21988 0.911728C6.40002 0.788986 5.58436 0.788986 4.78131 0.911728C4.70857 0.73693 4.60094 0.523176 4.50676 0.356414C4.49961 0.34414 4.48574 0.337791 4.47186 0.339908C3.71002 0.47112 2.98098 0.700949 2.3007 1.01332C2.29481 1.01586 2.28976 1.02009 2.28641 1.02559C0.903567 3.09153 0.524748 5.10669 0.710584 7.09686C0.711425 7.1066 0.716891 7.11591 0.724459 7.12183C1.63682 7.79185 2.5206 8.19861 3.38796 8.46822C3.40184 8.47246 3.41655 8.46738 3.42538 8.45595C3.63056 8.17576 3.81346 7.88032 3.97027 7.56964C3.97953 7.55144 3.97069 7.52986 3.95178 7.52266C3.66167 7.41261 3.38544 7.27844 3.11972 7.12607C3.0987 7.11379 3.09702 7.08373 3.11635 7.06934C3.17227 7.02744 3.2282 6.98384 3.2816 6.93982C3.29126 6.93179 3.30472 6.93009 3.31607 6.93517C5.06174 7.73218 6.95163 7.73218 8.67671 6.93517C8.68806 6.92967 8.70152 6.93136 8.7116 6.9394C8.76501 6.98342 8.82093 7.02744 8.87727 7.06934C8.8966 7.08373 8.89534 7.11379 8.87432 7.12607C8.6086 7.2814 8.33237 7.41261 8.04184 7.52224C8.02293 7.52943 8.01452 7.55144 8.02377 7.56964C8.18395 7.87989 8.36685 8.17532 8.56824 8.45553C8.57665 8.46738 8.59178 8.47246 8.60566 8.46822C9.47723 8.19861 10.361 7.79185 11.2734 7.12183C11.2814 7.11591 11.2864 7.10702 11.2872 7.09728C11.5097 4.79642 10.9147 2.79779 9.71015 1.02601C9.70721 1.02009 9.70218 1.01586 9.69629 1.01332ZM4.23096 5.88505C3.70539 5.88505 3.27234 5.40255 3.27234 4.80997C3.27234 4.2174 3.69699 3.73489 4.23096 3.73489C4.76911 3.73489 5.19797 4.22164 5.18956 4.80997C5.18956 5.40255 4.76491 5.88505 4.23096 5.88505ZM7.77528 5.88505C7.24973 5.88505 6.81668 5.40255 6.81668 4.80997C6.81668 4.2174 7.24132 3.73489 7.77528 3.73489C8.31345 3.73489 8.7423 4.22164 8.7339 4.80997C8.7339 5.40255 8.31345 5.88505 7.77528 5.88505Z"
                  fill="black"
                />
              </svg>
            </a>
            <a
              className="p-1 dark:bg-white/20 bg-black/20 rounded-full"
              href={
                collection.socials.find((item) => "twitter" in item)?.twitter
              }
              target="_black"
            >
              <svg
                className="dark:invert"
                width="11"
                height="9"
                viewBox="0 0 11 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14491 0.0126953H9.64423L6.36865 3.75647L10.2221 8.8509H7.20489L4.84169 5.76116L2.13765 8.8509H0.637417L4.14097 4.84652L0.444336 0.0126953H3.53816L5.67429 2.83684L8.14491 0.0126953ZM7.61869 7.95349H8.44949L3.08673 0.862976H2.19521L7.61869 7.95349Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="min-w-[150px]">
        <div>
          {collection.floor.length > 0 &&
            numberWithCommas(fromWei(collection.floor[0].amount))}{" "}
          <span className="text-sysSuccess">(+1.89%)</span>
        </div>
        <div className="uppercase opacity-50 text-sm">Floor</div>
      </div>
      <div className="min-w-[150px]">
        <div>{numberWithCommas(fromWei(collection.volume.amount))}</div>
        <div className="uppercase opacity-50 text-sm">Volumn</div>
      </div>
      <div className="min-w-[150px]">
        <div>4,897.93</div>
        <div className="uppercase opacity-50 text-sm">Volumn(24H)</div>
      </div>
      <div className="min-w-[150px]">
        <div>360</div>
        <div className="uppercase opacity-50 text-sm">Sales(24H)</div>
      </div>
      <div className="min-w-[150px]">
        <div>
          {numberWithCommas(collection.owners)}{" "}
          <span className="opacity-50">(+14.89%)</span>
        </div>
        <div className="uppercase opacity-50 text-sm">Owners</div>
      </div>
      <div className="min-w-[150px]">
        <div>
          606/{numberWithCommas(collection.supply)} <span className="opacity-50">(+14.89%)</span>
        </div>
        <div className="uppercase opacity-50 text-sm">Listed/Supply</div>
      </div>
      <div className="min-w-[150px]">
        <div>2%</div>
        <div className="uppercase opacity-50 text-sm">Royality</div>
      </div>
    </div>
  );
};

export default Statusbar;

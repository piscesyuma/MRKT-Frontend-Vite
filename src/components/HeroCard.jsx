import { fromWei, numberWithCommas } from "../utils/utils";
import { useNavigate } from 'react-router-dom';

const HeroCard = ({ collection }) => {
    const navigate = useNavigate();

  return (
    <div
      className="max-w-sm w-full rounded-lg rounded-tl-none relative h-[180px] bg-center bg-cover mx-auto cursor-pointer"
      onClick={() => navigate(`/collection/${collection.contract_address}`)}
      style={{
        backgroundImage: `url(${
          collection.banner
            ? collection.banner
            : `https://static-assets.pallet.exchange/banner/${collection.name
                .replaceAll(" ", "")
                .toLowerCase()}.png`
        })`,
      }}
    >
      <div className="bg-card w-full h-full absolute top-0 left-0 rounded-lg">
        <div className="absolute bottom-3 px-3">
          <h3 className="text-2xl font-MarvinVisions tracking-widest">
            {collection.name}
          </h3>
          <p className="text-sm">
            <span className="opacity-50">Floor: </span>{" "}
            {collection.floor?.length > 0 &&
              numberWithCommas(fromWei(collection.floor[0].amount))}{" "}
            SEI <span className="text-sysSuccess">+1.77%</span>
          </p>
          <p className="text-sm">
            <span className="opacity-50">1d Vol: </span> 29,690 SEI{" "}
            <span className="text-sysSuccess">+12.56%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;

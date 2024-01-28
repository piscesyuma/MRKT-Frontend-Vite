import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Table } from "flowbite-react";
import { fromWei, numberWithCommas } from "../../utils/utils";
import { getCollections } from "../../utils/apis";

const CollectionList = () => {
  const navigate = useNavigate();

  const [collections, setCollections] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCollections = async () => {
    setLoading(true);
    const response = await getCollections({
      page: page,
      limit: 24,
      name: search,
      visible: 1,
    });

    const newItems = response.collections;
    setCollections([...collections, ...newItems]);
    setLoading(false);
  };

  useEffect(() => {
    setCollections([]);
    setPage(0);
    fetchCollections();
  }, [search]);

  return (
    <Table.Body className="">
      {collections &&
        collections.map((item, i) => {
          return (
            <Table.Row
              key={i}
              className="hover:!bg-[#ffffff10] dark:even:bg-[#ffffff05] dark:odd:bg-transparent transition cursor-pointer"
              onClick={() => navigate(`/collection/${item.contract_address}`)}
            >
              <Table.Cell className="dark:text-white"> {i + 1}</Table.Cell>
              <Table.Cell className="dark:text-white flex items-center gap-2">
                <img
                  src={item.pfp ? item.pfp : `https://static-assets.pallet.exchange/pfp/${item.name.replaceAll(" ", "").toLowerCase()}.png`}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    // currentTarget.src = "/images/broken.png"
                  }}
                  alt="nft"
                  className="w-10 rounded-lg rounded-tl-none"
                />
                <div>
                  <div>{item.name}</div>
                  <div className="opacity-50">{item._count.tokens}</div>
                </div>
              </Table.Cell>
              <Table.Cell className="dark:text-white">
                {item.floor.length > 0 && fromWei(item.floor[0].amount)} SEI
              </Table.Cell>
              <Table.Cell className="dark:text-white">2,321</Table.Cell>
              <Table.Cell className="text-sysSuccess">+12.56</Table.Cell>
              <Table.Cell className="dark:text-white">7,456</Table.Cell>
              <Table.Cell className="dark:text-white">7,456</Table.Cell>
              <Table.Cell className="dark:text-white">
                {numberWithCommas(fromWei(item.volume.amount))}
              </Table.Cell>
              <Table.Cell className="dark:text-white text-right">
                24%
                <p className="opacity-50 text-sx">2160</p>
              </Table.Cell>
            </Table.Row>
          );
        })}
    </Table.Body>
  );
};

export default CollectionList;
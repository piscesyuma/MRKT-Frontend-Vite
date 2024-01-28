import axios from 'axios';
import { API_URL } from './config';

export const getCollections = async (params) => {
  let items = [];
  try {
    // const result = await axios.get(`${API_URL}/nfts?get_tokens=false`, {
    //   params,
    // });

    const result = await axios.get(`${API_URL}/nfts?get_tokens=false`);

    if (result.data.nfts) {
      let collections = [];
      const total = result.data.nfts.total;
      const pageSize = result.data.nfts.page_size;
      const count = Math.ceil(total / pageSize);
      for (let idx = 1; idx <= count; idx++) {
        const page = result.data.nfts.pages[`${idx}`];
        collections = collections.concat(page);
      }

      items = collections;
    }

    // items = result.data;
  } catch (err) {
    console.log(err);
  }

  return {collections: items};
};

export const getCollection = async (address) => {
  let items = [];
  try {
    // const result = await axios.get(`${API_URL}/collections/${address}`);
    const result = await axios.get(`https://api.prod.pallet.exchange/api/v1/nfts/${address}?get_tokens=false`);

    items = result.data;
  } catch (err) {
    console.log(err);
  }

  return {collection: items};
};

export const getNfts = async (address, params) => {
  let items = [];
  try {
    // const result = await axios.get(`${API_URL}/nfts/${address}`, {
    //   params,
    // });

    const result = await axios.get(`${API_URL}/nfts/${address}?get_tokens=true&page=${params.page}&page_size=${params.limit}&token_id_exact=false&buy_now_only=true&min_price_only=false&not_for_sale=false&sort_by_price=asc&sort_by_id=asc`);

    items = result.data;
  } catch (err) {
    console.log(err);
  }

  return {nfts: items};
};

export const getNft = async (address, tokenId) => {
  let item = {};
  try {
    const result = await axios.get(`${API_URL}/nfts/${address}/${tokenId}`);

    item = result.data;
  } catch (err) {
    console.log(err);
  }

  return item;
};

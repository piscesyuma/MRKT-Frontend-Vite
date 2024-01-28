import axios from 'axios';
import { API_URL } from './config';

export const getCollections = async (params) => {
  let items = [];
  try {
    const result = await axios.get(`${API_URL}/collections`, {
      params,
    });

    items = result.data;
  } catch (err) {
    console.log(err);
  }

  return items;
};

export const getCollection = async (address) => {
  let items = [];
  try {
    const result = await axios.get(`${API_URL}/collections/${address}`);

    items = result.data;
  } catch (err) {
    console.log(err);
  }

  return items;
};

export const getNfts = async (address, params) => {
  let items = [];
  try {
    const result = await axios.get(`${API_URL}/nfts/${address}`, {
      params,
    });

    items = result.data;
  } catch (err) {
    console.log(err);
  }

  return items;
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

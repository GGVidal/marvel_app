import axios from 'axios';
import md5 from 'js-md5';

const BASE_URL = 'https://gateway.marvel.com';
const PUBLIC_KEY = '111525caca4b37a090485303f2c16f70';
const API_KEY = 'bf6f611ecdb0b4f563506bbf68cc2d655932a3e2';
const ts = Number(new Date());
const hash = md5.create();
hash.update(ts + API_KEY + PUBLIC_KEY);
const authorizationConfig = `ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`;

const getChar = async (queryParam) => {
  try {
    const request = await axios.get(
      `${BASE_URL}:443/v1/public/characters?${authorizationConfig}&limit=10&name=${queryParam}`,
    );
    console.tron.log(request.data.data.results);
    if (request.status === 200) {
      return request.data.data.results;
    }
  } catch (err) {
    console.log(err.message);
  }
};

const getCharComics = async (id, offset) => {
  try {
    const request = await axios.get(
      `${BASE_URL}/v1/public/characters/${id}/comics?${authorizationConfig}&offset=${offset}&limit=20`,
    );
    if (request.status === 200) {
      return request.data.data.results;
    }
    console.tron.log(request.data.data);
  } catch (err) {
    console.log(err.message)
  }
};

export {getChar, getCharComics};

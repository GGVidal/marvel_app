import axios from 'axios';
import md5 from 'js-md5';

const PUBLIC_KEY = '111525caca4b37a090485303f2c16f70';
const API_KEY = 'bf6f611ecdb0b4f563506bbf68cc2d655932a3e2';

const getChar = async (queryParam) => {
  const ts = Number(new Date());
  const hash = md5.create();
  hash.update(ts + API_KEY + PUBLIC_KEY);
  try {
    const request = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}&limit=10&name=${queryParam}`,
    );
    console.tron.log(request.data.data.results);
    if (request.status === 200) {
      return request.data.data.results;
    }
  } catch (err) {
    console.log(err.message);
  }
};

export {getChar};

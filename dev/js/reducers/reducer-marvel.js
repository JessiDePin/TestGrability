import crypto from 'crypto'
import xr from 'xr';

function md5(ts, priv, publ) {
  return crypto
    .createHash('md5')
    .update(ts + priv + publ)
    .digest('hex');
}

async function serve() {
    const date = new Date();
    const ts = date.getTime();
    const PUBLIC_KEY = 'da27f6e439c96bdc72ecd2e4b16aa596';
    const PRIV_KEY = 'a8bd690cab8bc453bbb848367db3718e9e533a82';
    const hash = md5(ts, PRIV_KEY, PUBLIC_KEY);
  return fetch(`http://gateway.marvel.com:80/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`)
}
async function serv() {
  const date = new Date();
  const ts = date.getTime();
  const PUBLIC_KEY = 'da27f6e439c96bdc72ecd2e4b16aa596';
  const PRIV_KEY = 'a8bd690cab8bc453bbb848367db3718e9e533a82';
  const hash = md5(ts, PRIV_KEY, PUBLIC_KEY);
  const res = await xr.get(`http://gateway.marvel.com:80/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`);
  logger.log(res.data);
  return res.data;
}

export default function marvel(state = [], action) {
  if (action.type === 'GET_CHARACTERS' || state === []) {
    console.log(1);
    const id = '1009718'; // wolverine
    serv()
      /*.then(res => {
        return res.text();
      })*/
      .then(blob => {
        const characters = JSON.parse(blob);
        console.log(characters)
        return state.concat(characters.data.results.items);
      });
  }
  else {
    return state;
  }
}

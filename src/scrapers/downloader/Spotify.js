import axios from "axios";

const spotify = {
   getMetadata: async (url) => {
      let { data } = await axios.post(`https://spotifydown.app/api/metadata?link=${url}`, {}, {
         headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "en-US,en;q=0.9",
            "Content-Type": "application/json",
            "Origin": "https://spotifydown.app",
            "Referer": "https://spotifydown.app/",
            "Connection": "keep-alive",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
         }
      });
      return data;
   },
   download: async (track, title, artis) => {
      let { data } = await axios.get(`https://spotifydown.app/api/download?link=${track}&n=${title}&a=${artis}`, {
         headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "en-US,en;q=0.9",
            "Content-Type": "application/json",
            "Origin": "https://spotifydown.app",
            "Referer": "https://spotifydown.app/",
            "Connection": "keep-alive",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin"
         }
      });
      return data.data;
   }
};

//Contoh Penggunaan Download Nya, Kalian Bisa Padukan Dengan Fungsi getMetadata Untuk Mengambil Artist Dan Title nya.
//Oh Iya Itu Get Metadata Nya Bisa Query Juga Untuk Search, Jadi Complete!><
spotify.download("https://open.spotify.com/track/2ROE7pfI8Monc5n13T3Tmt", "Spoil Market Siah", "Jade Superstar").then(console.log);

export default spotify;
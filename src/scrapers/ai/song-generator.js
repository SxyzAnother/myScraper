import axios from "axios";

async function verify(prompt) {
   let payload = {
      customMode: false,
      instrumental: false,
      model: "Core",
      privateFlag: false,
      prompt,
      style: "",
      title: ""
   };

   let { data } = await axios.post(`https://aimusic.erweima.ai/api/v1/suno/create`, payload, {
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json, text/plain, */*",
         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
         "Accept-Language": "en-US,en;q=0.9",
         "Origin": "https://aimusic.erweima.ai",
         "Referer": "https://aimusic.erweima.ai/",
         "Connection": "keep-alive",
         "Sec-Fetch-Site": "same-origin",
         "Sec-Fetch-Mode": "cors",
         "Sec-Fetch-Dest": "empty",
         "Uniqueid": "35b271c27e54f6d49c6fc3f034eea400",
         "Cache-Control": "no-cache",
         "Pragma": "no-cache"
      }
   });

   return data;
}

verify("A Girl In Cross").then(console.log);
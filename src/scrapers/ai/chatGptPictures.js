import axios from "axios";

const BASE_URL = "https://chat-gpt.pictures";
const GENERATE_URL = "/api/generateImage";

var payload = (text) => ({
  captionInput: text,
  captionModel: "default"
});

async function chatGptPictureCreate(prompt) {
  let d = payload(prompt);
  let { data: ss } = await axios.post(BASE_URL + GENERATE_URL, d, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      "Authorization": "Bearer YOUR_TOKEN_HERE",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache",
      "Connection": "keep-alive",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-US,en;q=0.9"
    }
  });
  return ss;
} 

// chatGptPictureCreate("A Girl In Sunset And Snow").then(console.log)

export { chatGptPictureCreate };

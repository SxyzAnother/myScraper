import axios from "axios";

const BASE_URL = "https://chat-gpt.pictures";
const GENERATE_URL = "/api/generateImage";
const LIST_MODEL = [
  "sdxl",
  "default",
  "protogen-3.4",
  "realistic-vision-v13",
  "dream-shaper-8797",
  "midjourney"
];

var payload = (text, model) => ({
  captionInput: text,
  captionModel: LIST_MODEL[model]
});

async function chatGptPictureCreate(prompt, model = 0) {
  if (!LIST_MODEL.includes(model)) throw new Error(`Model Tidak Ada! Berikut Model Yang Tersedia ${LIST_MODEL.join(" , ")}`);
  let d = payload(prompt, model);
  let { data: ss } = await axios.post(BASE_URL + GENERATE_URL, d, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache",
      "Connection": "keep-alive",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en-US,en;q=0.9"
    }
  });
  return ss;
} 

// chatGptPictureCreate("A Girl In Sunset And Snow", 0).then(console.log)

export { chatGptPictureCreate };

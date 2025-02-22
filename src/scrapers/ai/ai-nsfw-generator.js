import axios from "axios";

async function nsfwgenerator(prompt) {
  let { data: nsfw } = await axios.get(`https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${prompt}&aspect_ratio=Select Aspect Ratio&link=writecream.com`);
  let result = {
     done: true,
     linkImage: nsfw.image_link,
     base64: nsfw.base64_output
  }
  
  return result
}

// Dah, Ni Example
nsfwgenerator("A Girl In Sunset Use Bra").then(console.log);
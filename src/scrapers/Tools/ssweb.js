import axios from "axios";

async function ssweb(url, formatOutput, outputPaths) {
   let { data } = await axios.get(`https://api.pikwy.com/?tkn=125&d=3000&u=${url}&fs=0&w=1280&h=1200&s=100&z=100&f=${formatOutput}&rt=jweb`)
   return data
}

// ssweb("https://chatgpt.com", "jpg","output.jpg").then(console.log)

export default ssweb;
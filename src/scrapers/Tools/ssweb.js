import axios from "axios";

async function ssweb(options={}) {
   let { data } = await axios.get(`https://api.pikwy.com/?tkn=125&d=3000&u=${options.url}&fs=0&w=1280&h=1200&s=100&z=100&f=${options.extOutput}&rt=jweb`)
   return data
}

// ssweb({
//   url: "https://chatgpt.com",
//   extOutput: "png"
// }).then(console.log)

export default ssweb;
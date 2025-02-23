import axios from "axios"

async function laheluSearch(query) {
  let { data } = await axios.get(`https://lahelu.com/api/post/get-search?query=${query}&cursor=cursor`)
  return data.postInfos
}

// laheluSearch("Meme Terbaru").then(console.log)

export default laheluSearch;
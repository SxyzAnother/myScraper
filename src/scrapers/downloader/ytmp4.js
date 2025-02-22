import * as cheerio from "cheerio";
import axios from "axios";

async function ytVideo(url) {
  let { data } = await axios.get(`https://10downloader.com/download?v=${encodeURIComponent(url)}&lang=en&type=video`);
  let $ = cheerio.load(data);

  const videoDetails = {
    title: $(".info .title").text().trim(),
    thumbnail: $(".info img").attr("src"),
    duration: $(".info .duration").text().replace("Duration:", "").trim(),
    downloads: []
  };

  $("#video-downloads .downloadsTable tbody tr").each((i, el) => {
    const quality = $(el).find("td:nth-child(1)").text().trim();
    const format = $(el).find("td:nth-child(2)").text().trim();
    const size = $(el).find("td:nth-child(3)").text().trim();
    const link = $(el).find("td:nth-child(4) a").attr("href");

    if (link) {
      videoDetails.downloads.push({ quality, format, size, link });
    }
  });

  return videoDetails;
}

ytVideo("https://youtube.com/watch?v=B7xai5u_tnk").then(console.log)
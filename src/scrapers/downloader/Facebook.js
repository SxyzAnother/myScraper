import adios from "axios";
import BodySender from "form-data";
import * as cheerio from "cheerio";

async function fdown(url) {
   let datas = new BodySender();
   datas.append("URLz", url);
   let headers = {
      headers: {
         ...datas.getHeaders(),
         "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
         "Accept-Encoding": "gzip, deflate, br",
         "Accept-Language": "en-US,en;q=0.9",
         "Cache-Control": "no-cache",
         "Connection": "keep-alive",
         "Host": "fdown.net",
         "Origin": "https://fdown.net",
         "Pragma": "no-cache",
         "Referer": "https://fdown.net/",
         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
   };

   let { data: postt } = await adios.post("https://fdown.net/download.php", datas, headers);
   let $ = cheerio.load(postt);

   let image = $(".lib-img-show").attr("src") || "No image";
   let title = $(".lib-header").text().trim() || "No title";
   let caption = $(".lib-desc").first().text().replace("Description:", "").trim() || "No description";
   let duration = $(".lib-desc").eq(1).text().replace("Duration:", "").trim() || "No duration";
   let sdLink = $("#sdlink").attr("href") || "No SD link";
   let hdLink = $("#hdlink").attr("href") || "No HD link";

   return {
      title,
      caption,
      duration,
      image,
      sdLink,
      hdLink
   };
}

fdown("https://www.facebook.com/watch?v=272591278381388").then(console.log);@
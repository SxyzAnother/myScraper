import axios from "axios";
import * as cheerio from "cheerio";

async function getToday() {
   try {
      let { data } = await axios.get(`https://www.medicalnewstoday.com/`);
      let $ = cheerio.load(data);

      let links = [];

      $('a.css-90fpmc').each((index, element) => {
         let title = $(element).text().trim();
         let url = $(element).attr('href');

         if (url && url.startsWith('http')) {
            links.push({ title, url });
         }
      });

      return links;
   } catch (error) {
      console.error("Error fetching data:", error.message);
   }
}

// getToday().then(console.log)

export default getToday;
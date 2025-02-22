import axios from "axios";

const mlstalk = async (userId, zoneId) => {
   let { data } = await axios.get(`https://regionml.checkify.my.id/api/mlbb?id=${userId}&zone=${zoneId}`)
   return data.data
}

// mlstalk(696964467, 8770).then(console.log)

export default mlstalk;
const axios = require('axios');

export async function get(req, res) {
	// console.log('req', req)

	let data = await axios.get('http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=20251', {
	    headers: {
	      "Content-type": "application/json",
	      "charset": "UTF-8",
	      "AccountKey": process.env.DATAMALL_API_TOKEN
	    }
	 }).then(r => r.data)

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(data))
}
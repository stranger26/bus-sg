const axios = require('axios');

export async function get(req, res) {
	const { busno } = req.params;

	let data = await axios.get('http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode='+busno/*'https://run.mocky.io/v3/ee7cafbc-4b86-42ec-84f5-8ecf7686a486'*/, {
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
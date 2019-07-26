var request = require("request");

var options = { method: 'GET',
  url: 'https://apis.mapmyindia.com/advancedmaps/v1/eu6cdm91s5esnya7jm75kyhgzpj5gfb6/distance_matrix/driving/77.983936,28.255904;77.05993,28.487555;77.15993,28.587555',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'accept-encoding': 'gzip, deflate',
     Host: 'apis.mapmyindia.com',
     'Postman-Token': '7a6d25ed-e612-414e-bcfe-6d91ac3a19b4,90c61aa0-dba4-43b6-81da-00cc81707640',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.13.0' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

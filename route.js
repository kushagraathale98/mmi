var request = require("request");

var options = { method: 'GET',
  url: 'http://apis.mapmyindia.com/advancedmaps/v1/eu6cdm91s5esnya7jm75kyhgzpj5gfb6/geo_code',
  qs: { addr: 'saket' },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     referer: 'http://apis.mapmyindia.com/advancedmaps/v1/eu6cdm91s5esnya7jm75kyhgzpj5gfb6/geo_code?addr=saket',
     'accept-encoding': 'gzip, deflate',
     'Postman-Token': '40959637-8ae9-4009-a7f1-b46d6ea99cd0,4366e4ac-054c-48c5-840f-3502e98b6bc4',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.13.0' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

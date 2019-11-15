const querystring = require('querystring');
const https = require("https");
const url = require("url");

exports.handler = function(event, context, callback){
  let body = event.body;
  let bodyObj = querystring.parse(body);
  let responseUrl = bodyObj.response_url;
  let response = {
    "response_type": "in_channel",
    "text": bodyObj.text,
  };
  response = JSON.stringify(response);
  
  const options = url.parse(responseUrl);

  https.request({
    method: "POST",
    statusCode: 200,
    headers: {
      "Content-type": "application/json",
    },
    hostname: options.hostname,
    path: options.pathname,
    port: options.port,
    body: response,
  });

  callback(null, {
    statusCode: 200,
    body: "shame sent",
  });
};

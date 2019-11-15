const querystring = require('querystring');
const https = require("https");

exports.handler = function(event, context, callback){
  let body = event.body;
  let bodyObj = querystring.parse(body);
  let responseUrl = bodyObj.response_url;
  let response = {
    "response_type": "in_channel",
    "text": bodyObj.text,
  };
  response = JSON.stringify(response);

  https.request({
    method: "POST",
    statusCode: 200,
    headers: {
      "Content-type": "application/json",
    },
    hostname: responseUrl,
    body: response,
  });

  callback(null, {
    statusCode: 200,
    body: "shame sent",
  });
};

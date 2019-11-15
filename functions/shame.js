const querystring = require('querystring');
const fetch = require("node-fetch");

exports.handler = function(event, context, callback){
  let body = event.body;
  let bodyObj = querystring.parse(body);
  let responseUrl = bodyObj.response_url;
  let response = {
      "response_type": "in_channel",
      "text": bodyObj.text,
  };
  response = JSON.stringify(response);

  fetch(responseUrl, {
    method: "post",
    statusCode: 200,
    headers: {
        "Content-type": "application/json",
    },
    body: response,
  });
  
  callback(null, {
    statusCode: 200,
    body: "shame sent".
  });
};

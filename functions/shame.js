let querystring = require('querystring');

exports.handler = function(event, context, callback){
  let body = event.body;
  let bodyObj = querystring.parse(body);
  let response = {
      "response_type": "in_channel",
      "text": bodyObj.text,
  };
  response = JSON.stringify(response);

  callback(null, {
    statusCode: 200,
    body: response
  });
};

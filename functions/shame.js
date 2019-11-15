const querystring = require('querystring');

exports.handler = function(event, context, callback){
  let body = event.body;
  let bodyObj = querystring.parse(body);
  let responseUrl = bodyObj.response_url;
  responseUrl = responseUrl.replace('http://','');
  let response = {
    "response_type": "in_channel",
    "text": bodyObj.text,
  };
  response = JSON.stringify(response);

  let xhr = new XMLHttpRequest();
  xhr.open("POST", responseUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.send(response);

  callback(null, {
    statusCode: 200,
    body: "shame sent",
  });
};

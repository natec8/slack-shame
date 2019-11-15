let querystring = require('querystring');

exports.handler = function(event, context, callback){
  let body = event.body;
  let bodyObj = querystring.parse(body);
  console.log(bodyObj);

  callback(null, {
    statusCode: 200,
    body: bodyObj.text
  });
};

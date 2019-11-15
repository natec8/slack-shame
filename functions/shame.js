exports.handler = function(event, context, callback){
  let jsonString = event.body;
  console.log(event.body);
  let jsonObj = JSON.parse(jsonString);
  callback(null, {
    statusCode: 200,
    body: jsonObj.text
  });
};

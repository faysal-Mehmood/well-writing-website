
const fetch = require("node-fetch");
exports.handler = async (event, context, callback) => {
    try {
       

       
fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: event.queryStringParameters.name,
  	email:  event.queryStringParameters.email
  }),
})
.then(response => response.json())
.then(data => {
  return { statusCode: 200, body: data.toString() };
})
.catch((error) => {
  return { statusCode: 200, body: error.toString() };
});

    } catch (err) {
        [];
        return { statusCode: 500, body: err.toString() };
    }
};




// const axios = require('axios');


// exports.handler = async (event, context, callback) => {

    
// return axios.post('https://api.mailerlite.com/api/v2/subscribers ', {
// 	name: event.queryStringParameters.name,
// 	email:  event.queryStringParameters.email
// }, {
// 	headers: { 'Content-Type': 'application/json',
// 	 'X-MailerLite-ApiKey': 'f9a1877a3fba02469e3206a52c239f1f',
// 	 'Content-Type': 'application/json;charset=UTF-8',
// 	 "Access-Control-Allow-Origin": "*",
// }
//  })
//    .then(function (response) {
//     callback(, { statusCode: 200, body: JSON.stringify({ response }) });
//    })
   
    

// };


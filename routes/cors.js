const cors = require("cors"); //middleware

const whitelist = ["http://localhost:3000", "https://localhost:3443"];
const corsOptionsDelegate = (req, callback) => {
   let corsOptions;
   console.log(req.header("Origin"));
   if (whitelist.indexOf(req.header("Origin")) !== -1) {
      //-1 means the item not found
      corsOptions = { origin: true };
      //If origins is found in the whitelist, we allow this to be accepted
   } else {
      corsOptions = { origin: false };
   }
   callback(null, corsOptions); //if no error, give corsOption
};

exports.cors = cors();
//This will call middlewere function CORS. Will allow CORS for all origins.
exports.corsWithOptions = cors(corsOptionsDelegate);
//CORS with options: this will call CORS middleware function again and give  corsOptionsDelegate function. It will check to see if the incoming request belogs to one of the whitelisted origins localhost:3000 or localhost:3443. If it does, it will send back to CORS reponse header of access control allow origin. This time with the whitelisted origin as the value. If it doesn't, it won't include the course header in the response at all.

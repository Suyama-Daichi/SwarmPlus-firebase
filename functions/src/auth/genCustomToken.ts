import * as functions from "firebase-functions";

exports.genCustomToken = functions.https.onRequest((request, response) => {
  console.log("called");
});

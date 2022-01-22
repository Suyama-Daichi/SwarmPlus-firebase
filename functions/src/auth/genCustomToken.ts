import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

exports.genCustomToken = functions.https.onCall(async (request, response) => {
  const uid = "some-uid";
  const customToken = await admin
    .auth()
    .createCustomToken(uid)
    .catch((error) => {
      console.log("Error creating custom token:", error);
    });

  return { customToken };
});

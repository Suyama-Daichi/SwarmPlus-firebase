import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

exports.genCustomToken = functions.https.onCall(async (data) => {
  const uid = data.uid;
  const customToken = await admin
    .auth()
    .createCustomToken(uid)
    .catch((error) => {
      console.log("Error creating custom token:", error);
    });

  return { customToken };
});

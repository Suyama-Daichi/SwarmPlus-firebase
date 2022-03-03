import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

exports.genCustomToken = functions.https.onCall(async (data) => {
  const uid = data.uid;
  const accessToken = data.accessToken;
  console.log({ data });

  const auth = admin.auth();
  const customToken = await auth
    .createCustomToken(uid, { accessToken: accessToken || "undefined" })
    .catch((error) => {
      console.log("Error creating custom token:", error);
    });

  return { customToken };
});

// exports.setCustomUserClaims = functions.https.onCall(async (data) => {
//   const uid = data.uid;
//   const accessToken = data.accessToken;
//   const auth = admin.auth();

//   console.log({ data });

//   // claimのセット
//   await auth
//     .setCustomUserClaims(uid, { accessToken: accessToken })
//     .catch((error) => {
//       console.log("Error set claims:", error);
//     });
// });

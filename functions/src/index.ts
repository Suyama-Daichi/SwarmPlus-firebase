import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp();
}
exports.auth = require("./auth/auth");

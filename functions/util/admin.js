const admin = require('firebase-admin');
var serviceAccount = require("./socialapp-51c8949f1f23.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://socialapp-59054.firebaseio.com"
});
const db = admin.firestore();
const dbstore = admin.storage();
module.exports = {admin, db, dbstore};

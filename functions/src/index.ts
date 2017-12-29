import * as functions from 'firebase-functions';
import { purescript } from './lib.purs';

// Start writing Firebase Functions
// https://firebase.google.com/functions/write-firebase-functions

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from " + purescript + "!");
});

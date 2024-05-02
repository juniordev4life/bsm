/** @type {import('./$types').LayoutLoad} */

import { initializeFirebase, auth, db } from '../lib/firebase.client';
import { browser } from '$app/environment';
import { onAuthStateChanged } from 'firebase/auth';

export async function load({ url }) {
  if (browser) {
    try {
      initializeFirebase();
    } catch (ex) {
    console.error(ex);
    }
  }

  function getAuthUser() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => resolve(user || false));
    });
  }

 return {
  getAuthUser: getAuthUser,
  url: url.pathname
 };
}
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
import store from './store'

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default {
  ////////// いつものやつ
  init() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  ////////// ログイン情報保持用
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      store.commit('isUser', user);
      store.commit('isUserSignInStatus', user.uid ? true : false);
    });
  },
  ////////// サインアウトアウト
  signOut() {
    firebase.auth().signOut()
  },
  ////////// サインイン
  // メール
  signInMail(mail, pass) {
    firebase
    .auth()
    .signInWithEmailAndPassword(mail, pass)
    .then((user) => {
        store.commit('isUser', user)
    })
    .catch((error) => {
        // 失敗したときの処理
        store.commit('isUser', error)
    });
  },
  // google
  signInGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  },
  ////////// 
}

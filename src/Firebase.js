import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'

import firebase from 'firebase/app';
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
  ////////// 読み込んだときの処理
  // ログイン情報保持用
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      store.commit('isUser', user);
      store.commit('isUserSignInStatus', user.uid ? true : false);
    });
  },
  // データベースから情報取得
  showList() {
    firebase.auth().onAuthStateChanged(user => {

      firebase.database().ref(user.uid).on('value', function(snapshot) {
        store.commit('isListItems', snapshot.val())
      })
    })
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
    })
  },
  // google
  signInGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  },
  ////////// サインアップ
  // メール
  signUpMail(mail, pass) {
    firebase
    .auth()
    .createUserWithEmailAndPassword(mail, pass)
    .then(() => {
        console.log('ユーザ作成に成功');
    })
    .catch((error) => {
        console.error('ユーザ作成に失敗:', error);
    })
  },
  ////////// 買い物リスト追加
  setErandList(dataId, dataDisc) {
    let roomId = dataId

    firebase
    .database()
    .ref(roomId)
    .push(dataDisc);
  }
}

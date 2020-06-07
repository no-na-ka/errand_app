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
      store.dispatch('onUser', user);
    });
  },
  onShareId() {
    firebase.database().ref(store.state.user.uid).on('value', function(snapshot) {
      console.log(2)
      console.log(store.state.user.uid)
      let userId = store.state.user.uid
      let shareIdValue = snapshot.val()[userId].shareId
      console.log(snapshot.val()[userId].shareId)

      store.dispatch('onShareId', shareIdValue)
    })
  },
  // データベースから情報取得
  onShowList() {
    firebase.database().ref(store.state.user.uid).on('value', function(snapshot) {
      let userId = store.state.user.uid
      let shareIdValue = snapshot.val()[userId].shareId      
      let listId

      if ( userId == shareIdValue ) {
        listId = userId
      } else {
        listId = shareIdValue
      }

      let listItems = snapshot.val()[listId]
      delete listItems.shareId

      store.dispatch('onListItems', listItems)
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
      store.dispatch('onUser', user);
      this.onShareId()
      this.onShowList()

      store.dispatch('onRegisterFlg', false)
    })
    .catch((error) => {
        // 失敗したときの処理
        console.log(error)
        store.dispatch('onUser', '')
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
    .then((user) => {
      store.dispatch('onUser', user);

      let temporaryId = user.user.uid

      this.setShareId(temporaryId, temporaryId)
      store.dispatch('onRegisterFlg', false)
    })
    .catch((error) => {
        // 失敗したときの処理
        console.log(error)
        store.dispatch('onUser', '')
    })
  },


  ////////// 買い物リスト追加
  setErandList(dataId, dataDisc) {
    let roomId = dataId

    firebase
    .database()
    .ref(roomId)
    .push(dataDisc);
  },


  ////////// 共有ID追加
  setShareId(e, f) {
    const path = f + '/shareId'
    firebase
    .database()
    .ref(path)
    .set(e)

    store.dispatch('onShareId', e)

  }
}

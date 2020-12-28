import { LoginService, Collections } from "configs/enums";
import { firebase } from "configs/firebase";
import Toast from "react-native-root-toast";

export const loginAccount = ({ email, password }) => {
  // Firebase getting account from accounts collection
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      const { uid }= response.user;
      const accountsDB = firebase.firestore().collection(Collections.ACCOUNTS);
      accountsDB
        .doc(uid)
        .get()
        .then((firestoreDocument) => {
          if (!firestoreDocument.exists) {
            Toast.show(LoginService.ERROR);
            return;
          }
          const account = firestoreDocument.data();
          // TODO SAVE AT STORE
          Toast.show(LoginService.SUCCESS);
        })
        .catch(() => Toast.show(LoginService.ERROR));
    })
    .catch(() => Toast.show(LoginService.ERROR));
};

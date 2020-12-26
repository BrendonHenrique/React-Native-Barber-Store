import { RegisterService, Collections } from "configs/enums";
import { firebase } from "configs/firebase";
import Toast from "react-native-root-toast";

export const registerAccount = ({ nome, email, password }) => {
  // Firebase Creating User
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const { uid: id } = response.user;
      const data = {
        id,
        email,
        nome,
      };

      // Then storing the user at firestore
      const accountsDB = firebase.firestore().collection(Collections.ACCOUNTS);
      accountsDB
        .doc(id)
        .set(data)
        .then(() => Toast.show(RegisterService.SUCCESS))
        .catch(() => Toast.show(RegisterService.ERROR));
    })
    .catch(() => Toast.show(RegisterService.ERROR));
};

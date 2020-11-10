import { LoginRequest, CreateUserRequest } from "./Api";
import {
  storeUserData,
  removeUserData,
  userDataInStorage,
  getUserDetail,
} from "./utils/auth";

class User {
  login(email, password, successCallback, failedCallBack) {
    const credentials = {
      email,
      password,
    };

    const logUserIn = async () => {
      const user = await LoginRequest(credentials);
      //   return user.data;
      if (user.status === "success") {
        const userData = user.data;

        const userDetail = {
          email: userData.email,
          name: userData.firstName,
          userId: userData.id,
          phoneNumber: userData.phoneNumber,
        };

        storeUserData(userDetail);
        successCallback();
      } else {
        failedCallBack(user.message);
      }
    };
    logUserIn();
  }

  logout() {
    removeUserData();
  }

  isAuthenticated() {
    if (userDataInStorage()) return true;
    return false;
  }

  details() {
    return getUserDetail();
  }

  signup(
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    address,
    successCallback,
    failedCallBack
  ) {
    const credentials = {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
    };
    const createUser = async () => {
      const newUSer = await CreateUserRequest(credentials);
      if (newUSer.status === "success") {
        console.log("pass", newUSer);
        this.login(email, password, successCallback);
      } else {
        console.log("fail", newUSer);
        failedCallBack();
      }
    };
    createUser();
  }
}

export default new User();

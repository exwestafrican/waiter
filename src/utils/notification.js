import { store } from "react-notifications-component";

export const handleNotification = (title, message, type = "danger") => {
  store.addNotification({
    title: title,
    message: message,
    type: type,
    container: "top-right",
    insert: "top",
    animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};

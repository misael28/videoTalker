import store from "../../store/store";

import { setLocalStream } from "../../store/actions/callActions";

const defaultConstraints = {
  audio: true,
  video: true,
};

export const getLocalStream = () => {
  navigator.mediaDevices
    .getUserMedia(defaultConstraints)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
    })
    .catch((err) => {
      console.log("Error when trying to get access");
      console.log(err);
    });
};

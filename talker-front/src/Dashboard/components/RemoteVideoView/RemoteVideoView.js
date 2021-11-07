import React, { useRef, useEffect } from "react";
const styles = {
  videoContainer: {
    width: "100%",
    height: "100%",
  },
  videoElemet: {
    width: "100%",
    height: "100%",
  },
};

const RemoteVideoView = (props) => {
  const { remoteStream } = props;
  const remoteVideoRef = useRef();

  useEffect(() => {
    const remoteVideo = remoteVideoRef.current;
    remoteVideo.srcObject = remoteStream;

    remoteVideo.onloadedmetadata = (e) => {
      remoteVideo.play();
    };
  }, [remoteStream]);

  return (
    <div style={styles.videoContainer}>
      <video style={styles.videoElemet} ref={remoteVideoRef} autoPlay></video>
    </div>
  );
};

export default RemoteVideoView;

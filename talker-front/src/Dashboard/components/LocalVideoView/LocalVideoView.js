import React, { useRef, useEffect } from "react";
const styles = {
  videoContainer: {
    width: "150px",
    height: "150px",
    borderRadius: "8px%",
    position: "absolute",
    top: "5px",
    right: "23%",
  },
  videoElemet: {
    width: "100%",
    height: "100%",
  },
};

const LocalVideoView = (props) => {
  const { localStream } = props;
  const localVideoRef = useRef();

  useEffect(() => {
    const localVideo = localVideoRef.current;
    localVideo.srcObject = localStream;

    localVideo.onloadedmetadata = (e) => {
      localVideo.play();
    };
  }, [localStream]);

  return (
    <div style={styles.videoContainer} className="background_secondary_color">
      <video
        style={styles.videoElemet}
        ref={localVideoRef}
        autoPlay
        muted
      ></video>
    </div>
  );
};

export default LocalVideoView;

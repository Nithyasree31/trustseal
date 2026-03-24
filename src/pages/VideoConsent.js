import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function VideoConsent() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function startCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      } catch (err) {
        alert("Camera permission denied!");
        console.error(err);
      }
    }

    startCamera();
  }, []);

  const handleSubmit = () => {
    navigate("/result");
  };

  return (
    <div className="page">
      <div className="container">
        <h2>Video Consent</h2>

        <video
          ref={videoRef}
          autoPlay
          muted
          style={{ width: "100%", borderRadius: "8px" }}
        />

        <button style={{ marginTop: "15px" }} onClick={handleSubmit}>
          Submit Video
        </button>
      </div>
    </div>
  );
}

export default VideoConsent;
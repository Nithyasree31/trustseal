from deepface import DeepFace
import os
from process_video import extract_frames
from flask import Flask, request, jsonify

app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 100 * 1024 * 1024  # 100 MB

NEGATIVE_EMOTIONS = ["sad", "fear", "angry"]

def analyze_emotions(frame_folder="frames"):
    emotions = []

    for img in os.listdir(frame_folder):
        img_path = os.path.join(frame_folder, img)
        try:
            result = DeepFace.analyze(
                img_path=img_path,
                actions=["emotion"],
                enforce_detection=False
            )
            emotions.append(result[0]["dominant_emotion"])
        except:
            pass

    return emotions

def consent_decision(emotions):
    for e in emotions:
        if e in NEGATIVE_EMOTIONS:
            return "FLAGGED"
    return "ACCEPTED"

@app.route("/analyze", methods=["POST"])
def analyze_video():
    video = request.files["video"]
    video_path = "consent_video.mp4"
    video.save(video_path)

    extract_frames(video_path)
    emotions = analyze_emotions()
    decision = consent_decision(emotions)

    return jsonify({
        "emotions_detected": emotions,
        "final_decision": decision
    })

if __name__ == "__main__":
    app.run(port=5000)

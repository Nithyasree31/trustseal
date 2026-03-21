import cv2
import os

def extract_frames(video_path, output_folder="frames"):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    cap = cv2.VideoCapture(video_path)
    fps = int(cap.get(cv2.CAP_PROP_FPS))

    count = 0
    frame_id = 0

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        if count % fps == 0:  # 1 frame per second
            frame_name = f"{output_folder}/frame_{frame_id}.jpg"
            cv2.imwrite(frame_name, frame)
            frame_id += 1

        count += 1

    cap.release()
    return frame_id

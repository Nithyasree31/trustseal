CREATE DATABASE trustseal;
USE trustseal;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE consent_videos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  video_path VARCHAR(255),
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

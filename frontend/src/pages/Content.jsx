import React from 'react';
import '../styles/Content.css'; // Import the CSS file

const videos = [
  {
    id: 1,
    title: "Exploring the Maldives",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Maldives", 
    videoUrl: "https://drive.google.com/file/d/1ZlG4eBLIyl-cg-GZqHCI-VByvqisjZ5D/preview", 
  },
  {
    id: 2,
    title: "A Journey Through Paris",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Paris", 
    videoUrl: "https://www.youtube.com/embed/your_video_id_2", 
  },
  {
    id: 3,
    title: "Discovering Goa",
    thumbnail: "https://via.placeholder.com/320x180.png?text=Goa", 
    videoUrl: "https://www.youtube.com/embed/your_video_id_3", 
  },
  // Add more videos as needed
];

const Content = () => {
  return (
    <div className="content-container">
      <h2>Tourism Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="video-frame"
              allowFullScreen
            ></iframe>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;

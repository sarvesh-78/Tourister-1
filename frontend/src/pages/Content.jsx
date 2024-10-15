import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {Container} from 'reactstrap';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Content.css'; // Ensure to import your CSS

const videos = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/XhCkptbe7Z4",
    title: "Exploring the Maldives" // Add titles for each video
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/EEeu7-xJX_c?si=MMYkZoL5l4VVCS5i",
    title: "A Day in Paris"
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/dzTQhGtucZc?si=z81DkX7TPLKzj-uQ",
    title: "Goa Beach Adventures"
  },
];

const videos1 = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/zD43hknPtLc",
    title: "India - Welcome to Kerala" // Add titles for each video
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/yeukgKerfqM?si=XadcFZt0EEPutg4-",
    title: "Travel to Brazil"
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/BFS9n4B_2xA?si=ZYiwPuGSJdN8sHk6",
    title: "Bali - Paradise of Asia "
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/0NMIZ-PTt8k?si=1FJlV68ZKpO0itgp",
    title: "Hidden Gem - New Zealand"
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/embed/G5RpJwCJDqc?si=yKV6BRLnH73a7xmT",
    title: "Japan - Land of The Rising Sun"
  },

  
];

const videos2 = [
  {
    id: 1,
    videoUrl: "https://player.vimeo.com/video/162413069?badge=0&autopause=0&player_id=0&app_id=58479",
    title: "Discover the Wonders of Bangkok" // Add titles for each video
  },
  {
    id: 2,
    videoUrl: "https://player.vimeo.com/video/104565767",
    title: "Summer in Japan"
  },
  {
    id: 3,
    videoUrl: "https://player.vimeo.com/video/227525492",
    title: "Discovering the Heart of Spain"
  },
  {
    id: 4,
    videoUrl: "https://player.vimeo.com/video/256929287",
    title: "God's Own Country - Kerala"
  },
  
  
];

const Content = () => {
  const handleSlideChange = (swiper) => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.pause(); // Pause all videos first
    });

    const activeSlideVideo = swiper.slides[swiper.activeIndex].querySelector('video');
    if (activeSlideVideo) {
      activeSlideVideo.play(); // Play the active slide's video
    }
  };

  return (
    <div className="content-wrapper"> {/* Added a wrapping div */}
      <div className='vidcontent'>
        <video autoPlay muted loop className="back-video">
          <source src={require('../assets/images/skyvideo.mp4')} type="video/mp4" />
        </video>
        <h1 className='text-center text-light'>TRAVEL CONTENT</h1>
        <h2 className='text-center text-light'>FIND YOUR NEXT DESTINATION</h2>
      </div>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation]}
          navigation
          loop={false}
          onSlideChange={handleSlideChange}
          className="swiper-wrapper"
          style={{ width: '100%', height: '100vh', maxWidth: '940px', margin: '0 auto' }}
        >

          {videos.map((video) => (
            <SwiperSlide key={video.id} className="swiper-slide">
              {video.videoUrl.includes("youtube.com") ? (
                <div className="video-wrapper">
                  <iframe
                    src={video.videoUrl}
                    title={`Video ${video.id}`}
                    className="youtube-embed"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <video
                  src={video.videoUrl}
                  muted
                  preload="none" // Ensures no preview is loaded
                  style={{ width: '100%', height: '100%' }}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <section>
        <Container>
          <h2 className='text-warning pb-3 px-3'>Cinematic Videos</h2>
          <div className="video-cards-container">
            {videos1.map(video => (
              <div key={video.id} className="video-card">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  className="video-card-embed"
                  allowFullScreen
                ></iframe>
                <h3 className="video-title">{video.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <h2 className='text-warning pb-3 px-3'>Travel Vlogs</h2>
          <div className="video-cards-container2">
            {videos2.map(video => (
              <div key={video.id} className="video-card2">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  className="video-card-embed"
                  allowFullScreen
                ></iframe>
                <h3 className="video-title">{video.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Content;


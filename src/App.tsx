import "./App.css";

function App() {
  return (
    <>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/MwCFubHwm6A?rel=0&si=Z9E35ygV1hW2H-YB&controls=0&autoplay=1&mute=1&playsinline=1&playlist=MwCFubHwm6A&loop=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* <iframe src="https://www.youtube.com/embed/MwCFubHwm6A?&autoplay=1&mute=1&playsinline=1&playlist=MwCFubHwm6A&loop=1"></iframe> */}
      </div>
    </>
  );
}

export default App;

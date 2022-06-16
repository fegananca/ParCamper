import mainVideo from '../Pages/images/pexels-pavel-danilyuk-9121392.mp4';
import ButtonSearch from './ButtonSearch';

const MainPage = () => {
  return (
    <div className="wrapper">
      <video autoPlay muted loop id="myVideo">
        <source src={mainVideo} type="video/mp4" />
      </video>
      <ButtonSearch></ButtonSearch>
      <div className="logo-header">
        <h1 id="name">PARCAMPER</h1>
      </div>
    </div>
  );
};

export default MainPage;

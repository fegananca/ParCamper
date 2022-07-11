import homeVideo from '../media/pexels-pavel-danilyuk-9121392.mp4';
import ButtonSearch from '../components/ButtonSearch';

const homePage = () => {
  return (
    <div className="wrapper">
      <video autoPlay muted loop id="myVideo">
        <source src={homeVideo} type="video/mp4" />
      </video>
      <h1 id="name">PARCAMPER</h1>
      <ButtonSearch></ButtonSearch>
    </div>
  );
};

export default homePage;

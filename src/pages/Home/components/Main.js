import Banner from "./Banner";
import BoxContainer1 from "./BoxContainer1";
import Button from "./Button";
import BoxContainer2 from "./BoxContainer2";

const Main = ({showBox, setShowBox}) => {
  return (
    <div>
      <Banner />
      <div className="title">
        <h2>
          <b>Section Title</b>
        </h2>
      </div>
      <BoxContainer1 />
      <Button setShowBox={setShowBox} />
      <BoxContainer2 showBox={showBox} />
    </div>
  );
};

export default Main;

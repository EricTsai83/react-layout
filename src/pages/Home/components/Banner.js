import {useState} from "react";
const Banner = () => {
  const [bannerContent, setBannerContent] = useState("Welcome Message");

  return (
    <div
      className="banner"
      onClick={() => {
        setBannerContent("Have a Good Time!");
      }}>
      <h1 className="headline">{bannerContent}</h1>
    </div>
  );
};

export default Banner;

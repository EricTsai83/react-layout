const BoxContainer2 = ({showBoxAttr}) => {
  let displayAttr;
  if (showBoxAttr === true) {
    displayAttr = "flex";
  } else {
    displayAttr = "none";
  }

  return (
    <div className="box-container-2" style={{display: displayAttr}}>
      <div className="box5">Content Box 5</div>
      <div className="box6">Content Box 6</div>
      <div className="box7">Content Box 7</div>
      <div className="box8">Content Box 8</div>
    </div>
  );
};

export default BoxContainer2;

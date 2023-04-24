const Button = ({showBoxStatus}) => {
  const handleClick = () => {
    showBoxStatus(function (prev) {
      return !prev;
    });
  };

  return (
    <div className="button-container">
      <button onClick={handleClick} className="submit-button" type="button">
        Call to Action
      </button>
    </div>
  );
};

export default Button;

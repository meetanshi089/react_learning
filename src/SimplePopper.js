import "./SimplePopper.css";
const SimplePopper = ({
  showPopup,
  data = "Nothing set",
  directions = { top: "10", bottom: "100", left: "10", right: "100" },
}) => {
  const { top, bottom, left, right } = directions;

  return (
    showPopup && (
      <div
        className="pop-up-container"
        style={{
          "margin-top": `${top}px`,
          "margin-bottom": `${bottom}vh`,
          "margin-left": `${left}px`,
          "margin-right": `${right}vh`,
        }}
      >
        <div className="pop-up">{data}</div>
      </div>
    )
  );
};
export default SimplePopper;

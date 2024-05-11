import { buttons } from "../Assent/Data";
import "./Buttons.css";

const Buttons = (props) => {
  return (
    <div className="buttons">
      {buttons.map((el) => {
        return (
          <button
            key={el.id}
            style={{ color: props.color, border: `1px solid ${props.border}` }}
          >
            {el.title}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;

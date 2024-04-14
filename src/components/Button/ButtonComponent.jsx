import "./ButtonComponent.css";

const ButtonComponent = (props) => {
  return (
    <button onClick={props.onClickFunc} className="button-component">
      {props.text}
    </button>
  );
};

export default ButtonComponent;

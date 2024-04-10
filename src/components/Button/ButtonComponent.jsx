import './ButtonComponent.css'

const ButtonComponent = (props) => {

    let startGenerate = () => {
        alert('Huy')
    }

    return(
        <button onClick={ startGenerate } className="button-component">
            {props.text}
        </button>
    );
};

export default ButtonComponent;
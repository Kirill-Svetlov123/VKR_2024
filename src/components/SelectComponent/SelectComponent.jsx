import s from './SelectComponent.module.css'

const SelectComponent = (props) => {

    console.log("piska")
    console.log(props.description)

    return(
        <div className={s.select_component}>
            <div className={s.select_description}>
                {props.description}
            </div>
            <select name="name" id="id" className={s.select_element}>

            </select>
        </div>
    );
};

export default SelectComponent;
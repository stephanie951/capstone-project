import "./form-input.styles.scss";

const FormInputs = ({ label, inputOption }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputOption} />
      {label && (
        <label
          className={`${
            inputOption.value.length? "shrink" : null
           } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInputs;

import React from "react";
import useForm from "./useFrom";
import validate from "./formValidation";
import { useSite } from "../../context/SiteContext";
import "../form/formStyle.scss";

const Form = () => {
  const { data } = useSite();
  const { valueData, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    console.log("No errors, submit callback called!");
  }

  return (
    <div className="form">
      <div className="container">
        <div className="form-box">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-box-field">
              <div className="control">
                <input
                  autoComplete="off"
                  className="form-box-field-input"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={valueData.name || ""}
                  required
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="form-erorr">{errors.name}</p>
                )}
              </div>
            </div>
            <div className="form-box-field">
              <div className="control">
                <input
                  className="form-box-field-input"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={valueData.email || ""}
                  required
                  placeholder="Email"
                />
              </div>
              {errors.email && <p className="form-erorr">{errors.email}</p>}
            </div>

            <div className="form-box-field">
              <div className="control">
                <select
                  value={valueData.fontName || ""}
                  name="fontName"
                  onChange={handleChange}
                  size="1"
                  required
                  className="form-box-field-input"
                >
                  <option hidden value="default">
                    Select Font
                  </option>
                  {data?.map((item) => {
                    return (
                      <option key={item.family} value={item.family}>
                        {item.family}
                      </option>
                    );
                  })}
                </select>
              </div>
              {errors.fontName && <p className="form-erorr">{errors.fontName}</p>}
            </div>

            <button type="submit" className="form-box-field-submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

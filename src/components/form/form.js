import React from "react";
import useForm from "./useFrom";
import validate from "./formValidation";
import { useSite } from "../../context/SiteContext";

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
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={valueData.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Your name</label>
                <div className="control">
                  <input
                    className={`input ${errors.name && "is-danger"}`}
                    type="name"
                    name="name"
                    onChange={handleChange}
                    value={valueData.name || ""}
                    required
                  />
                </div>
                {errors.name && <p className="help is-danger">{errors.name}</p>}
              </div>

              <div className="field">
                <label className="label">Your name</label>
                <div className="control">
                  <select value="value-2">
                    {data?.map((item) => {
                      return (
                        <option key={item.family} value={item.family}>
                          {item.family}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {errors.name && <p className="help is-danger">{errors.name}</p>}
              </div>

              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

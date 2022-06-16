import { useEffect } from "react";
import { useSite } from "../../context/SiteContext";

const useForm = (callback, validate) => {
  const {
    valueData,
    setValueData,
    errors,
    setErrors,
    isSubmitting,
    setIsSubmitting,
  } = useSite();
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(valueData));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValueData((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    valueData,
    errors,
  };
};

export default useForm;

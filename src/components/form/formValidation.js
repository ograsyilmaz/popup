export default function validate(values) {
  let errors = { count: 0 };
  if (!values.email) {
    errors.email = "Email address is required";
    errors.count++;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
    errors.count++;
  }
  if (!values.name) {
    errors.name = "Name is required";
    errors.count++;
  }
  if (!values.fontName) {
    errors.fontName = "Font is required";
    errors.count++;
  }
 
  return errors;
}

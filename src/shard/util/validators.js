const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_FILE = 'FILE';
const VALIDATOR_TYPE_LOWER='LOWER';
const VALIDATOR_TYPE_CAPITAL='CAPITAL';
const VALIDATOR_TYPE_NUMBER='NUMBER';
const VALIDATOR_TYPE_IS_NUMBER='NUMBER';
const VALIDATOR_TYPE_PASSWORD='PASSWORD'
const VALIDATOR_TYPE_IS_MATCH="IS_MATCH"
export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = val => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val
});

export const VALIDATOR_MAXLENGTH = val => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val
});
export const VALIDATOR_MIN = val => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = val => ({ type: VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_LOWER = () => ({ type: VALIDATOR_TYPE_LOWER });
export const VALIDATOR_CAPITAL = () => ({ type: VALIDATOR_TYPE_CAPITAL });
export const VALIDATOR_NUMBER = () => ({ type: VALIDATOR_TYPE_NUMBER });
export const VALIDATOR_PASSWORD = () => ({ type: VALIDATOR_TYPE_PASSWORD });
export const VALIDATOR_IS_MATCH=()=>({ type: VALIDATOR_TYPE_IS_MATCH });
export const VALIDATOR_IS_NUMBER=()=>({type:VALIDATOR_TYPE_IS_NUMBER})

export const validate = (value, validators ,v="") => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_LOWER) {
      isValid = isValid && value.match(/[a-z]/g);
    }
    if (validator.type === VALIDATOR_TYPE_CAPITAL) {
      isValid = isValid && value.match(/[A-Z]/g);
    }

    if (validator.type === VALIDATOR_TYPE_NUMBER) {
      isValid = isValid && value.match(/[0-9]/g);
    }
    if (validator.type === VALIDATOR_TYPE_PASSWORD) {
      let decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      isValid = isValid && value.match(decimal);
    }
    if (validator.type === VALIDATOR_TYPE_IS_MATCH) {
      isValid = isValid && value.toString()===v.toString();
    }
    if (validator.type === VALIDATOR_TYPE_IS_NUMBER) {
      isValid = isValid && /^\d*$/.test(value);
    }

  }
  return isValid;
};

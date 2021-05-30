function validate(form) {
  let fail;
  // eslint-disable-next-line no-use-before-define
  fail = validateFirstname(form.firstName.value);
  // eslint-disable-next-line no-use-before-define
  fail += validateLastname(form.lastName.value);
  // eslint-disable-next-line no-use-before-define
  fail += validateAge(form.age.value);
  // eslint-disable-next-line no-use-before-define
  fail += validateEmail(form.email.value);
  if (fail === '') {
    return true;
  } else {
    alert(fail);
    return false;
  }
}
function validateFirstname(field) {
  if (field === '') {
    return 'First name field contains no first name\n';
  } else if (/[^a-zA-Z0-9_-]/.test(field)) {
    return 'Only characters a-z, A-Z, 0-9, - and _ are allowed in name.\n';
  }
  const regexp = /^[A-Z]/;
  if (field === regexp.test) {
    return true;
  } else {
    return 'First name must start from upper letter.\n';
  }
}
function validateLastname(field) {
  return field === '' ? 'Last name field contains no last name.\n' : '';
}
function validateAge(field) {
  if (isNaN(field)) {
    return 'Age field contains no age.\n';
  } else if (field < 18 || field > 110) {
    return 'Age must be between 18 and 110.\n';
  }
  return '';
}
function validateEmail(field) {
  if (field === '') {
    return 'Email field contains no email.\n';
  } else if (
    !(field.indexOf('.') > 0 && field.indexOf('@') > 0) ||
    /[^a-zA-Z0-9.@_-]/.test(field)
  ) {
    return 'Provided email address is incorrect.\n';
  }
  return '';
}

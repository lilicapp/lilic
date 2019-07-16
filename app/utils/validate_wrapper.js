import validatejs from 'validate.js';

const constraints = {
  email: {
    presence: true,
    email: {
      message: '^Por favor, introduce un email válido'
    }
  },

  password: {
    presence: true,
    length: {
      minimum: 6,
      message: '^Tu contraseña debe tener al menos 6 caracteres'
    }
  }
};

export default function validate (fieldName, value) {
  const result = validatejs.single(value, constraints[fieldName]);

  // If there is an error message, return it!
  if (result) {
    // Return only the field error message if there are multiple
    return result[0];
  }

  return null;
}
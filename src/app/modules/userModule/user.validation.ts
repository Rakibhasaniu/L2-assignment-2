import Joi from "joi";

const fullNameValidatorSchema = Joi.object({
  firstName: Joi.string().required().messages({
    "any.required": "First name is required.",
  }),
  lastName: Joi.string().required().messages({
    "any.required": "Last name is required.",
  }),
});

const addressValidatorSchema = Joi.object({
  street: Joi.string().required().messages({
    "any.required": "Street is required.",
  }),
  city: Joi.string().required().messages({
    "any.required": "City is required.",
  }),
  country: Joi.string().required().messages({
    "any.required": "Country is required.",
  }),
});

const userValidatorSchema = Joi.object({
  userId: Joi.number().required().messages({
    "any.required": "User ID is required.",
    "objectId.invalidType": "User ID must be a valid ObjectID.",
  }),
  username: Joi.string().min(3).max(30).required().messages({
    "string.alphanum": "Username must only contain alphanumeric characters.",
    "string.min": "Username should have at least {#limit} characters.",
    "string.max": "Username should have at most {#limit} characters.",
    "any.required": "Username is required.",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .messages({
      "string.pattern.base":
        "Password must be alphanumeric and between 3-30 characters.",
      "any.required": "Password is required.",
    }),
  fullName: fullNameValidatorSchema.required().messages({
    "any.required": "Full name is required.",
  }),
  age: Joi.number().required().messages({
    "any.required": "Age is required.",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Valid email is required.",
    "any.required": "Email is required.",
  }),
  isActive: Joi.boolean().default(true).required().messages({
    "any.required": "Active status is required.",
  }),
  hobbies: Joi.array().items(Joi.string()),
  address: addressValidatorSchema.required().messages({
    "any.required": "Address is required.",
  }),
});

export default userValidatorSchema;

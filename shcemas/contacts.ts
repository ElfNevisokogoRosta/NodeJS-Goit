import Joi from "joi";
const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});
export type ContactSchemaType = typeof contactSchema;
export { contactSchema };

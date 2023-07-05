import { HTTPError } from "../utils";
import { ContactSchemaType } from "../shcemas/contacts";

const validate = (schema: ContactSchemaType) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HTTPError(400, error.message));
    }
    next();
  };
  return func;
};
export { validate };

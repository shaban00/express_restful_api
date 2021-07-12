/* __author__ = Shaban Mohammedsaani Hassan (@shaban00) */

import BodySchema from "../utils/schema_validator";

const SchemaValidator = (schema) => {
    return (req, res, next) => {
        if (Object.keys(req.body).length !== 0) {
            var result = BodySchema(req.body, schema);

            if (typeof result !== "undefined") {
                req.schema_status = true;
                req.schema_status_message = result.message;
            }
            next();
        } else {
            res.status(400).json({
                data: {
                    message: "Empty JSON body",
                },
            });
        }
    };
};

export default SchemaValidator;

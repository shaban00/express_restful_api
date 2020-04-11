import validator from "validator";

/**
 * Validate request body
 * @param {*} body
 * @param {*} schema
 */

const BodySchema = (body, schema) => {
	/**
	 * Checks for non-empty body
	 */
	if (!body) {
		return {
			message: "Invalid body. Cannot validate a schema against an undefined body object.",
		};
	}

	/**
	 * Checks for non-empty schema
	 */

	if (!schema) {
		return {
			message: "Invalid schema. A schema must not be undefined.",
		};
	}

	/**
	 * Checks for non-empty schema properties
	 */

	if (!schema.properties) {
		return {
			message: "Invalid schema. A schema must define properties.",
		};
	}

	/**
	 * Checks for unexpected field(s) in request body
	 */

	var property_values = Object.keys(schema.properties);
	var body_values = Object.keys(body);

	for (i in body_values) {
		if (!property_values.includes(body_values[i])) {
			return {
				message: "Invalid body. Unexpected field " + body_values[i],
			};
		}
	}

	var i;

	/**
	 * Checks for required fields in request body
	 */

	if (schema.hasOwnProperty("required")) {
		var l = schema.required.length;

		for (i = 0; i < l; i++) {
			if (!body.hasOwnProperty(schema.required[i])) {
				return {
					message: "Invalid body. Field " + schema.required[i] + " is mandatory",
				};
			}
		}
	}

	for (i in schema.properties) {
		if (body.hasOwnProperty(i)) {
			var property = schema.properties[i];
			var type = schema.properties[i].type;
			var value = body[i];

			if (type === "string") {
				if (!validator.isAscii(value)) {
					return {
						message: "Invalid body. Expected type of " + i + " to be " + type + " but got " + typeof value,
					};
				}
			} else if (type === "email") {
				if (!validator.isEmail(value)) {
					return {
						message: "Invalid body. Expected type of " + i + " to be email but got " + typeof value,
					};
				}
			} else if (type === "uuid") {
				if (!validator.isUUID(value)) {
					return {
						message: "Invalid body. Expected type of " + i + " to be uuid but got " + typeof value,
					};
				}
			} else if (type === "float") {
				if (!validator.isFloat(value)) {
					return {
						message: "Invalid body. Expected type of " + i + " to be float but got " + typeof value,
					};
				}
			} else if (type === "decimal") {
				if (!validator.isDecimal(value)) {
					return {
						message: "Invalid body. Expected type of " + i + " to be decimal but got " + typeof value,
					};
				}
			} else if (type === "integer") {
				if (!validator.isInt(value)) {
					return {
						message: "Invalid body. Expected type of " + i + " to be integer but got " + typeof value,
					};
				}
			} else if (type === "array") {
				if (!(value instanceof Array)) {
					return {
						message: "Invalid body. Expected " + i + " to be an array but got " + typeof value,
					};
				}
			}

			if (property.enum && property.enum.indexOf(value) === -1) {
				return {
					message: "Invalid body. Expected " + i + " to be one of [" + property.enum.join(", ") + "] but got " + value,
				};
			}
		}
	}
};

export default BodySchema;

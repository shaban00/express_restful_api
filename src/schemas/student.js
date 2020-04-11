/* Schema for adding student */

const addStudentSchema = {
	properties: {
		student_id: {
			type: "string",
		},
		first_name: {
			type: "string",
		},
		last_name: {
			type: "string",
		},
		username: {
			type: "string",
		},
		email: {
			type: "email",
		},
		gender: {
			type: "string",
		},
		password: {
			type: "string",
		},
	},
	required: ["student_id", "first_name", "last_name", "username", "email", "gender", "password"],
};

export { addStudentSchema };

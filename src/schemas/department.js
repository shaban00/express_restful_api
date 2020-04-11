/* Schema for adding department */

const addDepartmentSchema = {
	properties: {
		department_name: {
			type: "string",
		},
		college_ref_id: {
			type: "uuid",
		},
	},
	required: ["department_name", "college_ref_id"],
};

export { addDepartmentSchema };

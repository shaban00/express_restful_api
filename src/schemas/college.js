/* Schema for adding college */

const addCollegeSchema = {
	properties: {
		college_name: {
			type: "string",
		},
	},
	required: ["college_name"],
};

export { addCollegeSchema };

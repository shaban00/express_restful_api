import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/* 
Geneate jsonwebtoke
 */

const GenerateToken = (data) => {
	return jwt.sign(
		{
			data: data,
		},
		process.env.TOKENIZATION_SECRET
	);
};

/* 
Verify jsonwebtoken
 */

const VerifyToken = (token) => {
	return jwt.verify(token, process.env.TOKENIZATION_SECRET, (error, decoded) => {
		if (error) {
			return error;
		} else {
			return decoded;
		}
	});
};

export { GenerateToken, VerifyToken };

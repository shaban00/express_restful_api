/* __author__ = Shaban Mohammedsaani Hassan (@shaban00) */

import { VerifyToken } from "../utils/tokenization";

/* 
Authorization in request header
 */

const Authorization = () => {
    return (req, res, next) => {
        let headers = req.headers;
        if (headers) {
            let authorization = headers.authorization;
            if (authorization) {
                let token = authorization.split(" ")[1];

                let data = VerifyToken(token);

                console.log(data);

                if (data.message) {
                    res.status(400).json({
                        data: {
                            message: data.message,
                        },
                    });
                } else {
                    req.data = data.data;
                    next();
                }
            } else {
                res.status(400).json({
                    data: {
                        message: "No authorization in requests",
                        request_method: `${req.method}`,
                    },
                });
            }
        } else {
            res.status(400).json({
                data: {
                    message: "No headers in requests",
                    request_method: `${req.method}`,
                },
            });
        }
    };
};

export default Authorization;

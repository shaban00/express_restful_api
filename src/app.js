/* __author__ = Shaban Mohammedsaani Hassan (@shaban00) */

import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

/* API version */
import apiversion from "./config/apiversion";

/* Application routes */

import college_routes from "./routes/college";
import department_routes from "./routes/department";
import student_routes from "./routes/student";

/* Express application */
const app = express();

/* Defaul PORT=3000 */
const PORT = 3000;

/* Cookier parser */
app.use(cookieParser());

/* Body parser */
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

/* Use helmet to disable x-powered-by */
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.disable("x-powered-by");

/* Cross Origin  */
app.use(cors());

/* Compression */
app.use(compression());

/* Use application routes */
app.use(apiversion.version_url, college_routes);
app.use(apiversion.version_url, department_routes);
app.use(apiversion.version_url, student_routes);

/* Client route error page */
app.all("/*", (req, res) => {
    res.status(200).json({
        message: "This is an API not a website",
        request_method: `${req.method}`,
        error_status: 404,
        error: "Invalid url",
        error_url: `${req.headers.host}` + `${req.url}`,
    });
});

/* Application running	 */
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

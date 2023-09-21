import config from "./index";

export const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "RG Language API",
            version: "1.0.0",
            description: "RG Language API",
        },

        servers: [
            {
                url: `http://localhost:${config.PORT}`,
                description: "My API Documentation",
            },
        ],
    },
    apis: [
        "./routes/api/*"
    ],
};
// Extended: https://swagger.io/specification/#infoObject
module.exports = {
    swaggerDefinition: {
        info: {
            title: "Quiz API", // Title (required)
            description: "Quiz API Documentation",
            version: '1.0.0', // Version (required)
            contact: {
                name: "Botsup Support",
                email: "support@botsup.io"
            },
            // license: {
            //   name: "License",
            //   url: "http://www.apache.org/licenses/LICENSE-2.0.html"
            // },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ['./routes/*.js'] // Path to the API docs
};
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        service: "Jenkins CI/CD Demo"
    });
});

app.get("/api/info", (req, res) => {
    res.json({
        application: "Jenkins CI/CD Automation",
        version: "1.0.0",
        environment: process.env.NODE_ENV || "development"
    });
});

if (require.main === module) {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Application running on port ${PORT}`);
    });
}

module.exports = app;

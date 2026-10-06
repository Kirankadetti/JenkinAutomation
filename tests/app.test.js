const request = require("supertest");
const app = require("../app");

describe("PipelineX CI/CD Application", () => {

    test("health endpoint should return UP", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("UP");
    });

    test("application information should be available", async () => {
        const response = await request(app).get("/api/info");

        expect(response.statusCode).toBe(200);
        expect(response.body.application).toBe("Jenkins CI/CD Automation");
    });

});

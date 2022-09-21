const request = require("supertest");
const app = require("../../app");
const { mongoConnect, mongoDisconnect } = require("../../services/mongo");
const { loadPlanetsData } = require("../../models/planets.model");

describe("LAUNCHES API", () => {
	const MONGO_URL = "mongodb://127.0.0.1";
	beforeAll(async () => {
		await mongoConnect(MONGO_URL);
		await loadPlanetsData();
	});

	afterAll(async () => {
		await mongoDisconnect();
	});

	describe("TEST GET /launches", () => {
		test("It should respond with 200 success", async () => {
			await request(app)
				.get("/v1/launches")
				.expect("Content-Type", /json/)
				.expect(200);
		});
	});

	describe("TEST POST /launch", () => {
		const launchData = {
			mission: "USS Enterprise",
			rocket: "NCC 1701-D",
			target: "Kepler-62 f",
			launchDate: "January 7, 2032",
		};

		const launchDataWithoutDate = {
			mission: "USS Enterprise",
			rocket: "NCC 1701-D",
			target: "Kepler-62 f",
		};

		test("It should respond with 201 created", async () => {
			const response = await request(app)
				.post("/v1/launches")
				.send(launchData)
				.expect("Content-Type", /json/)
				.expect(201);

			const requestDate = new Date(launchData.launchDate).valueOf();
			const responseDate = new Date(response.body.launchDate).valueOf();

			expect(response.body).toMatchObject(launchDataWithoutDate);
			expect(responseDate).toBe(requestDate);
		});

		test("It should catch missing required properties", async () => {
			const response = await request(app)
				.post("/v1/launches")
				.send(launchDataWithoutDate)
				.expect("Content-Type", /json/)
				.expect(400);

			expect(response.body).toStrictEqual({
				error: "Missing required launch data",
			});
		});

		test("It should catch invalid dates", async () => {
			const response = await request(app)
				.post("/v1/launches")
				.send(Object.assign(launchData, { launchDate: "invalid date" }))
				.expect("Content-Type", /json/)
				.expect(400);

			expect(response.body).toStrictEqual({
				error: "Invalid launch date",
			});
		});
	});
});

const request = require('supertest');
const app = require('../../app');
const { connectMongoDb, disconnectMongoDb } = require("../../services/mongo");

describe('launches API', () => {
  beforeAll(async () => {
    await connectMongoDb();
  });

  afterAll(async () => {
    await disconnectMongoDb();
  });


  describe('Test Get /launches', () => {
    test('It should respond with 200 status code', async () => {
      const response = await request(app)
        .get('/v1/launches')
        .expect('Content-Type', /json/)
        .expect(200)
    })
  });
  
  describe("Test Post /launch", () => {
    test('it should respond with 201 success', async () => {
      await request(app)
        .post("/v1/launches")
        .send({
          mission: "USS Enterprice",
          rocket: "orion is1",
          target: "Kepler-62 f",
          launchDate: "december 23, 2030",
        })
        .expect("Content-Type", /json/)
        .expect(201);
    })

    test("it should catch planets that are not in planets collection", async () => {
      await request(app)
        .post("/v1/launches")
        .send({
          mission: "USS Enterprice",
          rocket: "orion is1",
          target: "Orion's home planet",
          launchDate: "december 23, 2030",
        })
        .expect("Content-Type", /json/)
        .expect(400);
    });
  
    test('it should catch invalid client inputs with 400 status code', async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send({
          rocket: "orion is1",
          target: "Kepler-62 f",
          launchDate: "december 23, 2030",
        })
        .expect("Content-Type", /json/)
        .expect(400);
  
      expect(response.body).toStrictEqual({
        error: "missing required launch property"
      })
    });
  
    test("it should catch invalid date inputs with 400 status code", async () => {
      const response = await request(app)
        .post("/v1/launches")
        .send({
          mission: "USS Enterprice",
          rocket: "orion is1",
          target: "Kepler-62 f",
          launchDate: "hello",
        })
        .expect("Content-Type", /json/)
        .expect(400);
  
      expect(response.body).toStrictEqual({
        error: "Invalid launch Date",
      });
    });
  });
})

// describe("Test Abort /launches");
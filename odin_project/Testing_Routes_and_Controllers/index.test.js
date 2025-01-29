import { it, expect } from 'vitest'
const index = require("./index");
const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

it("index route works", async () => {
    await request(app)
        .get("/")
        .expect("Content-Type", /json/)
        .expect({ name: "frodo" })
        .expect(200);
});

it("testing route works", async () => {
    await request(app)
        .post("/test")
        .type("form")
        .send({ item: "hey" })

    await request(app)
        .get("/test")
        .expect({ array: ["hey"] });
});

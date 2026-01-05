import "dotenv/config";
import express from "express";
import { prisma } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there");
})

app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.create({
      data: { username, password },
    });

    res.json({
      message: "Signup successful",
      id: user.id,
    });
  } catch (e: any) {
    console.error("Prisma error code:", e.code);
    console.error(e);

    if (e.code === "P2002") {
      return res.status(409).json({
        error: "Username already exists",
      });
    }

    res.status(500).json({
      error: "Internal server error",
    });
  }
});

app.listen(3002);
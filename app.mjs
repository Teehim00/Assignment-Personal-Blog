import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/profiles", (req, res) => {
  res.send({  "data":  {
    "name": "john",
    "age": 20
}
});
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
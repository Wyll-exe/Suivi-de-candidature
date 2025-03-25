import express from 'express';
import routes from "./routes/routes.js";
import connectDB from "./database/dbConnect.js";

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.use("/api/v1", routes)

app.get("/test", (req, res) => {
    res.send('TEST')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});
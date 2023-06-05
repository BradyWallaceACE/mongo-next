import { connectMongoDB } from "@/libs/MongoConnect";
import Task from "@/models/TasksModel";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "Only POST requests are allowed." });
    return;
  }

  const { task } = req.body;

  try {
    await connectMongoDB();
    Task.create({ task }).then((data) => {
      console.log(data);
      res.status(201).send(data);
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, msg: "Something went wrong!" });
  }
}

import { connectMongoDB } from "@/libs/MongoConnect";
import Task from "@/models/TasksModel";

export default async function handler(req, res) {
  // Check that it's POST
  if (req.method !== "POST") {
    res.status(405).send({ msg: "Only POST requests are allowed." });
    return;
  }

  // Get the task information
  const { task } = req.body;

  try {
    // Connect to DB
    await connectMongoDB();
    // Create the task and send a response
    Task.create({ task }).then((data) => {
      console.log(data);
      res.status(201).send(data);
    });
  } catch (err) {
    // Log Errors
    console.log(err);
    res.status(400).send({ err, msg: "Something went wrong!" });
  }
}

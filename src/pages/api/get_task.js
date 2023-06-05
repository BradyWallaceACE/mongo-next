import { connectMongoDB } from "@/libs/MongoConnect";
import Task from "@/models/TasksModel";

export default async function handler(req, res) {
  // Check that it's GET
  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only GET requests are allowed." });
    return;
  }

  try {
    // Connect to DB
    await connectMongoDB();
    // Fetch all tasks and send a response
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (err) {
    // Log errors
    console.log(err);
    res.status(400).send({ err, msg: "Something went wrong!" });
  }
}

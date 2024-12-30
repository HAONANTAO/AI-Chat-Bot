import app from "./app.js";
import { connectedToDatabase, disconnectToDatabase } from "./db/connection.js";
// connections and listeners

const port = process.env.PORT || 3000;
connectedToDatabase()
  .then(() => {
    // while connected then server works
    app.listen(port, () => {
      console.log("connection is good, server works!");
    });
  })
  .catch((error) => {
    console.log("connected failed, server is not open");
  });

const moongoose = require("mongoose");

moongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => console.log(`Database connection succecced!`))
  .catch((e) => console.log(`Database connection failed! : `, e));

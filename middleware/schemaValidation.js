const schemaValidator = require("../validations/category.valid");

const validation = (req, res, next) => {
  const schemaObj = req.baseUrl.split("/")[1];
  const data = req.body;
  try {
    const validatedData = schemaValidator[schemaObj].parse(data);
    if (validatedData) next();
  } catch (error) {
    res.status(422).json({ message: error });
  }
};

module.exports = validation;

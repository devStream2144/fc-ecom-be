const Model = require("../models/models");

const checkDuplicates = async (model, field, value) => {
  const result = await Model[model].findOne({ [field]: value });
  if (result) {
    return result;
  }
  return false;
};

module.exports = checkDuplicates;

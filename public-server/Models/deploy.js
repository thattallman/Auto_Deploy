const { Schema, model } = require("mongoose");

const deploySchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  project_name: {
    type: String,
    required: true,
  },
  github_link: {
    type: String,
    required: true,
    unique: true
  },
  deploy_link: {
    type: String,
    default: null,
  },
});

const DEPLOY = model("deploy",deploySchema);

module.exports = DEPLOY;

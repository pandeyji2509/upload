const express = require("express");
const {User,Driver,Join} = require("./models");
const router = express.Router();
router.post("/add_driver", async (request, response) => {
    const driver = new Driver(request.body);
    console.log(driver)
    try {
      await driver.save();
      response.send(driver);
    } catch (error) {
        console.log(error);
      response.status(500).send(error);
    }
});
router.post("/add_user", async (request, response) => {
  const user = new User(request.body);
  console.log(user)
  try {
    await user.save();
    response.send(user);
  } catch (error) {
      console.log(error);
    response.status(500).send(error);
  }
});
router.post("/add_join", async (request, response) => {
  const join = new Join(request.body);
  console.log(join)
  try {
    await join.save();
    response.send(join);
  } catch (error) {
      console.log(error);
    response.status(500).send(error);
  }
});
router.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  router.post("/delete", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });
  module.exports = router;
const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const userController = require('../controllers/user.controller.js');



const router = express.Router();

router
  .route('/')
  .post(userController.createUser)
  .get(userController.getUsers);

router.route("/:userId").get(userController.getUser);
router.route("/:userId").put( userController.updateUser)
router.route("/:userId").delete( userController.deleteUser)
module.exports = router;
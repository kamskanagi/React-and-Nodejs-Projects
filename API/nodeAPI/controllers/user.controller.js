const httpStatus = require('http-status');
//const ApiError = require('../utils/ApiError');
const catchAsync = require('../util/catchAsync');
const userService = require('../services/userService');

const createUser = catchAsync(async (req, res) => {
  const createdUser = await userService.createUser(req.body);
  const user = await userService.getUserById(createdUser.id);
  res.status(httpStatus.CREATED).send(user);
});

const getUser = catchAsync(async (req, res) => {
    const getuser = await userService.getUserById(req.query);
    const user = await userService.getUserById (getuser.id);
    res.status(httpStatus.CREATED).send(user);
  });
  const getUsers = catchAsync(async (req, res) => {
    const user = await userService.getUsers();
    res.status(httpStatus.CREATED).send(user);
  });

const updateUser = catchAsync(async (req, res) => {
    const updateduser = await userService.updateUserById(req.body);
    const user = await userService.getUserById(updateduser.id);
    res.status(httpStatus.CREATED).send(user);
  });


  const deleteUser = catchAsync(async (req, res) => {
    const deleteuser = await userService.deleteUserById(req.body);
    const user = await userService.getUserById(deleteuser.id);
    res.status(httpStatus.CREATED).send(user);
  });


module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
  };
  
const httpStatus = require('http-status');
//const { Op } = require('sequelize');
const { User } = require('../models/User');
const ApiError = require('../util/ApiError');
//const paginate = require('../utils/paginate');
//const pick = require('../utils/pick');



/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {number} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
const isEmailTaken = async (email, excludeUserId) => {
    const whereOptionsAnd = [{ email }];
    if (excludeUserId) {
      whereOptionsAnd.push({ [Op.not]: { id: excludeUserId } });
    }
    const user = await User.findOne({ where: { [Op.and]: whereOptionsAnd } });
    return !!user;
  };


/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
    if (await isEmailTaken(userBody.email)) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    const user = await User.create(userBody);
    return user;
  };



  /**
 * Get user by id
 * @param {number} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
    return User.findByPk(id);
  };
  
  /**
   * Get user by email
   * @param {string} email
   * @returns {Promise<User>}
   */
  const getUserByEmail = async (email) => {
    return User.unscoped().findOne({ where: { email } });
  };

  /**
 * Update user by id
 * @param {number} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
    const user = await getUserById(userId);
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    if (updateBody.email && (await isEmailTaken(updateBody.email, userId))) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    Object.assign(user, updateBody);
    await user.save();
    return user;
  };


  
/**
 * Delete user by id
 * @param {number} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
    const user = await getUserById(userId);
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    await user.destroy();
    return user;
  };

  
const queryUsers = async (filter, options) => {
 
  const users = await User.findAll();
   return users

};
  
module.exports = {
    createUser,
    queryUsers,
    getUserById,
    getUserByEmail,
    updateUserById,
    deleteUserById
  };
  
  

import { TUser } from "./user.interface";
import User from "./user.schema&model";

const createUserInToDB = async (userData: TUser) => {
  await User.create(userData);
  const result = await User.aggregate([
    { $match: { userId: userData.userId } },
    {
      $project: {
        _id: 0,
        password: 0,
        __v: 0,
        "fullName._id": 0,
        "address._id": 0,
      },
    },
  ]);
  return result[0];
};
const getAllUsers = async () => {
  const result = await User.aggregate([
    { $match: {} },
    {
      $project: {
        _id: 0,
        password: 0,
        __v: 0,
        "fullName._id": 0,
        "address._id": 0,
      },
    },
  ]);

  return result;
};
const getOneUser = async (userId: number) => {
  if (await User.isUserExsistById(userId)) {
    const result = await User.aggregate([
      { $match: { userId: userId } },
      {
        $project: {
          _id: 0,
          password: 0,
          __v: 0,
          "fullName._id": 0,
          "address._id": 0,
        },
      },
    ]);
    return result[0];
  } else {
    return null;
  }
};

const updateOneUser = async (userId: number, updatedData: TUser) => {
  if (await User.isUserExsistById(userId)) {
    await User.findOneAndUpdate({ userId }, updatedData, {
      upsert: true,
      setDefaultsOnInsert: true,
    });
    const result = await User.aggregate([
      { $match: { userId: updatedData.userId } },
      {
        $project: {
          _id: 0,
          password: 0,
          __v: 0,
          "fullName._id": 0,
          "address._id": 0,
        },
      },
    ]);
    return result[0];
  } else {
    return null;
  }
};
const deleteOneUser = async (userId: number) => {
  if (await User.isUserExsistById(userId)) {
    const result = await User.deleteOne({ userId });
    return result;
  } else {
    return null;
  }
};

export const userServices = {
  createUserInToDB,
  getAllUsers,
  getOneUser,
  updateOneUser,
  deleteOneUser,
};

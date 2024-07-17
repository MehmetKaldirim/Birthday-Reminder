import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({ message: "API is working!" });
};

export const getusers = async (req, res, next) => {
  try {
    const users = await User.find({});
    const totalUsers = await User.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthUsers = await User.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      users,
      totalUsers,
      lastMonthUsers,
    });
  } catch (error) {
    next(error);
  }
};

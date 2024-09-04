import AppDataSource from "../typeorm/datasource";
import { User } from "../typeorm/entities/User";
const UserRepo = AppDataSource.getRepository(User);

const createUser = async (req: any, res: any) => {
  console.log("login called");
  const { email, password, name } = req.body;
  try {
    const user = await UserRepo.findOneBy({ email, password });

    if (!user) {
      const user: User = UserRepo.create({ email, password, name });
      await UserRepo.insert(user);
    }
    return res.status(200).json({ message: "User Registered Sucessfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export { createUser };

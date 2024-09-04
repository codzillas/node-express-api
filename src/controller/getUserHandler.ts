import AppDataSource from "../typeorm/datasource";
import { User } from "../typeorm/entities/User";
const UserRepo = AppDataSource.getRepository(User);

const getUser = async (req: any, res: any) => {
  console.log("login called");
  const { email, password } = req.params;
  try {
    const user = await UserRepo.findOneBy({ email, password });
    if (!user) {
      return res.status(404).json({ message: "User doesn't exists." });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export { getUser };

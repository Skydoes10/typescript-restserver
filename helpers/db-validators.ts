import User from "../models/user";

export const emailExists = async (email: string) => {
    const user = await User.findOne({ where: { email } });
    if (user) {
        throw new Error("Email already exists");
    }
}

export const userExists = async (id: string) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error("User not found");
    }
}
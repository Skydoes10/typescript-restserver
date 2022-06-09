import { Request, Response } from "express";
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAndCountAll({
        where: {
            status: true
        }
    });
    res.json({ users });
};

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.json({ user });
};

export const createUser = async (req: Request, res: Response) => {
    const { body } = req;

    try {

        const user = await User.create(body);
        res.json({ user });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error creating user'
        });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    try {

        const user = await User.findByPk(id);
        await user!.update(body);
        res.json({ user });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error creating user'
        });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    await user!.update({ status: false });
    res.json({ user });
};
const { axios } = require("axios");
import UserModel from "../server/models/user.model.js";

const api = axios.create({ baseURL: 'localhost:3000/' });

const FetchUsers = async () => {
    try {
        const response = await api.get('api/users');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const FetchSingleUser = async (req, res) => {
    try {
        const response = await api.get('api/users', null, {
            params: {
                userId: req.params.userId,
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const AddUser = async (req, res) => {
    try {
        const userData = new UserModel(req.body);
        const newUser = await api.post('api/users', { userData });
        console.log(newUser);
        return newUser;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const UpdateUser = async (req, res) => {
    try {
        const userDetails = new UserModel(req.body);
        const updatedUser = await api.put('api/user', { userDetails });
        console.log(updatedUser);
        return updatedUser;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const DeleteUser = async (req, res) => {
    try {
        const deletedUser = api.delete('api/user', null, {
            paramss: {
                userId: req.params.userId,
            }
        });
        console.log(deletedUser);
        return deletedUser;
    } catch (error) {
        console.log(error);
    }
}

export default { FetchUsers, FetchSingleUser, AddUser, UpdateUser, DeleteUser };
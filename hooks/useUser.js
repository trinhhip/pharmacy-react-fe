import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useState } from "react";
import UserRepository from "~/repositories/UserRepository";

export default function useUser() {
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    return {
        loading,
        currentUser,
        userLogin: async (payload) => {
            setLoading(true);
            const res = await UserRepository.login(payload);

            console.log('user login res', res);
            setCurrentUser(res.data.data);
            setLoading(false);
        },
        userRegister: async (payload) => {
            setLoading(true);
            const res = await UserRepository.register(payload);

            console.log('user register res', res);
            setCurrentUser(res.data.data);
            setLoading(false);
        },
    }

}
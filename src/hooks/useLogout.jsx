import { useAuthContext } from "./useAuthContext";
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const logout = useCallback(() => {
        localStorage.removeItem('user');
        dispatch({ type: "LOGOUT" });
        navigate("/");
        window.scrollTo(0, 0);
    }, [dispatch, navigate]);

    return { logout };
};

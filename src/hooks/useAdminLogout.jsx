import { useAdminAuthContext } from "./useAdminAuthContext";
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const useAdminLogout = () => {
    const { dispatch } = useAdminAuthContext();
    const navigate = useNavigate();

    const logout = useCallback(() => {
        localStorage.removeItem('admin');
        dispatch({ type: "LOGOUT" });
        navigate("/adminlogin");
        window.scrollTo(0, 0);
    }, [dispatch, navigate]);

    return { logout };
};

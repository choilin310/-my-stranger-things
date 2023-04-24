import { useState } from "react";

const useAuth = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));

    return { token, setToken };
};

export default useAuth;
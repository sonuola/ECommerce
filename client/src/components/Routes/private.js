import { useState } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";

export default function PrivateRoute() {
  const [ok, SetOk] = useState(false);

  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/api/v1/auth/user-auth");

      if (res.data.ok) {
        SetOk(true);
      } else {
        SetOk(false);
      }
    };
    if (auth.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : "spinner";
}

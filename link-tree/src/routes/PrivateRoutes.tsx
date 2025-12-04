import { Navigate, useNavigate } from "react-router";
import { auth } from "../service/firebase";
import { useEffect, useState } from "react";

interface PrivateRoutesProps {
  children?: React.ReactNode;
}

const PrivateRoutes = ({ children }: PrivateRoutesProps): any => {
    
  const [loginStatus, setLoginStatus] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        let uid = user.uid;
        let email = user.email;
        localStorage.setItem("userData", JSON.stringify({ uid, email }));
        setLoading(false);
        setLoginStatus(true);
      } else {
        setLoading(false);
        setLoginStatus(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center bg-amber-500 text-4xl">
        Loading...
      </div>
    );
  }

  if (!loginStatus) {
     return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoutes;

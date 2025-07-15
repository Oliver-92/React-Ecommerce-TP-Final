import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const RequireAdmin = ({ children }) => {
// RequireAdmin: Componente atómico que restringe el acceso a rutas solo para usuarios administradores.
  const { user, isAdmin } = useAuth();

  if (!user || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RequireAdmin;
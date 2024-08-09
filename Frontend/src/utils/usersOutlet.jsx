import UsersNav from "@/components/usersNav";
import PrivateRoute from "@/components/privateRoute";

const UsersOutlet = ({ children }) => {
  return (
    <PrivateRoute>
      <UsersNav />
      {children}
    </PrivateRoute>
  );
};

export default UsersOutlet;

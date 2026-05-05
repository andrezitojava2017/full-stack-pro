import { useEffect } from "react";
import { auth } from "../../services/firebaseConfig";
import Painelheader from "../../components/painelHeader/PainelHeader";

const Dashboard = () => {

  const getUser = () => {
    auth.currentUser ? console.log('Usuário logado:', auth.currentUser) : console.log('Nenhum usuário logado');
  }

  useEffect(() => {
    getUser();
  }, []);
  
  return (
    <div>
      <Painelheader/>
        <h1>Dashboard</h1>
    </div>
  )
}
export default Dashboard;
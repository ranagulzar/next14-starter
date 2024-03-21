import { handleLogout } from "@/lib/action";
import { getEmployee, getEmployees } from "@/lib/data";

const Home = async () => {
  const employees = await getEmployees();
  return <div>
    <form action={handleLogout}>
              <button>Logout</button>
            </form>
    {employees.map((employee)=>(
       <div key={employee.id}>{employee.name}</div>
    ))}
  </div>;
};

export default Home;
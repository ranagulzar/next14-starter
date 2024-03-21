import { getEmployee, getEmployees } from "@/lib/data";

const Home = async () => {
  const employees = await getEmployees();
  return <div>
    {employees.map((employee)=>(
       <div key={employee.id}>{employee.name}</div>
    ))}
  </div>;
};

export default Home;
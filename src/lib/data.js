const employees = [{
    id:1,
    name: "Gulzar Ahmad",
    designation:"Principle Software Engineer",
    experties:[{id:1,name:"c#"},{id:2,name:"dotnet core"},{id:3,name:"angular"}]
},
{
    id:2,
    name: "Khurram Imtiaz",
    designation:"Devops Master",
    experties:[{id:1,name:"Azure Devops"},{id:2,name:"Jira Devops"},{id:3,name:"Jenkins"}]
}]

export const getEmployees = async ()=> {
    return employees;
}

export const getEmployee = async (id)=> {
    return employees.find(x=>x.id === id)
}
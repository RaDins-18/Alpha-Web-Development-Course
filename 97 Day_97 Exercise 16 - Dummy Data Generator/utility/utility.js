import { Employee } from "../schema/employee.js";

const names = ["RaDin", "Jones", "Mark", "Robert", "David"];
const salaries = [55000, 60000, 65000, 70000, 75000];
const languages = ["Python", "JavaScript", "PHP", "C++", "Rust"];
const cities = ["Tokyo", "London", "Berlin", "Istanbul", "Seoul"];

const getRandom = (arr) => {
  let num = Math.floor(Math.random() * 5);
  return arr[num];
}

export const dataGenerator = async () => {
  // Clear previous data
  await Employee.deleteMany({})

  // Generate random data
  for (let i = 0; i < 10; i++) {
    let data = await Employee.create({
      name: getRandom(names),
      salary: getRandom(salaries),
      language: getRandom(languages),
      city: getRandom(cities),
      isManager: (Math.random()>0.5)?true:false
    });
    console.log(data);
  }
}
import { createContext, useState } from "react";
export const todocontext = createContext(null);
const TodoContext = (props) => {
	const [tasks , settasks] = useState([{ title : " Task 1" , completed : false}])
}
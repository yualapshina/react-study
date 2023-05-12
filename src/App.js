import React, { useState } from "react";
import { nanoid } from "nanoid";
import logo from './logo.svg';
import './App.css';
import Task from "./components/Task";
import Form from "./components/Form";

function App(props) {
	
	function addTask(name) {
		const newTask = { id: `task-${nanoid()}`, name, completed: false };
		setTasks([...tasks, newTask]);
	}
	function toggleTaskCompleted(id) {
		const updatedTasks = tasks.map((task) => {
			if (id === task.id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(updatedTasks);
	}
	function deleteTask(id) {
		const remainingTasks = tasks.filter((task) => id !== task.id);
		setTasks(remainingTasks);
	}
	
	const [tasks, setTasks] = useState(props.tasks);
	const taskList = tasks.map((task) => (
		<Task 
			id={task.id} 
			name={task.name} 
			completed={task.completed} 
			key={task.id}
			toggleTaskCompleted={toggleTaskCompleted}
			deleteTask={deleteTask}
		/>
	));
	
	
	return (
		<div className="app">
			<Form onSubmit={addTask} />
			<ul
				role="list"
				className="list">
			{taskList}
			</ul>
		</div>
	);
}

export default App;

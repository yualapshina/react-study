import React from "react";

function Task(props) {
	return (
		<li className="task">
			<input 
				id="{props.id}" 
				type="checkbox" 
				defaultChecked={false}
				onChange={() => props.toggleTaskCompleted(props.id)}
			/>
			<label className="task-label" htmlFor="{props.id}">
				{props.name}
			</label>
			<button
				type="button"
				className="button_delete"
				onClick={() => props.deleteTask(props.id)}>
				Delete task
			</button>
		</li>
	);
}

export default Task;
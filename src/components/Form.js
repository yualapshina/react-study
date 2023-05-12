import React, { useState } from "react";

function Form(props) {
	
	const [name, setName] = useState("");
	
	function handleChange(e) {
		setName(e.target.value);
	}
	
	function handleSubmit(e) {
		e.preventDefault();
		props.onSubmit(name);
		setName("");
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<input
				className="input"
				type="text"
				id="new-task"
				name="new-task"
				autoComplete="off"
				value={name}
				onChange={handleChange}
			/>
			<button type="submit" className="button_add">
				Add task
			</button>
		</form>
	);
}

export default Form;
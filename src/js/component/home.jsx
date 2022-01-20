import React, { useState } from "react";
import Todo from "./todo.jsx";
import NoTodo from "./noTodo.jsx";
import HeadTodo from "./headTodo.jsx";

//create your first component
const Home = () => {
	const [addTodo, setAddTodo] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [checkValue, setCheckValue] = useState("");

	console.log({ addTodo });

	const addNewTodo = (event) => {
		if (!checkValue || !addTodo) {
			alert("Asegurate de llenar bien los campos");
		} else {
			const newTodoList = [...todoList, [addTodo, checkValue]];
			setTodoList(newTodoList);
			console.log(event);
		}
	};

	console.log({ todoList });

	return (
		<div className="container-fluid d-flex justify-content-center align-items-start p-0 vh-100">
			<div
				style={{ minWidth: "560px" }}
				className="my-5 bg-light p-5 border border-info border-2 rounded">
				<div className="input-group mx-0 mb-3">
					<input
						type="text"
						className="form-control"
						aria-label="Text input with dropdown button"
						placeholder="Añadir nueva tarea..."
						onChange={(event) => setAddTodo(event.target.value)}
					/>
					<button
						className="btn btn-outline-secondary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Prioridad
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<li>
							<a className="dropdown-item" href="#">
								<input
									className="form-check-input me-2"
									type="radio"
									name="task"
									id="normal"
									value={0}
									onChange={(event) =>
										setCheckValue(event.target.value)
									}
								/>
								Normal
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								<input
									className="form-check-input me-2"
									type="radio"
									name="task"
									id="important"
									value={1}
									onChange={(event) =>
										setCheckValue(event.target.value)
									}
								/>
								Importante
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								<input
									className="form-check-input me-2"
									type="radio"
									name="task"
									id="urgent"
									value={2}
									onChange={(event) =>
										setCheckValue(event.target.value)
									}
								/>
								Urgente
							</a>
						</li>
						<li className="d-flex justify-content-center mt-2">
							<button
								type="button"
								className="btn btn-outline-secondary"
								onClick={addNewTodo}>
								Añadir tarea
							</button>
						</li>
					</ul>
				</div>
				{!todoList.length ? (
					<NoTodo />
				) : (
					todoList.map((todo, index) => (
						<Todo
							key={index}
							id={index}
							importance={todo[1]}
							textContent={todo[0]}
						/>
					))
				)}
				<div className="d-flex justify-content-center">
					<span className="badge bg-info text-dark me-2">
						Normales: 0
					</span>
					<span className="badge bg-warning text-dark mx-2">
						Importantes: 0
					</span>
					<span className="badge bg-danger mx-2">Urgentes: 0</span>
					<span className="badge bg-success ms-2">
						Tareas Completadas: 0
					</span>
				</div>
			</div>
		</div>
	);
};

export default Home;

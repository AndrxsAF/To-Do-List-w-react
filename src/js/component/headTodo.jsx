import React from "react";

const HeadTodo = () => {
	return (
		<div className="input-group mx-0 mb-3">
			<input
				type="text"
				className="form-control"
				aria-label="Text input with dropdown button"
				placeholder="Añadir nueva tarea..."
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
							name="normalTask"
							id="normalTask"
						/>
						Normal
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						<input
							className="form-check-input me-2"
							type="radio"
							name="importantTask"
							id="importantTask"
						/>
						Importante
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						<input
							className="form-check-input me-2"
							type="radio"
							name="urgentTask"
							id="urgentTask"
						/>
						Urgente
					</a>
				</li>
				<li>
					<div className="d-flex justify-content-center mt-2">
						<button
							type="button"
							className="btn btn-outline-secondary">
							Añadir tarea
						</button>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default HeadTodo;

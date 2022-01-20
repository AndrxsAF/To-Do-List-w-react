import PropTypes from "prop-types";
import React from "react";

const Todo = (props) => {
	if (props.importance === 0) {
		return (
			<div id={props.id} className="alert alert-info" role="alert">
				{props.textContent}
			</div>
		);
	} else if (props.importance === 1) {
		return (
			<div id={props.id} className="alert alert-warning" role="alert">
				{props.textContent}
			</div>
		);
	} else {
		return (
			<div id={props.id} className="alert alert-danger" role="alert">
				{props.textContent}
			</div>
		);
	}
};

Todo.propTypes = {
	importance: PropTypes.number,
	id: PropTypes.number,
	textContent: PropTypes.string,
};

export default Todo;

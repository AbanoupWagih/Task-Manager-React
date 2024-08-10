import PropTypes from 'prop-types';
const TaskItem = ({ task, index, deleteTask, toggleTaskCompletion }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(index)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
};
TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleTaskCompletion: PropTypes.func.isRequired,
  };

export default TaskItem;
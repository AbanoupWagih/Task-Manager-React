import { Component } from 'react';
import TaskItem from './TaskItem';
import TaskInput from './TaskInput';

class TaskList extends Component {
  state = {
    tasks: []
  };

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, { text: task, completed: false }]
    }));
  };

  deleteTask = (index) => {
    const task = this.state.tasks[index];
    if (task.completed) {
      this.setState((prevState) => ({
        tasks: prevState.tasks.filter((_, i) => i !== index)
      }));
    } else {
      alert("You cannot delete an incomplete task!");
    }
  };


  toggleTaskCompletion = (index) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  render() {
    return (
      <div>
        <TaskInput addTask={this.addTask} />
        <ul>
          {this.state.tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              deleteTask={this.deleteTask}
              toggleTaskCompletion={this.toggleTaskCompletion}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
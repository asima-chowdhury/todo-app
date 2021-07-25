import React, { useState } from 'react';
import TodoTask from './TodoTask';
import { ITask } from "./Interfaces";

const TodoList = () => {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "task") {
            setTask(e.target.value);
        } else {
            setDeadline(Number(e.target.value));
        }
    };

    const addTask = (): void => {
        const newTask = { taskName: task, deadline: deadline };
        setTodoList([...todoList, newTask]);
        // console.log(todoList);
        setTask("");
        setDeadline(0);
    };

    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(
          todoList.filter((task) => {
            return task.taskName !== taskNameToDelete;
          })
        );
      };

    return (
        <div>
            <div className="form bg-white p-3 rounded">
                <h2>Todo App</h2>
                <div className="inputContainer">
                    <input
                        type="text"
                        placeholder="Enter Task..."
                        name="task"
                        value={task}
                        onChange={handleChange}
                        className="form-control my-3"
                    />
                    <input
                        type="number"
                        placeholder="Enter Deadline (in Days)..."
                        name="deadline"
                        value={deadline}
                        onChange={handleChange}
                        className="form-control my-3"
                    />
                </div>
                <button onClick={addTask} className="btn btn-success">Add Task</button>
            </div>
            <div className="todoList">
                {
                    todoList.map((task: ITask, key: number) => {
                        return <TodoTask key={key} task={task} completeTask={completeTask} />;
                    })
                }
            </div>
        </div>
    );
};

export default TodoList;
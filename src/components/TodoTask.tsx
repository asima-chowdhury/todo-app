import React from 'react';
import { ITask } from "./Interfaces";


interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className="card my-3 w-75">
            <div className="row">
                <div className="col-md-8">
                    <div className="card-body">
                        <p className=""><strong>Task: </strong> {task.taskName}</p>
                        <p className=""><strong>Task Deadline: </strong> {task.deadline}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <button
                        className="btn btn-warning mt-4"
                        onClick={() => {
                            completeTask(task.taskName);
                        }}
                    >
                    Delete Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoTask;
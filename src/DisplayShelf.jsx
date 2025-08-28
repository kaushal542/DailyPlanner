import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateShelf from "./UpdateShelf";
import { useNavigate } from "react-router";
import Shimmar from "./Shimmar";

const DisplayShelf = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editTask, setEditTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://6880ebc1f1dcae717b63f952.mockapi.io/DailyPlanner"
      );
      console.log(response.data);
      setTasks(response.data);
    } catch {
      console.log("Error occured");
    } finally {
      setLoading(false);
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://6880ebc1f1dcae717b63f952.mockapi.io/DailyPlanner/${id}`
      );
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.log("Error deleting task: ", err);
    }
  };

  //Edit task
  const handleEdit = (task) => {
    navigate(`/update/${task.id}`);
  }

  if (loading) {
    return <Shimmar/>
  }

  if (tasks.length === 0) {
    return <p>No tasks added yet...</p>;
  }

  return (
    <div className="flex justify-center flex-wrap m-10">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-[#ebecf0] m-[24px] p-4 w-[300px] h-auto shadow-[8px_8px_15px_#babecc,-8px_-8px_15px_#fff] rounded-2xl"
        >
          <p className="text-[#989494] flex justify-end">{task.date}</p>
          <h2 className="text-[#7027bf] p-2 font-semibold text-xl">
            {task.title}
          </h2>
          <p className="pl-2">{task.description}</p>

          <div className="flex justify-end">
            <button
            onClick={() => handleEdit(task)}
            className="bg-[#8a55c2] text-white p-2 m-1 rounded-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
          <button
            onClick={() => handleDelete(task.id)}
            className="bg-[#8a55c2] text-white m-1  p-2 rounded-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayShelf;

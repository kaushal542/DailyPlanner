import { useState } from "react";
import axios from "axios";
import DisplayShelf from "./DisplayShelf";
import { Link, Navigate } from "react-router";
import { useNavigate } from "react-router";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addTask = {
      title,
      date,
      description,
    };

    console.log(addTask);

    try {
      const response = await axios.post(
        "https://6880ebc1f1dcae717b63f952.mockapi.io/DailyPlanner",
        addTask
      );

      alert("Task added successfully");

      setTitle("");
      setDate("");
      setDescription("");

      navigate("/display");
    } catch (error) {
      console.log("Something went wrong", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center text-center shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#fff] w-fit p-10 mx-auto mt-10 rounded-2xl">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl text-[#7027bf] font-bold ">Add Task</h1>
        <input
          type="text"
          value={title}
          placeholder="Title"
          className="pl-4 p-2 m-5 text-[#777] shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#fff] focus:outline-none rounded-2xl w-72 transform transition-all duration-300 focus:shadow-[inset_2px_2px_2px_#babecc,inset_-2px_-2px_2px_#fff]"
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="pl-4 p-2 m-5 text-[#777] shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#fff] focus:outline-none  rounded-2xl w-72 transform transition-all duration-300 focus:shadow-[inset_2px_2px_2px_#babecc,inset_-2px_-2px_2px_#fff]"
        />{" "}
        <br />
        <textarea
          placeholder="Add your task here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="pl-4 p-2 m-5 text-[#777] shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#fff] focus:outline-none rounded-2xl w-72 transform transition-all duration-300 focus:shadow-[inset_2px_2px_2px_#babecc,inset_-2px_-2px_2px_#fff]"
        ></textarea>
        <br />
        <button
          type="submit"
          className="w-72 m-5 p-3 flex justify-center rounded-xl  bg-[#f1f3f6] shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#fff] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ color: "#7027bf" }}
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AddBlog;

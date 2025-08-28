import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import Shimmar from './Shimmar'

const UpdateShelf = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetching = async () => {
      try{
        const response = await axios.get(`https://6880ebc1f1dcae717b63f952.mockapi.io/DailyPlanner/${id}`);
        setTitle(response.data.title);
        setDate(response.data.date);
        setDescription(response.data.description);
      } catch (error) {
        console.log("Error fetching task data: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetching();
  }, [id]);
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTask = {
      title,
      date,
      description,
    };

    console.log(updatedTask);

    try {
      await axios.put(
        `https://6880ebc1f1dcae717b63f952.mockapi.io/DailyPlanner/${id}`,
        updatedTask
      );
      navigate("/display");
    } catch (error) {
      console.log("Something went wrong", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Shimmar/>
  }

  return (
    <div>
      <div className="flex justify-center text-center shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#fff] w-fit p-10 mx-auto mt-10 rounded-2xl">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl text-[#7027bf] font-bold ">Update Blog</h1>
        <input
          type="text"
          value={title}
          placeholder="Title"
          className="pl-4 p-2 m-5 text-[#777] shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#fff] focus:outline-none rounded-2xl w-72"
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="pl-4 p-2 m-5 text-[#777] shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#fff] focus:outline-none  rounded-2xl w-72"
        />{" "}
        <br />
        <textarea
          placeholder="Add your task here"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="pl-4 p-2 m-5 text-[#777] shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#fff] focus:outline-none rounded-2xl w-72"
        ></textarea>
        <br />
        <button
          type="submit"
          className="w-72 m-5 p-3 flex justify-center rounded-xl  bg-[#f1f3f6] shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#fff] cursor-pointer"
        >
          Update
        </button>
         <button
         onClick={() => navigate("/display")}
          type="button"
          className="w-72 m-5 p-3 flex justify-center rounded-xl  bg-[#f1f3f6] shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#fff] cursor-pointer"
        >
          Cancel
        </button>
      </form>
    </div>
    </div>
  )
}

export default UpdateShelf

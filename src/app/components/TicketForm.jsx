"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const TicketForm = () => {
    const router = useRouter();
    const startingTicketData = {
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status: "Not Started",
        category: "Hardware problem"
    };
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState, [name]: value
        }));
    }
    const [formData, setFormData] = useState(startingTicketData);
    const handleSubmit = async (e) => {

        // console.log("submited!")
        e.preventDefault();
        const res = await fetch('/api/Tickets', {
            method: "POST",
            body: JSON.stringify({ formData }),
            "content-type": "application/json"
        })

        if (!res.ok) {
            throw new Error("Faild To create a ticket")
        }

        router.refresh();
        router.push("/");

    }
    return (
        <div className="flex justify-center">
            <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
                <h3>
                    Create Your Ticket
                </h3>
                <label htmlFor="titleID">Title</label>
                <input type="text" name="title" id="titleID" required={true} value={formData.title} onChange={handleChange} />


                <label htmlFor="descId">Description</label>
                <textarea name="description" id="descId" cols="30" rows="5" onChange={handleChange} required={true} value={formData.description}></textarea>


                <label htmlFor="catId">Category</label>
                <select name="category" id="catId" onChange={handleChange} required={true} value={formData.category}>
                    <option value="Hardware Problem">Hardware Problem</option>
                    <option value="Software Problem">Software Problem</option>
                    <option value="Project">Project</option>
                </select>


                <label>Priority</label>
                <div>
                    <input
                        id="priority-1"
                        name="priority"
                        type="radio"
                        onChange={handleChange}
                        value={1}
                        checked={formData.priority == 1}
                    />
                    <label>1</label>
                    <input
                        id="priority-2"
                        name="priority"
                        type="radio"
                        onChange={handleChange}
                        value={2}
                        checked={formData.priority == 2}
                    />
                    <label>2</label>
                    <input
                        id="priority-3"
                        name="priority"
                        type="radio"
                        onChange={handleChange}
                        value={3}
                        checked={formData.priority == 3}
                    />
                    <label>3</label>
                    <input
                        id="priority-4"
                        name="priority"
                        type="radio"
                        onChange={handleChange}
                        value={4}
                        checked={formData.priority == 4}
                    />
                    <label>4</label>
                    <input
                        id="priority-5"
                        name="priority"
                        type="radio"
                        onChange={handleChange}
                        value={5}
                        checked={formData.priority == 5}
                    />
                    <label>5</label>
                </div>
                <label htmlFor="progressId">Progress</label>
                <input type="range" name="progress" id="progressId" value={formData.progress} min={0} max={100} onChange={handleChange} />

                <label htmlFor="statusId">Status</label>
                <select name="status" id="statusId" value={formData.status} onChange={handleChange}>
                    <option value="not started">Not Started</option>
                    <option value="started">Started</option>
                    <option value="done">Done</option>
                </select>


                <input type="submit" value="Create Ticket" className="py-2 px-8 rounded-md bg-green-600 shadow-md text-white w-full cursor-pointer" />
            </form>

        </div>
    )
}

export default TicketForm;
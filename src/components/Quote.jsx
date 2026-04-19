import { useState } from "react";
import axios from "axios";

export default function Quote() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    job_type: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://127.0.0.1:8000/api/quotes", form);

    alert("Quote submitted!");
  };

  return (
    <div id="quote" className="max-w-xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-bold mb-6">Get a Quote</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          className="w-full border p-3 rounded"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border p-3 rounded"
          placeholder="Phone"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <select
          className="w-full border p-3 rounded"
          onChange={(e) => setForm({ ...form, job_type: e.target.value })}
        >
          <option>Select Job Type</option>
          <option>CNC Cutting</option>
          <option>Signage & branding</option>
          <option>Engraving</option>
        </select>

        <textarea
          className="w-full border p-3 rounded"
          placeholder="Describe your job"
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <button className="bg-blue-950 text-white px-6 py-3 rounded w-full">
          Submit
        </button>
      </form>
    </div>
  );
}
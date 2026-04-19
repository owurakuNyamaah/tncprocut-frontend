import { useEffect, useState } from "react";
import api from "./axiosSetup";
import AuthLayout from "../layouts/AuthLayout";

export default function Admin() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    api.get("/quotes")
      .then(res => setQuotes(res.data.data))
      .catch(err => console.log(err));
  }, []);

  const updateStatus = async (id, status) => {
    await api.post(`/quotes/${id}/status`, { status });

    setQuotes((prev) =>
    prev.map((q) =>
      q.id === id ? { ...q, status } : q
    ));
  };

  const statusColor = (status) => {
  switch (status) {
    case "new":
      return "text-blue-600";
    case "contacted":
      return "text-yellow-600";
    case "in_progress":
      return "text-purple-600";
    case "completed":
      return "text-green-600";
    default:
      return "";
  }
};


  return (
    <AuthLayout>
      <div className="p-6">
        <h1 className="text-xl font-bold mb-6">Quotes</h1>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th>Name</th>
              <th>Phone</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {quotes.map(q => (
              <tr key={q.id} className="border-t">
                <td>{q.name}</td>
                <td>{q.phone}</td>
                <td>{q.job_type}</td>
                <td className={statusColor(q.status)}>
                  <select
                    value={q.status}
                    onChange={(e) => updateStatus(q.id, e.target.value)}
                    className="border p-1 rounded"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>    
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </AuthLayout>
  );
}
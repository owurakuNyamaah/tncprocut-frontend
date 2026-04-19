import { useEffect, useState } from "react";
import api from "./auth/axiosSetup";
import AuthLayout from "./layouts/AuthLayout";

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    api.get("/invoices").then((res) => setInvoices(res.data));
  }, []);

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-6">Invoices</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th>Invoice #</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id} className="border-t">
              <td>{inv.invoice_number}</td>
              <td>{inv.quote?.name}</td>
              <td>GHS {inv.amount}</td>
              <td>{inv.status}</td>
              <td className="underline text-blue-800">download</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AuthLayout>
  );
}
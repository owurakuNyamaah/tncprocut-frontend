import { Navigate } from "react-router-dom";
import { getToken } from "../auth/auth";

export default function AuthLayout({ children }) {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin top bar */}
      <header className="bg-white shadow px-6 py-4 flex justify-between">
        <h1 className="font-semibold text-lg">TnC ProCut Admin</h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          className="text-sm border px-4 py-2 rounded"
        >
          Logout
        </button>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}
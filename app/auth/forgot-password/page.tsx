"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleResetRequest = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate sending the password reset link (you'd integrate with an email service)
    alert("Password reset link sent to " + email);
    setMessage(`A password reset link has been sent to ${email}.`);

    // Redirect to sign-in page after a short delay
    setTimeout(() => router.push("/auth/signin"), 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h2>
        <form onSubmit={handleResetRequest}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded mt-4"
          >
            Send Reset Link
          </button>
        </form>

        {message && <p className="mt-4 text-center text-green-500">{message}</p>}

        <div className="mt-4 text-center">
          <button
            onClick={() => router.push("/auth/signin")}
            className="text-sm text-blue-500"
          >
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

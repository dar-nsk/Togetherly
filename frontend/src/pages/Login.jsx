import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await axios.post("http://localhost:8080/api/auth/login", { email, password });
    alert("Logged in!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl">Login</h1>
      <input className="border p-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="border p-2 mt-2" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className="bg-blue-500 text-white p-2 mt-2" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

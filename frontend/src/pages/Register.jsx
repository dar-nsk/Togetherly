import { useState } from "react";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleRegister = async () => {
    await axios.post("http://localhost:8080/api/auth/register", user);
    alert("Registered!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl">Register</h1>
      <input className="border p-2" placeholder="Name" onChange={e => setUser({ ...user, name: e.target.value })} />
      <input className="border p-2 mt-2" placeholder="Email" onChange={e => setUser({ ...user, email: e.target.value })} />
      <input className="border p-2 mt-2" type="password" placeholder="Password" onChange={e => setUser({ ...user, password: e.target.value })} />
      <button className="bg-green-500 text-white p-2 mt-2" onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;

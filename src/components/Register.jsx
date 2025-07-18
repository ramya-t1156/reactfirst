import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);

  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedRoles((prev) => [...prev, value]);
    } else {
      setSelectedRoles((prev) => prev.filter((role) => role !== value));
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://springbootfirst-1-xp06.onrender.com/api/auth/register",
        {
          name,
          email,
          password,
          userName,
          roleNames: selectedRoles,
        }
      );
      console.log(response);
      navigate("/login");
    } catch (e) {
      console.log("Register error", e);
      alert("Register error!!");
    }
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              Username:
            </label>
            <input
              type="text"
              id="userName"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Select Roles:</label>
            <div className="form-check">
              <input
                type="checkbox"
                id="admin"
                className="form-check-input"
                value="ADMIN"
                onChange={handleRoleChange}
              />
              <label htmlFor="admin" className="form-check-label">
                Admin
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="user"
                className="form-check-input"
                value="USER"
                onChange={handleRoleChange}
              />
              <label htmlFor="user" className="form-check-label">
                User
              </label>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary w-50">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

import Navs from "../Component/Navs";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // ✅ BACKEND-SAFE PAYLOAD
      const payload = {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        password: form.password,
      };

      await axios.post(
        "https://fullstack-student-backend.onrender.com/api/auth/register",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      navigate("/log");
    } catch (err) {
      console.error("REGISTER ERROR:", err.response?.data);
      setError(
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navs />
      <Box
        sx={{
          minHeight: "100dvh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1565c0, #42a5f5)",
        }}
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Paper sx={{ p: 4, width: 360, borderRadius: 3 }}>
            <Typography textAlign="center" mb={2} fontWeight="bold" color="error">
              {error || "Create Account"}
            </Typography>

            <form onSubmit={handleRegister}>
              <TextField
                name="firstName"
                label="First Name"
                fullWidth
                required
                onChange={handleChange}
                sx={{ mb: 1.5 }}
              />

              <TextField
                name="lastName"
                label="Last Name"
                fullWidth
                required
                onChange={handleChange}
                sx={{ mb: 1.5 }}
              />

              <TextField
                name="email"
                label="Email"
                type="email"
                fullWidth
                required
                onChange={handleChange}
                sx={{ mb: 1.5 }}
              />

              <TextField
                name="password"
                label="Password"
                type="password"
                fullWidth
                required
                onChange={handleChange}
                sx={{ mb: 2 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
              >
                {loading ? <CircularProgress size={22} /> : "Register"}
              </Button>
            </form>

            <Typography textAlign="center" mt={2}>
              Already have an account? <Link to="/log">Login</Link>
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </>
  );
};

export default Register;

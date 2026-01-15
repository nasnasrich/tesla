// src/Pages/Register.jsx
import Navs from "../Component/Navs";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff, LockOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // ✅ BACKEND-COMPATIBLE PAYLOAD
    const payload = {
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      password: form.password,
    };

    try {
      await axios.post(
        "https://fullstack-student-backend.onrender.com/api/auth/register",
        payload
      );

      navigate("/log"); // redirect to login
    } catch (err) {
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
          minHeight: "98dvh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1565c0, #42a5f5)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Paper
            elevation={10}
            sx={{
              p: { xs: 4, sm: 5 },
              width: { xs: "90%", sm: 400 },
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #1976d2, #42a5f5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              <LockOutlined sx={{ fontSize: 40, color: "#fff" }} />
            </Box>

            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ mb: 3, color: error ? "error.main" : "#0d47a1" }}
            >
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
                type={showPassword ? "text" : "password"}
                fullWidth
                required
                onChange={handleChange}
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Register"
                )}
              </Button>
            </form>

            <Typography mt={3}>
              Already have an account?{" "}
              <Link to="/log">Login</Link>
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </>
  );
};

export default Register;

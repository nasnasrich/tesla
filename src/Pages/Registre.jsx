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
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(
        "https://fullstack-student-backend.onrender.com/api/auth/register",
        form
      );
      navigate("/log"); // redirect to login
    } catch (err) {
      setError(err?.response?.data?.message || err?.response?.data?.error || "Registration failed");
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
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Paper
            elevation={10}
            sx={{
              p: { xs: 4, sm: 5 },
              width: { xs: "90%", sm: 400 },
              borderRadius: "20px",
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Lock Icon */}
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
                boxShadow: "0 4px 20px rgba(25,118,210,0.5)",
              }}
            >
              <LockOutlined sx={{ fontSize: 40, color: "#fff" }} />
            </Box>

            {/* Title */}
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ mb: 3, color: error ? "error.main" : "#0d47a1" }}
            >
              {error || "Create Account"}
            </Typography>

            <form onSubmit={handleRegister}>
              {["firstName","lastName","email","password","phoneNumber","address"].map((field) => (
                <TextField
                  key={field}
                  name={field}
                  label={field.replace(/([A-Z])/g, " $1")}
                  type={field === "password" ? (showPassword ? "text" : "password") : "text"}
                  fullWidth
                  size="small"
                  onChange={handleChange}
                  sx={{ mb: 1.5, "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                  required={field !== "phoneNumber" && field !== "address"}
                  InputProps={
                    field === "password"
                      ? {
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }
                      : null
                  }
                />
              ))}

              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  py: 1.4,
                  fontWeight: "bold",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontSize: "1rem",
                  background: "linear-gradient(135deg, #1976d2, #0d47a1)",
                  boxShadow: "0 6px 25px rgba(13,71,161,0.4)",
                  "&:hover": { background: "linear-gradient(135deg, #1565c0, #0d47a1)" },
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Register"}
              </Button>
            </form>

            <Typography textAlign="center" mt={3}>
              Already have an account? <Link to="/log" style={{ color: "#1976d2", fontWeight: 600 }}>Login</Link>
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </>
  );
};

export default Register;

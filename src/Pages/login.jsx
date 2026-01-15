import Nav from "../Component/Nav";
import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const Log = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://fullstack-student-backend.onrender.com/api/auth/login",
        { email, password }
      );

      // ✅ STORE AUTH
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/");
    } catch (err) {
      setError(
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav/>
      <Box
        sx={{
          minHeight: "98dvh",
          marginTop: "3px",
          boxShadow: "5px 5px 5px rgb(30, 30, 31)",
          width: "100%",
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
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
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
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
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
                boxShadow: "0 4px 20px rgba(25, 118, 210, 0.5)",
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
              {error || "Welcome Back"}
            </Typography>

            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": { borderRadius: "12px" },
              }}
            />

            {/* Password */}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": { borderRadius: "12px" },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Button */}
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleLogin}
              disabled={loading}
              sx={{
                py: 1.4,
                fontWeight: "bold",
                borderRadius: "12px",
                textTransform: "none",
                fontSize: "1rem",
                background: "linear-gradient(135deg, #1976d2, #0d47a1)",
                boxShadow: "0 6px 25px rgba(13, 71, 161, 0.4)",
                "&:hover": {
                  background: "linear-gradient(135deg, #1565c0, #0d47a1)",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Login"
              )}
            </Button>

            {/* Footer */}
            <Typography
              variant="body2"
              sx={{ mt: 3, color: "text.secondary" }}
            >
              Don’t have an account?{" "}
              <a
                href="/register"
                style={{
                  color: "#1976d2",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Sign up
              </a>
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </>
  );
};

export default Log;

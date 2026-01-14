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
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
        { email, password }
      );

      // OPTIONAL: if backend sends token/user
      // localStorage.setItem("token", res.data.token);

      navigate("/Hero");
    } catch (err) {
      // ✅ ALWAYS convert error to STRING
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Login failed. Please check your credentials.";

      setError(String(message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1565c0, #42a5f5)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Paper
          elevation={8}
          sx={{
            width: 320,
            p: 2.5,
            borderRadius: 2,
            background: "rgba(255,255,255,0.97)",
          }}
        >
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1976d2, #42a5f5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 1.5,
            }}
          >
            <LockOutlined sx={{ color: "#fff" }} />
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              mb: 2,
              fontWeight: "bold",
              color: error ? "error.main" : "#0d47a1",
            }}
          >
            {error || "Welcome Back"}
          </Typography>

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              size="small"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 1.5 }}
              required
            />

            <TextField
              fullWidth
              size="small"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setShowPassword((p) => !p)}
                    >
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
                <CircularProgress size={22} color="inherit" />
              ) : (
                "Login"
              )}
            </Button>
          </form>

          <Typography sx={{ mt: 2, textAlign: "center", fontSize: "0.85rem" }}>
            Don’t have an account?{" "}
            <Link to="/Registration" style={{ fontWeight: 600 }}>
              Sign up
            </Link>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Login;

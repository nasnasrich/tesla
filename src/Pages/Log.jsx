import React, { useState } from "react";
import Navs from "../Component/Navs"
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

const Log = () => {
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

    navigate("/Hero");
  } catch (err) {
    setError(err?.response?.data?.error || "Login failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <>
    <Navs/>
    <Box
      sx={{
        minHeight: "98dvh",
        marginTop: "1vh",
        boxShadow: "5px 5px 5px rgb(30, 30, 31)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1565c0, #42a5f5)",
        
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1536px", // same as Navbar maxWidth="xl"
          mx: "auto",
          px: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Paper
            elevation={8}
            sx={{
              width: "100%",
              maxWidth: 320,
              p: { xs: 2, sm: 2.5 },
              borderRadius: "16px",
              background: "rgba(255,255,255,0.97)",
              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
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
              <LockOutlined sx={{ fontSize: 26, color: "#fff" }} />
            </Box>

            <Typography
              sx={{
                textAlign: "center",
                mb: 2,
                fontWeight: "bold",
                fontSize: "1.25rem",
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
                        onClick={() => setShowPassword(!showPassword)}
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
                sx={{
                  py: 1.2,
                  fontWeight: "bold",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontSize: "0.95rem",
                  background: "linear-gradient(135deg, #1976d2, #0d47a1)",
                  boxShadow: "0 4px 18px rgba(13,71,161,0.4)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #1565c0, #0d47a1)",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={22} color="inherit" />
                ) : (
                  "Login"
                )}
              </Button>
            </form>

            <Typography
              variant="body2"
              sx={{ mt: 2, textAlign: "center", fontSize: "0.85rem" }}
            >
              Don’t have an account?{" "}
              <Link
                to="/Hero"
                style={{
                  color: "#1976d2",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Sign up
              </Link>
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </Box>
        </>

  );
};

export default Log;

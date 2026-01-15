import Nav from "../Component/Nav"
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const RegistrationScreen = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const Register = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(
        "https://fullstack-student-backend.onrender.com/api/auth",
        {
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          address,
        }
      );
      navigate("/Login");
    } catch (err) {
      setError(err?.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Nav/>
    <Box
      sx={{
        minHeight: "100dvh",
        width: "100%",
        marginTop: "3px",
        boxShadow: "5px 5px 5px rgb(30, 30, 31)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1565c0, #42a5f5)",
      }}
    >
      {/* Container to match Navbar width */}
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
            <Typography
              sx={{
                textAlign: "center",
                mb: 2,
                fontWeight: "bold",
                fontSize: "1.25rem",
                color: error ? "error.main" : "#0d47a1",
              }}
            >
              {error || "Create Account"}
            </Typography>

            <form onSubmit={Register}>
              <TextField
                fullWidth
                size="small"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={{ mb: 1.5 }}
                required
              />
              <TextField
                fullWidth
                size="small"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={{ mb: 1.5 }}
                required
              />
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 1.5 }}
                required
              />
              <TextField
                fullWidth
                size="small"
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                sx={{ mb: 1.5 }}
              />
              <TextField
                fullWidth
                size="small"
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                sx={{ mb: 2 }}
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
                  "Register"
                )}
              </Button>
            </form>

            <Typography
              variant="body2"
              sx={{ mt: 2, textAlign: "center", fontSize: "0.85rem" }}
            >
              Already have an account?{" "}
              <Link
                to="/Login"
                style={{
                  color: "#1976d2",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </Box>
        </>

  );
};

export default RegistrationScreen;

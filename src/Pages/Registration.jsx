import Nav from "../Component/Navs";
import React, { useState } from "react";
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
import { useNavigate, Link } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    country: "",
    state: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const Register = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "https://backend-classswork.onrender.com/api/users/register",
        form
      );
      console.log(res.data); // check response
      navigate("/login");
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
      <Nav/>
      <Box
        sx={{
          minHeight: "85vh",
          marginLeft: "1px",
          marginTop: "1vh",
          boxShadow: "4px 4px 5px rgb(0, 0, 0)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1565c0, #42a5f5)",
          p: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%", maxWidth: 400 }}
        >
          <Paper
            elevation={10}
            sx={{
              p: 3,
              borderRadius: "20px",
              textAlign: "center",
              background: "rgba(255,255,255,0.95)",
              maxHeight: { xs: "90vh", sm: "auto" },
              overflowY: { xs: "auto", sm: "visible" },
            }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              {error || "Create Account"}
            </Typography>

            <form onSubmit={Register}>
              {[
                "name",
                "email",
                "password",
                "phoneNumber",
                "address",
                "country",
                "state",
              ].map((field) => (
                <TextField
                  key={field}
                  name={field}
                  label={field.replace(/([A-Z])/g, " $1")}
                  type={field === "password" ? "password" : "text"}
                  fullWidth
                  size="small"
                  onChange={handleChange}
                  sx={{ mb: 1.5 }}
                  required={["name", "email", "password"].includes(field)}
                />
              ))}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{
                  py: 1.4,
                  fontWeight: "bold",
                  borderRadius: "12px",
                  textTransform: "none",
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Register"}
              </Button>
            </form>

            <Typography variant="body2" sx={{ mt: 3 }}>
              Already have an account?{" "}
              <Link to="/log" style={{ color: "#1976d2", fontWeight: 600 }}>
                Login
              </Link>
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </>
  );
};

export default Registration;

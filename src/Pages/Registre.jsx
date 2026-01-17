import Nav from "../Component/Nav";
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

const Registre = () => {
  const navigate = useNavigate();

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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const Register = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(
        "https://fullstack-student-backend.onrender.com/api/auth/register",
        form
      );
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
      <Nav />
      <Box
        sx={{
          minHeight: "100dvh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1565c0, #42a5f5)",
          p: 2,
        }}
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Paper
            sx={{
              p: { xs: 2, sm: 3 },          // smaller padding on phones
              borderRadius: 3,
              width: { xs: "95vw", sm: 400 }, // almost full width on phones
              maxWidth: 400,
              boxSizing: "border-box",
              maxHeight: { xs: "90vh", sm: "auto" }, // limit vertical height on phones
              overflowY: { xs: "auto", sm: "visible" }, // scroll if too tall on small screens
            }}
          >
            <Typography textAlign="center" mb={2} fontWeight="bold">
              {error || "Create Account"}
            </Typography>

            <form onSubmit={Register}>
              {[
                "firstName",
                "lastName",
                "email",
                "password",
                "phoneNumber",
                "address",
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
                  required={field !== "phoneNumber" && field !== "address"}
                />
              ))}

              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={loading}
              >
                {loading ? <CircularProgress size={22} /> : "Register"}
              </Button>
            </form>

            <Typography textAlign="center" mt={2}>
              Already have an account? <Link to="/login">Login</Link>
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </>
  );
};

export default Registre;

import Navs from "../Component/Navs";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Registre = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const formData = { name, email, password, phone, address };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/users/register`,
        formData
      );
      console.log(data);
      navigate("/log");
    } catch (error) {
      console.error(error);
      const errMsg =
        error.response?.data?.message ||
        error.message ||
        "Registration failed. Please try again.";
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navs />
      <Box
        sx={{
           minHeight: "95vh",
          // marginLeft: "1px",
          marginTop: "3px",
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
              marginLeft: "2px",
              overflowY: { xs: "auto", sm: "visible" },
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ mb: 2, color: error ? "error.main" : "#0d47a1" }}
            >
              {error || "Create Account"}
            </Typography>

            <form onSubmit={handleRegister}>
              {[
                { label: "Name", value: name, setValue: setName, required: true },
                { label: "Email", value: email, setValue: setEmail, type: "email", required: true },
                { label: "Password", value: password, setValue: setPassword, type: "password", required: true },
                { label: "Phone Number", value: phone, setValue: setPhone },
                { label: "Address", value: address, setValue: setAddress },
              ].map((field, idx) => (
                <TextField
                  key={idx}
                  fullWidth
                  label={field.label}
                  name={field.label.toLowerCase().replace(" ", "")}
                  type={field.type || "text"}
                  value={field.value}
                  onChange={(e) => field.setValue(e.target.value)}
                  sx={{ mb: 1.5 }}
                  required={field.required || false}
                />
              ))}

              <Button
                fullWidth
                type="submit"
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

export default Registre;

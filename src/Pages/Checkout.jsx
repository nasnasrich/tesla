import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useCart } from '../context/CartContext';
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const VALID_PROMO_CODES = ["051085", "1035859"];
const DISCOUNT_RATE = 0.2;

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 850 : 0;
  const baseTotal = subtotal + shipping;

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    zipcode: "",
    country: "",
    promocode: "",
  });

  const [promoIsValid, setPromoIsValid] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(baseTotal);
  const [loading, setLoading] = useState(false); // ✅ new state for progress

  useEffect(() => {
    const discount = promoIsValid ? baseTotal * DISCOUNT_RATE : 0;
    setDiscountAmount(discount);
    setFinalTotal(baseTotal - discount);
  }, [cart, promoIsValid, baseTotal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "promocode") {
      setPromoIsValid(VALID_PROMO_CODES.includes(value.trim()));
    }
  };

  const handleClick = () => {
    if (!cart.length) return alert("Your cart is empty");

    setLoading(true); // ✅ start loading

    emailjs.send(
      "service_q38m74b",
      "template_p551kh5",
      {
        ...form,
        cart_items: cart
          .map((i) => `${i.name} x ${i.quantity} = $${i.price * i.quantity}`)
          .join("\n"),
        subtotal: subtotal.toFixed(2),
        shipping,
        discount: discountAmount.toFixed(2),
        total: finalTotal.toFixed(2),
      },
      { publicKey: "XELIbT6q5i48YcO01" }
    )
      .then(() => {
        alert("Order in Process. Check your email for payment instructions");
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false); // ✅ stop loading
      });
  };

  const fieldOrder = [
    "name",
    "email",
    "address",
    "phone",
    "city",
    "zipcode",
    "country",
    "promocode",
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "40px 20px",
        marginTop: "5vh",
        boxShadow: "5px 5px 5px rgba(30,30,31), inset 0 0 5px rgba(25,25,26,0.22)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
          backgroundColor: "#2f4f4f",
          border: "1px solid rgba(0,0,0,0.3)",
          marginBottom: "5px",
          fontWeight: 700,
          letterSpacing: "2px",
          paddingTop: "1px",
          paddingBottom: "1px",
          color: "white",
          boxShadow: "5px 5px 5px rgb(30,30,31)",
        }}
      >
        Checkout
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* LEFT — FORM */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              backgroundColor: "#2f4f4f",
              border: "1px solid rgba(0,0,0,0.3)",
              boxShadow: "5px 5px 5px rgb(30,30,31)",
              paddingLeft: "10%",
              "@media (max-width:600px)": {
                paddingLeft: "0",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Cinzel', serif",
                marginBottom: "20px",
                marginLeft: "2%",
                color: "white",
              }}
            >
              Billing & Shipping Details
            </Typography>

            <Grid container spacing={2}>
              {fieldOrder.map((key) => (
                <Grid
                  item
                  xs={
                    key === "city" ||
                    key === "zipcode" ||
                    key === "country" ||
                    key === "promocode"
                      ? 6
                      : 12
                  }
                  key={key}
                >
                  <TextField
                    fullWidth
                    label={key.replace("_", " ").toUpperCase()}
                    name={key}
                    value={form[key]}
                    onChange={handleChange}
                    InputLabelProps={{ style: { color: "gold" } }}
                    sx={{
                      "& input": { color: "gold", width: "380px" },
                      "& fieldset": { borderColor: "gold" },
                    marginLeft: "2%",
                    }}
                  />

                  {key === "promocode" && form.promocode && (
                    <Typography
                      sx={{
                        mt: 1,
                        color: promoIsValid ? "lightgreen" : "orange",
                        fontSize: "0.9rem",
                      }}
                    >
                      {promoIsValid
                        ? "Promo applied — 20% discount active"
                        : "Invalid promo code"}
                    </Typography>
                  )}
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* RIGHT — SUMMARY */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              background: "whitesmoke",
              boxShadow: "5px 5px 5px rgb(30,30,31)",
              border: "1px solid rgb(30,30,31)",
              "@media (max-width:600px)": {
                marginTop: "20px",
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Cinzel', serif",
                marginBottom: "20px",
                color: "gold",
                width: "1200px",
                "@media (max-width:600px)": {
                  width: "100%",
                  textAlign: "center",
                },
              }}
            >
              Order Summary
            </Typography>

            {cart.length === 0 ? (
              <Typography sx={{ color: "gold", opacity: 0.7 }}>
                Your cart is empty.
              </Typography>
            ) : (
              <>
                {cart.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: "12px",
                    }}
                  >
                    <Typography>
                      {item.name} x {item.quantity}
                    </Typography>
                    <Typography>${item.price * item.quantity}</Typography>
                  </Box>
                ))}

                <Divider sx={{ my: 2, borderColor: "rgba(255,215,0,0.3)" }} />

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>Subtotal:</Typography>
                  <Typography>${subtotal.toFixed(2)}</Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1, mb: 2 }}>
                  <Typography>Shipping:</Typography>
                  <Typography>${shipping}</Typography>
                </Box>

                {promoIsValid && (
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography color="green">Discount (20%)</Typography>
                    <Typography color="green">
                      -${discountAmount.toFixed(2)}
                    </Typography>
                  </Box>
                )}

                <Divider sx={{ my: 2, borderColor: "rgba(255,215,0,0.3)" }} />

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ fontWeight: "bold" }}>Total:</Typography>
                  <Typography sx={{ fontWeight: "bold" }}>
                    ${finalTotal.toFixed(2)}
                  </Typography>
                </Box>

                <Button
                  onClick={handleClick}
                  disabled={loading} // ✅ disable button while loading
                  sx={{
                    mt: 3,
                    border: "1px solid rgba(0,0,0,0.3)",
                    boxShadow: "5px 5px 5px rgb(30,30,31)",
                    fontWeight: "bold",
                    position: "relative",
                  }}
                >
                  {loading ? (
                    <CircularProgress size={24} sx={{ color: "gold" }} />
                  ) : (
                    "Proceed to Payment"
                  )}
                </Button>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Checkout;

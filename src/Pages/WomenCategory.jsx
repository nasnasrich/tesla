import React, { useState } from 'react'
import { Box, Button, Card, CardMedia, CardContent, Typography, Snackbar } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useCart } from '../context/CartContext'
import ProductModal from '../Component/ProductModal'
import './WomenCategory.css'

import TeslaModelSPlaid from '../assets/TeslaModelSPlaid.jpg'
import TeslaModel3 from '../assets/TeslaModel3.jpg'
import TeslaModelXPlaid from '../assets/TeslaModelXPlaid.jpg'
import TeslaModelX from '../assets/TeslaModelX.jpg'
import Tre from '../assets/Tre.jpg'
import logrtk from '../assets/logrtk.jpg'

const WomenCategory = () => {
  const { addToCart } = useCart()

  const [activeTab, setActiveTab] = useState('TeslaModel')
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [currentProduct, setCurrentProduct] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalProduct, setModalProduct] = useState(null)

  const products = [
    { id: 1, name: 'Tesla Model 3 Plaid', image: TeslaModelSPlaid, price: 43880, description: 'All-Electric Compact Sedan' },
    { id: 2, name: 'Tesla Model 3', image: TeslaModel3, price: 15999, description: 'Premium Electric Sedan' },
    { id: 3, name: 'Tesla Model X Plaid', image: TeslaModelXPlaid, price: 96380, description: 'Luxury High-Performance Electric SUV' },
    { id: 4, name: 'Tesla Model X Performance', image: TeslaModelX, price: 59130, description: 'Luxury All-Electric SUV' },
    { id: 5, name: 'Tesla Semi Truck', image: Tre, price: 180000, description: 'All-Electric Commercial Truck' },
    { id: 6, name: 'Tesla Cybertruck Foundation Series', image: logrtk, price: 120000, description: 'Bold Design. All-Electric Pickup' },
  ]

  // When modal confirms add to cart
  const handleAddToCart = (product) => {
    addToCart(product)
    setCurrentProduct(product)
    setOpenSnackbar(true)
  }

  return (
    <Box className="women-category-page">
      <div className="products-grid grid-standard">
        {products.map(product => (
          <Card key={product.id} className="product-card">
            <CardMedia
              component="img"
              height="320"
              image={product.image}
              alt={product.name}
              onClick={() => {
                setModalProduct(product)
                setModalOpen(true)
              }}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="h6">${product.price}</Typography>
              <Button
                fullWidth
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                className="add-to-cart-btn"
                onClick={() => {
                  setModalProduct(product)
                  setModalOpen(true)
                }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* PRODUCT MODAL */}
      <ProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={modalProduct}
        onAdd={handleAddToCart}
      />

      {/* SNACKBAR */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={currentProduct ? `Added ${currentProduct.name} to your cart` : ''}
      />
    </Box>
  )
}

export default WomenCategory

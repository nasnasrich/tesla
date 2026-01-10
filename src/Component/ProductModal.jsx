import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';

// Tesla car colors
const defaultColors = ['Pearl White', 'Solid Black', 'Midnight Silver', 'Deep Blue', 'Red'];

const ProductModal = ({ open, onClose, product, onAdd }) => {
  const [color, setColor] = useState(product?.selectedColor || 'Deep Blue');

  React.useEffect(() => {
    setColor(product?.selectedColor || 'Deep Blue');
  }, [product]);

  if (!product) return null;

  const colors = product?.colors?.length ? product.colors : defaultColors;

  const handleAdd = () => {
    const prodWithColor = { ...product, selectedColor: color };
    onAdd && onAdd(prodWithColor);
    onClose && onClose();
  };

  return (
    <Dialog open={!!open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <Box sx={{ flex: '0 0 220px' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {product.description || 'Experience the ultimate electric driving with Tesla.'}
            </Typography>

            <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
              ${product.price.toLocaleString()}
            </Typography>

            {/* Optional Tesla specs */}
            {product.range && (
              <Typography variant="body2" sx={{ mb: 1 }}>
                🔋 Range: {product.range} miles
              </Typography>
            )}
            {product.topSpeed && (
              <Typography variant="body2" sx={{ mb: 1 }}>
                ⚡ Top Speed: {product.topSpeed} mph
              </Typography>
            )}

            <FormControl fullWidth>
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId="color-label"
                label="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                size="small"
              >
                {colors.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button variant="contained" onClick={handleAdd} color="primary">
          Add to Garage
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal;

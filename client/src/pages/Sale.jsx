import { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  Button,
} from '@mui/material';
import image11 from '../assets/photos/image11.jpg';
import image12 from '../assets/photos/image20.jpg';
import image13 from '../assets/photos/image23.jpg';
import image14 from '../assets/photos/image14.jpg';

const saleProducts = [
  {
    id: 1,
    name: 'Spring Blossom',
    description: 'A light and airy floral fragrance scent',
    originalPrice: 99.99,
    salePrice: 79.99,
    discount: 20,
    image: image11,
  },
  {
    id: 2,
    name: 'Velvet Night',
    description: 'Rich and mysterious oriental scent',
    originalPrice: 129.99,
    salePrice: 89.99,
    discount: 30,
    image: image12,
  },
  {
    id: 3,
    name: 'Azure Sky',
    description: 'Fresh and invigorating aquatic fragrance',
    originalPrice: 89.99,
    salePrice: 69.99,
    discount: 22,
    image: image13,
  },
  {
    id: 4,
    name: 'Desert Rose',
    description: 'Exotic blend of rose and spices scent',
    originalPrice: 119.99,
    salePrice: 79.99,
    discount: 33,
    image: image14,
  },
];

function Sale() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Special Offers
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Limited time deals on premium fragrances
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {saleProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                position: 'relative',
                '&:hover': {
                  transform: 'scale(1.03)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <Chip
                label={`${product.discount}% OFF`}
                color="error"
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  zIndex: 1,
                }}
              />
              <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="h6" color="error">
                      ${product.salePrice}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary" 
                      sx={{ textDecoration: 'line-through' }}
                    >
                      ${product.originalPrice}
                    </Typography>
                  </Box>
                  <Button variant="contained" color="primary">
                    Add to Cart
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Sale; 
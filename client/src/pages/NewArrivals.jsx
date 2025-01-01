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
  Rating,
} from '@mui/material';
import image16 from '../assets/photos/image22.jpg';
import image17 from '../assets/photos/image23.jpg';
import image18 from '../assets/photos/image18.jpg';
import image19 from '../assets/photos/image19.jpg';
import image20 from '../assets/photos/image21.jpg';

const newArrivals = [
  {
    id: 1,
    name: 'Moonlit Garden',
    description: 'A magical blend of night-blooming jasmine and vanilla orchid',
    price: 129.99,
    image: image16,
    rating: 5,
    isNew: true,
  },
  {
    id: 2,
    name: 'Golden Sunset',
    description: 'Warm amber and sweet orange blossom with a touch of sandalwood',
    price: 119.99,
    image: image17,
    rating: 4.5,
    isNew: true,
  },
  {
    id: 3,
    name: 'Urban Spirit',
    description: 'Modern blend of leather, spices, and woody notes',
    price: 139.99,
    image: image18,
    rating: 4.8,
    isNew: true,
  },
  {
    id: 4,
    name: 'Crystal Rain',
    description: 'Fresh aquatic scent with hints of lily and clean musk',
    price: 109.99,
    image: image19,
    rating: 4.7,
    isNew: true,
  },
];

function NewArrivals() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        New Arrivals
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center" paragraph>
        Discover our latest fragrance releases
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {newArrivals.map((product) => (
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
              {product.isNew && (
                <Chip
                  label="New"
                  color="secondary"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 1,
                  }}
                />
              )}
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    ${product.price}
                  </Typography>
                  <Rating value={product.rating} precision={0.5} readOnly />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default NewArrivals; 
import { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import image1 from '../assets/photos/image16.jpg';
import image2 from '../assets/photos/image18.jpg';
import image3 from '../assets/photos/image12.jpg';
import image4 from '../assets/photos/image14.jpg';
import image5 from '../assets/photos/image20.jpg';
import image6 from '../assets/photos/image22.jpg';
import image7 from '../assets/photos/image11.jpg';
import image8 from '../assets/photos/image19.jpg';
import image9 from '../assets/photos/image23.jpg';
import image10 from '../assets/photos/image21.jpg';
import image11 from '../assets/photos/image17.jpg';
import image12 from '../assets/photos/image13.jpg';
import image13 from '../assets/photos/image15.jpg';
import image14 from '../assets/photos/image2.jpg';
import image15 from '../assets/photos/image5.jpg';
import image16 from '../assets/photos/image10.jpg';

const collections = [
  {
    id: 1,
    name: 'Summer Collection',
    description: 'Light and refreshing fragrances for the warm season',
    image: image1,
  },
  {
    id: 2,
    name: 'Winter Collection',
    description: 'Warm and cozy scents for the cold months',
    image: image2,
  },
  {
    id: 3,
    name: 'Luxury Collection',
    description: 'Premium fragrances for special occasions',
    image: image3,
  },
  {
    id: 4,
    name: 'Classic Collection',
    description: 'Timeless scents that never go out of style',
    image: image4,
  },
  {
    id: 5,
    name: 'Oriental Collection',
    description: 'Exotic and mysterious fragrances from the East',
    image: image5,
  },
  {
    id: 6,
    name: 'Fresh Collection',
    description: 'Crisp and invigorating scents for daily wear',
    image: image6,
  },
  {
    id: 7,
    name: 'Floral Collection',
    description: 'Beautiful bouquet of floral fragrances',
    image: image7,
  },
  {
    id: 8,
    name: 'Evening Collection',
    description: 'Sophisticated scents for special nights',
    image: image8,
  },
  {
    id: 9,
    name: 'Signature Collection',
    description: 'Unique and distinctive signature scents',
    image: image9,
  },
  {
    id: 10,
    name: 'Aqua Collection',
    description: 'Fresh and marine-inspired fragrances',
    image: image10,
  },
  {
    id: 11,
    name: 'Citrus Collection',
    description: 'Energizing and zesty citrus blends',
    image: image11,
  },
  {
    id: 12,
    name: 'Woody Collection',
    description: 'Rich and warm woody fragrances',
    image: image12,
  },
  {
    id: 13,
    name: 'Royal Collection',
    description: 'Majestic and opulent fragrances',
    image: image13,
  },
  {
    id: 14,
    name: 'Sport Collection',
    description: 'Dynamic and energetic scents',
    image: image14,
  },
  {
    id: 15,
    name: 'Vintage Collection',
    description: 'Classic and retro-inspired fragrances',
    image: image15,
  },
  {
    id: 16,
    name: 'Modern Collection',
    description: 'Contemporary and trendy scents',
    image: image16,
  },
];

function Collections() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Our Collections
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" paragraph>
          Discover our carefully curated collections of premium fragrances
        </Typography>
      </Container>
      
      <Container 
        maxWidth="lg" 
        sx={{ 
          mt: 4,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Grid 
          container 
          spacing={1.5} 
          sx={{ 
            maxWidth: '97%',
            justifyContent: 'center'
          }}
        >
          {collections.map((collection) => (
            <Grid item key={collection.id} xs={12} sm={6} md={3}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  maxWidth: 250,
                  mx: 'auto',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={collection.image}
                  alt={collection.name}
                  sx={{ 
                    objectFit: 'cover',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
                  <Typography gutterBottom variant="subtitle2" component="h2" fontWeight="bold">
                    {collection.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                      mb: 1,
                      fontSize: '0.8rem',
                      minHeight: '2.4rem',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {collection.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary"
                    size="small"
                    fullWidth
                    sx={{
                      mt: 'auto',
                      fontSize: '0.75rem',
                      py: 0.5,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: 2,
                      },
                    }}
                  >
                    Explore Collection
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Collections; 
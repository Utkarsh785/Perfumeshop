import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Paper,
  CircularProgress,
  Alert,
  CardActionArea,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { getProducts } from '../services/api';

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[4],
  },
}));

const Banner = styled(Paper)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[800],
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '400px',
}));

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        console.log('Fetched products:', data);
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleShopNowClick = () => {
    const productsSection = document.getElementById('products-section');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box>
      <Banner>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                ml: { md: 6 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '400px',
              }}
            >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Discover Your Signature Scent
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Explore our collection of luxury fragrances crafted by world-renowned perfumers
              </Typography>
              <Box>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  onClick={handleShopNowClick}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Banner>

      <Container sx={{ py: 8 }} maxWidth="lg" id="products-section">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Featured Products
        </Typography>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error" sx={{ my: 2 }}>
            {error}
          </Alert>
        ) : products.length === 0 ? (
          <Alert severity="info" sx={{ my: 2 }}>
            No products available at the moment.
          </Alert>
        ) : (
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={3}>
                <ProductCard>
                  <CardActionArea onClick={() => handleProductClick(product._id)}>
                    <CardMedia
                      component="img"
                      height="280"
                      image={product.image}
                      alt={product.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="h3">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {product.description}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h6" color="primary">
                          ${product.price}
                        </Typography>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                        >
                          View Details
                        </Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </ProductCard>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default Home; 
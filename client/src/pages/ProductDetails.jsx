import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  CircularProgress,
  Alert,
  Paper,
  Chip,
  Rating,
  Divider,
  TextField,
  Card,
  CardContent,
  IconButton,
  Stack,
  Popover,
  Tooltip,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Pinterest as PinterestIcon,
  Share as ShareIcon,
  WhatsApp as WhatsAppIcon,
} from '@mui/icons-material';
import { getProduct, getProductReviews, addReview } from '../services/api';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [newReview, setNewReview] = useState({ rating: 0, comment: '', user: '' });
  const [shareAnchorEl, setShareAnchorEl] = useState(null);
  const [reviewError, setReviewError] = useState(null);

  useEffect(() => {
    const fetchProductAndReviews = async () => {
      try {
        setLoading(true);
        const [productData, reviewsData] = await Promise.all([
          getProduct(id),
          getProductReviews(id)
        ]);
        
        setProduct(productData);
        setReviews(reviewsData);
        
        if (productData.sizes && productData.sizes.length > 0) {
          setSelectedSize(productData.sizes[0]);
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductAndReviews();
  }, [id]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    alert('Added to cart!');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleShareClick = (event) => {
    setShareAnchorEl(event.currentTarget);
  };

  const handleShareClose = () => {
    setShareAnchorEl(null);
  };

  const handleSocialShare = (platform) => {
    const url = window.location.href;
    const text = `Check out ${product.name} - ${product.description}`;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: product.name,
            text: product.description,
            url: url
          });
          return;
        }
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    handleShareClose();
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setReviewError(null);

    if (!newReview.user.trim()) {
      setReviewError('Please enter your name');
      return;
    }

    try {
      const reviewData = {
        productId: id,
        ...newReview
      };
      
      const addedReview = await addReview(reviewData);
      setReviews(prevReviews => [addedReview, ...prevReviews]);
      setNewReview({ rating: 0, comment: '', user: '' });
      
    } catch (err) {
      console.error('Error submitting review:', err);
      setReviewError('Failed to submit review. Please try again.');
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 8 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container sx={{ py: 8 }}>
        <Alert severity="info">Product not found.</Alert>
      </Container>
    );
  }

  const shareOpen = Boolean(shareAnchorEl);
  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length 
    : 0;

  return (
    <Container sx={{ py: 8 }}>
      <Button
        onClick={handleBackClick}
        variant="outlined"
        sx={{ mb: 4 }}
      >
        Back to Products
      </Button>

      <Grid container spacing={6}>
        {/* Product Image */}
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
            <Box
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '500px',
                objectFit: 'cover',
                borderRadius: 1,
              }}
            />
          </Paper>
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} md={6}>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Typography variant="h4" component="h1" gutterBottom>
                {product.name}
              </Typography>
              <IconButton 
                onClick={handleShareClick}
                color="primary"
                aria-label="share"
                size="large"
              >
                <ShareIcon />
              </IconButton>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Rating value={averageRating} precision={0.5} readOnly />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
              </Typography>
            </Box>

            <Typography variant="h5" color="primary" gutterBottom>
              ${product.price}
            </Typography>

            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>

            <Divider sx={{ my: 3 }} />

            {/* Size Selection */}
            <Typography variant="h6" gutterBottom>
              Select Size
            </Typography>
            <Box sx={{ mb: 3 }}>
              {product.sizes.map((size) => (
                <Chip
                  key={size}
                  label={size}
                  onClick={() => handleSizeSelect(size)}
                  color={selectedSize === size ? 'primary' : 'default'}
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Box>

            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                Add to Cart
              </Button>
            </Box>

            {/* Additional Info */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Category: {product.category}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Availability: {product.inStock ? 'In Stock' : 'Out of Stock'}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Reviews Section */}
        <Grid item xs={12}>
          <Divider sx={{ my: 4 }} />
          <Typography variant="h4" gutterBottom>
            Customer Reviews
          </Typography>

          {/* Write Review Form */}
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Write a Review
              </Typography>
              {reviewError && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {reviewError}
                </Alert>
              )}
              <form onSubmit={handleReviewSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  value={newReview.user}
                  onChange={(e) => setNewReview(prev => ({ ...prev, user: e.target.value }))}
                  sx={{ mb: 2 }}
                  required
                />
                <Box sx={{ mb: 2 }}>
                  <Typography component="legend">Your Rating</Typography>
                  <Rating
                    value={newReview.rating}
                    onChange={(_, value) => setNewReview(prev => ({ ...prev, rating: value }))}
                  />
                </Box>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="Share your thoughts about this product..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                  sx={{ mb: 2 }}
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                  disabled={!newReview.rating || !newReview.comment.trim() || !newReview.user.trim()}
                >
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Existing Reviews */}
          {reviews.length === 0 ? (
            <Alert severity="info" sx={{ my: 2 }}>
              No reviews yet. Be the first to review this product!
            </Alert>
          ) : (
            reviews.map((review) => (
              <Card key={review._id} sx={{ mb: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="h6">{review.user}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(review.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Rating value={review.rating} readOnly />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {review.comment}
                  </Typography>
                </CardContent>
              </Card>
            ))
          )}
        </Grid>
      </Grid>

      {/* Share Menu */}
      <Popover
        open={shareOpen}
        anchorEl={shareAnchorEl}
        onClose={handleShareClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Paper sx={{ p: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 2, px: 1 }}>
            Share this product
          </Typography>
          <Stack direction="row" spacing={1}>
            <Tooltip title="Share on Facebook">
              <IconButton 
                color="primary" 
                onClick={() => handleSocialShare('facebook')}
                sx={{ 
                  '&:hover': { 
                    transform: 'scale(1.1)',
                    bgcolor: 'rgba(66, 103, 178, 0.1)' 
                  } 
                }}
              >
                <FacebookIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share on Twitter">
              <IconButton 
                color="primary" 
                onClick={() => handleSocialShare('twitter')}
                sx={{ 
                  '&:hover': { 
                    transform: 'scale(1.1)',
                    bgcolor: 'rgba(29, 161, 242, 0.1)' 
                  } 
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share on Pinterest">
              <IconButton 
                color="primary" 
                onClick={() => handleSocialShare('pinterest')}
                sx={{ 
                  '&:hover': { 
                    transform: 'scale(1.1)',
                    bgcolor: 'rgba(230, 0, 35, 0.1)' 
                  } 
                }}
              >
                <PinterestIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share on WhatsApp">
              <IconButton 
                color="primary" 
                onClick={() => handleSocialShare('whatsapp')}
                sx={{ 
                  '&:hover': { 
                    transform: 'scale(1.1)',
                    bgcolor: 'rgba(37, 211, 102, 0.1)' 
                  } 
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Paper>
      </Popover>
    </Container>
  );
}

export default ProductDetails; 
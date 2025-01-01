import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Pinterest as PinterestIcon,
  LocalMall as LocalMallIcon,
} from '@mui/icons-material';

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        mt: 'auto',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      {/* Upper Footer */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocalMallIcon sx={{ mr: 1, fontSize: '2rem', color: theme.palette.secondary.main }} />
              <Typography variant="h5" fontWeight="bold" sx={{ letterSpacing: 1 }}>
                PERFUME SHOP
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Discover the finest collection of luxury perfumes at Perfume Shop.
              We bring you exclusive fragrances from around the world.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              <IconButton 
                color="inherit" 
                sx={{ 
                  '&:hover': { 
                    bgcolor: theme.palette.secondary.main,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                color="inherit"
                sx={{ 
                  '&:hover': { 
                    bgcolor: theme.palette.secondary.main,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                color="inherit"
                sx={{ 
                  '&:hover': { 
                    bgcolor: theme.palette.secondary.main,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                color="inherit"
                sx={{ 
                  '&:hover': { 
                    bgcolor: theme.palette.secondary.main,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <PinterestIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              gutterBottom 
              fontWeight="bold"
              sx={{ color: theme.palette.secondary.main }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              <Link 
                href="#" 
                color="inherit" 
                underline="none" 
                sx={{ 
                  opacity: 0.9,
                  '&:hover': { 
                    color: theme.palette.secondary.main,
                    transform: 'translateX(5px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block'
                }}
              >
                New Arrivals
              </Link>
              <Link 
                href="#" 
                color="inherit" 
                underline="none"
                sx={{ 
                  opacity: 0.9,
                  '&:hover': { 
                    color: theme.palette.secondary.main,
                    transform: 'translateX(5px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block'
                }}
              >
                Best Sellers
              </Link>
              <Link 
                href="#" 
                color="inherit" 
                underline="none"
                sx={{ 
                  opacity: 0.9,
                  '&:hover': { 
                    color: theme.palette.secondary.main,
                    transform: 'translateX(5px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block'
                }}
              >
                Special Offers
              </Link>
              <Link 
                href="#" 
                color="inherit" 
                underline="none"
                sx={{ 
                  opacity: 0.9,
                  '&:hover': { 
                    color: theme.palette.secondary.main,
                    transform: 'translateX(5px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block'
                }}
              >
                Contact Us
              </Link>
            </Stack>
          </Grid>

          {/* Customer Service */}
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              gutterBottom 
              fontWeight="bold"
              sx={{ color: theme.palette.secondary.main }}
            >
              Customer Service
            </Typography>
            <Stack spacing={1.5}>
              <Link 
                href="#" 
                color="inherit" 
                underline="none"
                sx={{ 
                  opacity: 0.9,
                  '&:hover': { 
                    color: theme.palette.secondary.main,
                    transform: 'translateX(5px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block'
                }}
              >
                Shipping Policy
              </Link>
              <Link 
                href="#" 
                color="inherit" 
                underline="none"
                sx={{ 
                  opacity: 0.9,
                  '&:hover': { 
                    color: theme.palette.secondary.main,
                    transform: 'translateX(5px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block'
                }}
              >
                Returns & Exchanges
              </Link>
              <Link 
                href="#" 
                color="inherit" 
                underline="none"
                sx={{ 
                  opacity: 0.9,
                  '&:hover': { 
                    color: theme.palette.secondary.main,
                    transform: 'translateX(5px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block'
                }}
              >
                FAQ
              </Link>
              <Link 
                href="#" 
                color="inherit" 
                underline="none"
                sx={{ 
                  opacity: 0.9,
                  '&:hover': { 
                    color: theme.palette.secondary.main,
                    transform: 'translateX(5px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                  display: 'inline-block'
                }}
              >
                Privacy Policy
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom Footer */}
      <Box 
        sx={{ 
          bgcolor: theme.palette.primary.dark,
          py: 2
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="body2" 
            align="center"
            sx={{ 
              opacity: 0.9,
              letterSpacing: 0.5
            }}
          >
            © {new Date().getFullYear()} Perfume Shop. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer; 
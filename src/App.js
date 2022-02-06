import * as React from 'react';
import "./App.css";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
const App = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: 'text.primary' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Company name
            </Typography>
            <nav>
              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                fontWeight: 'medium', m: 2
              }}>
                <Link href="#" underline="none" sx={{ m: 1 }}>
                  {'Features'}
                </Link>
                <Link href="#" underline="none" sx={{ m: 1 }}>
                  {'Enterprice'}
                </Link>
                <Link href="#" underline="none" sx={{ m: 1 }}>
                  {'Support'}
                </Link>
              </Box>
            </nav>
            <Button variant="outlined" sx={{ fontWeight: 'bold', textTransform: 'capitalize' }}>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="sm" sx={{mt:6}}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold", textAlign:"center",m:2 }}>
            Pricing
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold",textAlign:"center",m:2 }}>
            Quickly build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization.
          </Typography>
        </Box>
      </Container>
    </div>
  )
}

export default App;

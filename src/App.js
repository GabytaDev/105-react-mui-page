import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

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
                fontWeight: 'medium', m:2
              }}>
                <Link href="#" underline="none" sx={{m:1}}>
                  {'Features'}
                </Link>
                <Link href="#" underline="none" sx={{m:1}}>
                  {'Enterprice'}
                </Link>
                <Link href="#" underline="none"sx={{m:1}}>
                  {'Support'}
                </Link>
              </Box>

            </nav>
            <Button variant="outlined" sx={{fontWeight: 'bold',textTransform: 'capitalize'}}>Login</Button>

          </Toolbar>

        </AppBar>
      </Box>
    </div>
  )
}

export default App;

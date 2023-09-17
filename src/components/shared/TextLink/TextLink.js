import React, {useState} from 'react';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material';

function TextLink({url, text}) {
  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

    const styles = {
        fontSize: '15px',
        fontWeight: '500',
        fontStyle: 'normal',
        color: isHover ? 'lightgrey' : 'black',
    };
    
    const theme = createTheme({
        components: {
          // Name of the component
          MuiLink: {
            styleOverrides: {
              // Name of the slot
              root: styles,
            },
          },
        },
      });

    return (
        <ThemeProvider theme={theme}>
            <Link
                align="center"
                gutterBottom={true}
                href={url}
                underline="none"
                variant="h2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {text}
            </Link>
        </ThemeProvider>
    );
  }
  
  export default TextLink;

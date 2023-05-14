import {Dialog, Modal} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from '@mui/material/Container'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AccessibleIcon from '@mui/icons-material/Accessible';
import Typography from "@mui/material/Typography";

export default function CryptoMinor(props) {
    let theme = props.theme;
    return (
        <ThemeProvider theme={theme}>
            <Dialog open={true}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            margin: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'red' }}>
                            <AccessibleIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h2">
                            Nasol bro
                        </Typography>
                    </Box>
                </Container>
            </Dialog>
        </ThemeProvider>
    )
}
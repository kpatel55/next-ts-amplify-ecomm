import { AppBar, Box, Button, Toolbar, styled, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";
import Link from "../pages/utils/Link";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { CognitoUserAmplify } from "@aws-amplify/ui";
import { useRouter } from "next/router";
import { useUserContext } from "../context/UserContext";


const NavRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.default
})) as typeof AppBar;

const NavItem = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    marginRight: '2rem',
    marginLeft: '2rem',
    '&:hover': {
        backgroundColor: 'transparent',
        borderRadius: 0,
        borderBottom: `2px solid ${theme.palette.secondary.main}`,
    }
})) as typeof Button;

export default function Nav() {
    const { user, setUser } = useUserContext();
    const router = useRouter();

    const signOut = async () => {
        try {
            await Auth.signOut();
            router.reload();
        } catch (err) {
            console.log(`unable to sign out: ${err}`);
        }
    }
    
    return (
        <>
            <NavRoot>
                <Toolbar disableGutters sx={{ minHeight: 64 }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <NavItem component={Link} href="/">
                            Latest
                        </NavItem>
                        <NavItem component={Link} href="/men">
                            Men
                        </NavItem>
                        <NavItem>Women</NavItem>
                        <NavItem>Kids</NavItem>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {user && <Typography variant="h6" sx={{ color: '#000' }}>{user?.getUsername()}</Typography>}
                        {user &&
                            <Button
                                onClick={signOut}
                                sx={{
                                    bgcolor: '#000',
                                    color: '#FFF',
                                    mx: 5,
                                    fontSize: '11px',
                                    '&:hover': {
                                        bgcolor: '#2b2626',
                                        color: '#FFF'
                                    }
                                }}
                            >
                                Log out
                            </Button>}
                    </Box>
                </Toolbar>
            </NavRoot>
        </>
    )
}
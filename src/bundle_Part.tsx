import { Box, Card, List, ListItemText, Switch } from "@mui/material";
import React from 'react';
import Divider from '@mui/material/Divider';

const BundleObject = ({bundle, setOwnedState}) => {

    return(
        <Card variant="outlined" sx={{ maxWidth: 500 }}>
            <Box>
            <List>
            <ListItemText primary= {bundle.number} />
            <ListItemText primary = {bundle.name} />
                
            <Divider component="li" />
            <ListItemText secondary = {bundle.obtain} />
            <Switch checked = {bundle.isOwned} onChange = {() => {setOwnedState(bundle.key)}}/>
            <Divider component="li" />
            </List>
            </Box>

        </Card>
    );
    
}

export default BundleObject;
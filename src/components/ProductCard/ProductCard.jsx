
import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import style from './ProductCard.module.css'


export default function ProductCard({data}){
    return (
        <> 
        <Card variant="outlined" sx={{ maxWidth: '360px', maxHeight: '500px' }}>
            <Box sx={{ p: 2 }}>
            
            <img className={style.productImage} src='./logo/devteria-logo.png'>

            </img>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {data.description}, you should use it right now ! Buy it from Vuz Da Poet
            </Typography>

                </Box>
            
            <Box sx={{ p: 2 }}>
            

            <Box sx={{display: 'flex',justifyContent: 'space-between',width: '100%'}}>
                <Typography 
                    sx={{ textAlign: 'left', marginRight: '10px'}}    
                >
                    ${data.price}
                </Typography>

                <Typography 
                    sx={{ textAlign: 'right', marginRight: '10px'}}>
                    da ban 2.5k
                </Typography>
            </Box>
            
            </Box>
        </Card>
        
        </>
    );
}

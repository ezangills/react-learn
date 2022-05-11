import React from 'react'
import ProductInfo from './ProductInfo'
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'

const ProductBox = styled('div')(({ theme }) => ({
    width: '12rem',
    margin: '1.3rem',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
}))

const Product = ({ product }) => {
    return (
        <ProductBox key={product.productSrc}>
            <Badge  badgeContent={'-' + Math.round(product.sale * 100)} 
                    color='error'
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }} />
            <ProductInfo product={product} />
            <Button sx={{marginTop: '1rem', fontSize: '12px', fontWeight: '600', textTransform: 'inherit'}} 
                    variant="contained">В корзину</Button>
            <Typography variant="subtitle2" sx={{marginTop: '0.5rem', fontWeight: '1000'}}>
                {product.dateOfDelivery}
            </Typography>
        </ProductBox>
    )
}

export default Product
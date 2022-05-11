import React from 'react'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'
import PriceTag from './PriceTag'
import ProductImage from './ProductImage';

const ProductContainer = styled('div')(({ theme }) => ({
    width: '12rem',
    height: '19rem',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: "pointer",
}))

const ProductInfo = ({ product }) => {
    return (
        <ProductContainer>
            <ProductImage imageSrc={product.imageSrc} />
            <PriceTag currentPrice={product.currentPrice} initPrice={product.initPrice} />
            <Typography variant="subtitle2" style={{marginTop: '1rem'}}>
                {product.name}
            </Typography>
        </ProductContainer>
    )
}

export default ProductInfo
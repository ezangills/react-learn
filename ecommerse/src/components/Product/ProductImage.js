import React from 'react'
import { styled } from '@mui/material/styles'

const ProductImageContainer = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const ProductImg = styled('img')(({ theme }) => ({
    height: '12rem',
    display: 'block',
}))

const ProductImage = ({ imageSrc }) => {
    return (
        <ProductImageContainer>
            <ProductImg src={imageSrc} />
        </ProductImageContainer>
    )
}

export default ProductImage
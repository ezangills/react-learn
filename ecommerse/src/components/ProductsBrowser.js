import React from "react"
import { styled } from '@mui/material/styles'
import Product from "./Product/Product"

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
}))

const ProductsBrowser = ({ productsData }) => {
    return (
        <Container>
            {productsData.map(product => (
                <Product product={product} />
            ))}
        </Container>
    )
}

export default ProductsBrowser
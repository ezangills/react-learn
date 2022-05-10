import React from "react"
import productsMockData from '../ProductsMockData.json'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const Product = styled('div')(({ theme }) => ({
    width: '12rem',
    margin: '1.3rem',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
}))

const ProductArea = styled('div')(({ theme }) => ({
    width: '12rem',
    height: '19rem',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: "pointer",
}))

const ProductImageContainer = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const ProductImage = styled('img')(({ theme }) => ({
    height: '12rem',
    display: 'block',
}))

const PriceContainer = styled('div')(({ theme}) => ({
    width: '100%',
    marginTop: '0.5rem',
}))

const Price = styled('span')(({ theme}) => ({
    fontSize: "21px",
    color: '#ed075f',
    fontWeight: '900',
    marginTop: '1rem',
}))

const PreviousPrice = styled('span')(({ theme}) => ({
    fontSize: "14px",
    color: 'gray',
    fontWeight: '400',
    marginLeft: '1rem',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#ed075f',
}))

const ProductsBrowser = () => {
    return (
        <Container>
        {productsMockData.map(product => (
                <Product>
                    <Badge  badgeContent={'-' + Math.round(product.sale * 100)} 
                                        color='error'
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }} />
                    <ProductArea>
                        <ProductImageContainer>
                                <ProductImage src={product.imageSrc} />
                        </ProductImageContainer>
                        <PriceContainer>
                            <Price>{product.currentPrice} $</Price>
                            <PreviousPrice>{product.initPrice} $</PreviousPrice>
                        </PriceContainer>
                        <Typography variant="subtitle2" style={{marginTop: '1rem'}}>
                            {product.name}
                        </Typography>
                    </ProductArea>
                    <Button sx={{marginTop: '1rem', fontSize: '12px', fontWeight: '600', textTransform: 'inherit'}} 
                            variant="contained">В корзину</Button>
                    <Typography variant="subtitle2" sx={{marginTop: '0.5rem', fontWeight: '1000'}}>
                        {product.dateOfDelivery}
                    </Typography>
                </Product>
        ))}
        </Container>
    )
}

export default ProductsBrowser
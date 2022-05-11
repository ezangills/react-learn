import React from 'react'
import { styled } from '@mui/material/styles'

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

const PriceTag = ({ currentPrice, initPrice }) => {
    return (
        <PriceContainer>
            <Price>{currentPrice} $</Price>
            <PreviousPrice>{initPrice} $</PreviousPrice>
        </PriceContainer>
    )
}

export default PriceTag
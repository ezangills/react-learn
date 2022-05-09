import React from 'react'
import Deposit from './Deposit'
import styled  from 'styled-components'
import SortingBar from './SortingBar'
import AllDepositsBtn from '../AllDepositsBtn'

const Title = styled.h1`
    font-weight: 500;
    font-size: 1.3rem;
    display: flex;
    align-items: center ;
`

const DepositCount = styled.h1`
    margin-left: 1rem;
    font-size: 1rem;
    background-color: ${({theme}) => theme.header};
    color: ${({theme}) => theme.headerNumber};
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px ;
`

const Deposits = ({ title, count, data }) => {
    return (
        <div>
            <Title>{title}<DepositCount>{count} </DepositCount></Title> 
            <SortingBar /> 
            {data.map(deposit => (
                <Deposit data={deposit} key={deposit.property.address.street} />
            ))}
            <AllDepositsBtn title={title} />
        </div>
    )
}

export default Deposits
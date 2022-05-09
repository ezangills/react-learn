import React from 'react'
import styled from 'styled-components'
import PlusIcon from '../../assets/images/plus.png'

const AddButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    top: 6rem;
    right: 7rem; 
    cursor: pointer; 
`

const AddIcon  = styled.img `
    height: 50px;
`

const NewDepositBtn = () => {
    return (
        <AddButton>
            <AddIcon src={PlusIcon} />
        </AddButton>
    )
}

export default NewDepositBtn
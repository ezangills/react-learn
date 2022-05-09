import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'
import HomeIcon from '../../../assets/images/home.png'
import ChestIcon from '../../../assets/images/chest.png'
import BookIcon from '../../../assets/images/book.png'

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
            <MenuItem title="Home" icon={HomeIcon} />
            <MenuItem title="Adventures" icon={BookIcon} active />
            <MenuItem title="Chest" icon={ChestIcon} />
        </Container >
    )
}

export default Menu
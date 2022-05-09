import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/shadow-the-hedgehog.png'
import MailIcon from '../../assets/images/mail.png'

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`

const ProfileImage = styled.img`
    height: 2.2rem;
    border-radius: 50%;
    margin: 0 0.4rem;
    cursor: pointer;
`

const Icon = styled.img`
    height: 1.7rem;
    margin-right: 1rem;
    opacity: 0.4;
    cursor: pointer;
`
 

const Nav = () => {
    return (
        <Container>
            <Icon src={MailIcon} />
            <ProfileImage src={Image} /> 
        </Container>
    ) 
}

export default Nav 
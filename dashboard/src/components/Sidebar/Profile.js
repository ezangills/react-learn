import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/shadow-the-hedgehog.png'

const Container = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center ;
`

const ProfileImage = styled.img`
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
`

const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: '#AAA5A5';
`

const Profile = () => {
    return (
        <Container>
            <ProfileImage src={Image}/>
            <ProfileName>Shadow the Hedgehog</ProfileName>
        </Container>
    )
}

export default Profile
import React from 'react'
import CardContainer from '../containers/card';
import FormContainer from '../containers/form';
import HeaderContainer from '../containers/header';

export default function Home() {
    return (
        <HeaderContainer>
            <FormContainer />
            <CardContainer />
        </HeaderContainer>
    )
}

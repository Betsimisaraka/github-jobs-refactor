import React from 'react'
import CardContainer from '../containers/card';
import FormContainer from '../containers/form';
import HeaderContainer from '../containers/header';
import OptFormContainer from '../containers/opt-form';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <FormContainer />
            </HeaderContainer>
            <OptFormContainer />
            <CardContainer />
        </>
    )
}

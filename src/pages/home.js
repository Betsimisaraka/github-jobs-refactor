import React from 'react'
import { Main } from '../components';
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
            <Main>
                <OptFormContainer />
                <CardContainer />
            </Main>
        </>
    )
}

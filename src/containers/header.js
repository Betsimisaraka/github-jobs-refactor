import React from 'react';
import { Header, Form } from '../components';


export default function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Title>Github
                <Header.Span> Jobs</Header.Span>
            </Header.Title>
            {children}
        </Header>
    )
}

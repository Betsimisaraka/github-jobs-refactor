import React from 'react';
import { Header, Form } from '../components';


export default function HeaderContainer() {
    return (
        <Header>
            <Header.Title>Github
                <Header.Span> Jobs</Header.Span>
            </Header.Title>
            <Form>
                <Form.Base>
                    <Form.Fieldset>
                        <Form.Input
                            placeholder="Title, companies, expertise or benefits"
                        />
                        <Form.Submit>Search</Form.Submit>
                    </Form.Fieldset>
                </Form.Base>
            </Form>
        </Header>
    )
}

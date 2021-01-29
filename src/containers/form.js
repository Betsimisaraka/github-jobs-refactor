import React from 'react';
import { Form } from '../components';

export default function FormContainer() {
    return (
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
    )
}

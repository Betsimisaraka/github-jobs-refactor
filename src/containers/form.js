import React, { useContext, useState } from 'react';
import { Form } from '../components';
import { GlobalContext } from '../context/globalContext';

export default function FormContainer() {
    const [value, setValue] = useState('');

    const { state, dispatch } = useContext(GlobalContext);
    const { githubJobs } = state;

    function handleSubmit(e) {
        e.preventDefault();
        const input = e.target.searchJobs.value;
        const inputToLowerCase = input.toLowerCase();
        const filteredGithubJobs = githubJobs
            .filter(githubJob => githubJob.title.toLowerCase().includes(inputToLowerCase)
            || githubJob.company.toLowerCase().includes(inputToLowerCase));
        
        dispatch({ type: "SEARCH_GITHUB_JOBS", filteredGithubJobs });
        setValue('');
    }

    return (
        <Form>
            <Form.Base onSubmit={handleSubmit}>
                <Form.Fieldset>
                    <Form.Input
                        name="searchJobs"
                        placeholder="Title, companies, expertise or benefits"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Form.Submit>Search</Form.Submit>
                </Form.Fieldset>
            </Form.Base>
        </Form>
    )
}

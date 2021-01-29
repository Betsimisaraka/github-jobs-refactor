import React, { useContext } from 'react'
import { Card } from '../components';
import { GlobalContext } from '../context/globalContext';

export default function CardContainer() {
    const { state } = useContext(GlobalContext);
    const { githubJobs } = state;

    return (
        <Card>
            {githubJobs.map(job => (
                <Card.Group key={job.id}>
                    <Card.Image src={job.company_logo} />
                    <Card.Frame>
                        <Card.Company>{job.company}</Card.Company>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Type>{job.type}</Card.Type>
                    </Card.Frame>
                    <Card.Location>{job.location}</Card.Location>
                    <Card.Date>{job.created_at}</Card.Date>
                </Card.Group>
            ))}
        </Card>
    )
}

import React, { useContext } from 'react'
import { Card } from '../components';
import { GlobalContext } from '../context/globalContext';
import { AiOutlineClockCircle } from 'react-icons/ai';
import  { DateFormated } from '../utils/date-format';
import ReactPaginate from 'react-paginate';

export default function CardContainer() {
    const { state, handleClick, sliceGithubJobs, countPage } = useContext(GlobalContext);
    const { githubJobs, isLoading } = state;

    return (
        <>
            {isLoading && 'Loading...'}
            <Card>
            {!isLoading && githubJobs && githubJobs.length > 0 &&
                sliceGithubJobs.map(job => (
                    <Card.Link key={job.id} to={`/details/${job.id}`}>
                        <Card.Group>
                            <Card.Image src={job.company_logo} />
                            <Card.Frame>
                                <Card.Company>{job.company}</Card.Company>
                                <Card.Title>{job.title}</Card.Title>
                                <Card.Type>{job.type}</Card.Type>
                            </Card.Frame>
                            <Card.Location>{job.location}</Card.Location>
                            <Card.Date><AiOutlineClockCircle /> {DateFormated(job.created_at)} ago</Card.Date>
                        </Card.Group>
                    </Card.Link>
                ))}
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    pageCount={countPage}
                    onPageChange={handleClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </Card>
        </>
    )
}

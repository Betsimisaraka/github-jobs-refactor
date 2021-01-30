import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Detail, DetailContent, DetailHeader } from '../components';
import { GlobalContext } from '../context/globalContext';
import HeaderContainer from '../containers/header';

export default function DetailContainer() {
    const { id } = useParams();

    const { state } = useContext(GlobalContext);
    const { githubJobs } = state;

    const findTheSameId = githubJobs.find(job => job.id === id);

    return (
        <>
        <HeaderContainer />
        <Detail>
            <DetailHeader>
                <DetailHeader.Link to="/">⬅ Back to search</DetailHeader.Link>
                <DetailHeader.SubTitle>How to apply</DetailHeader.SubTitle>
                <DetailHeader.Content dangerouslySetInnerHTML={{__html:findTheSameId.how_to_apply}} />
            </DetailHeader>
            <DetailContent>
                <DetailContent.Group>
                    <DetailContent.Title>{findTheSameId.title}</DetailContent.Title>
                    <DetailContent.Type>{findTheSameId.type}</DetailContent.Type>
                    <DetailContent.Date>{findTheSameId.created_at}</DetailContent.Date>
                </DetailContent.Group>
                <DetailContent.Group>
                    <DetailContent.Image  src={findTheSameId.company_logo} alt={`Logo of this componey ${findTheSameId.company}`} />
                    <DetailContent.SubTitle>{findTheSameId.company}</DetailContent.SubTitle>
                    <DetailContent.Location>{findTheSameId.location}</DetailContent.Location>
                </DetailContent.Group>
                <DetailContent.Description dangerouslySetInnerHTML={{__html:findTheSameId.description}} />
            </DetailContent>
        </Detail>
        </>
    )
}

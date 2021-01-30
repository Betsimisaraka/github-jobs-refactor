import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DetailContainer, DetailHeader } from '../components';
import HeaderContainer from '../containers/header';
import { GlobalContext } from '../context/globalContext';

export default function Details() {
    const { id } = useParams();

    const { state } = useContext(GlobalContext);
    const { githubJobs } = state;

    const findTheSameId = githubJobs.find(job => job.id === id);

    return (
        <>
            <HeaderContainer>
                <DetailHeader>
                    <DetailHeader.Link to="/">⬅ Back to search</DetailHeader.Link>
                    <DetailHeader.SubTitle>How to apply</DetailHeader.SubTitle>
                    <DetailHeader.Content dangerouslySetInnerHTML={{__html:findTheSameId.how_to_apply}} />
                </DetailHeader>
                <DetailContainer>
                    <DetailContainer.Group>
                        <DetailContainer.Title>{findTheSameId.title}</DetailContainer.Title>
                        <DetailContainer.Type>{findTheSameId.type}</DetailContainer.Type>
                        <DetailContainer.Date>{findTheSameId.created_at}</DetailContainer.Date>
                    </DetailContainer.Group>
                    <DetailContainer.Group>
                        <DetailContainer.Image  src={findTheSameId.company_logo} alt={`Logo of this componey ${findTheSameId.company}`} />
                        <DetailContainer.SubTitle>{findTheSameId.company}</DetailContainer.SubTitle>
                        <DetailContainer.Company>{findTheSameId.location}</DetailContainer.Company>
                    </DetailContainer.Group>
                    <DetailContainer.Description dangerouslySetInnerHTML={{__html:findTheSameId.description}} />
                </DetailContainer>
            </HeaderContainer>

        </>
    )
}

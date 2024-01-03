import React, { useState } from "react";
import styled from "styled-components";
import useGetPagination from "./hooks/useGetPagination";  
import { getPagination } from "../api/getPagination";
import ImageContainer from "./ImageContainer";

export default function ImagePagination() {
  const [idNum, setIdNum] = useState(1);
  const [url, setUrl] = useState<string>('https://placekitten.com/300/200');
  //const { data } = useGetPagination(); 
  // if (!data || !data.replies || data.replies.length === 0) {
  //   return null;
  // }
  
  function handleUrl(page: number) {
    setUrl(`https://placekitten.com/300/20${page}`); 
    getPagination(url);
  }

  function handleNextButton() {
    setIdNum((prevIndex) => prevIndex + 1);
    handleUrl(idNum);
  }

  function handlePrevButton() {
    setIdNum((prevIndex) => prevIndex - 1);
    handleUrl(idNum);
  }

  return (
    <Section>
      <PreviousButton disabled={!data} onClick={handlePrevButton}>Prev</PreviousButton>
      <ImageContainer url={url}/>
      <NextButton disabled={!data} onClick={handleNextButton}>Next</NextButton>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem 43.5rem;
  justify-content: center;
`;

const PreviousButton = styled.button`
`;

const NextButton = styled.button`
`;

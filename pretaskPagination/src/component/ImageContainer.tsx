import styled from "styled-components";

interface ImageContainerTypes {
  url: string;
}

export default function ImageContainer(props: ImageContainerTypes) {
  const { url } = props;

  return (
    <>
      <Image src={url} alt="이미지" />
    </>
  );
}

const Image = styled.img`
  width: 10rem;
  height: 10rem;
`;

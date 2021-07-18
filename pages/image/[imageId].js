import ImageComponent from '@/components/image/ImageComponent';
import Layout from '@/components/layout/Layout';
import useImageListByID from 'hooks/useImageListByID';
import { ImageContainer } from '@/components/image/ImageList';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const DetailsSection = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  flex-wrap: wrap;
  width: 100%;

  padding: 0 10%;
`;

const DetailsSectionContent = styled.li`
  margin: 10px;
`;

const StyledAnchorLink = styled.a`
  text-decoration: underline;
  color: #0492c2;
`;

export default function Image() {
  const router = useRouter();
  const {
    isLoading,
    isError,
    imageInfo = {},
  } = useImageListByID(router.query.imageId);

  const handleBack = () => {
    router.back();
  };

  if (isLoading) return 'Loading...';
  if (isError) return 'Something went wrong';

  return (
    <Layout viewType="grid">
      {Object.keys(imageInfo).length && (
        <>
          <ImageContainer key={imageInfo.id} customWidth="40%">
            <ImageComponent
              imgSrc={imageInfo.src.original}
              alt={`${imageInfo.photographer}-${imageInfo.id} photo`}
              width="200px"
              height="200px"
            />
          </ImageContainer>
          <DetailsSection>
            <DetailsSectionContent>ID: {imageInfo.id}</DetailsSectionContent>
            <DetailsSectionContent>
              Photographer: {imageInfo.photographer}
            </DetailsSectionContent>
            <DetailsSectionContent>
              Photographer URL:{' '}
              <StyledAnchorLink href={imageInfo.photographer_url}>
                {imageInfo.photographer_url}
              </StyledAnchorLink>
            </DetailsSectionContent>
            <DetailsSectionContent>
              URL:
              <StyledAnchorLink href={imageInfo.url}>
                {imageInfo.url}
              </StyledAnchorLink>
            </DetailsSectionContent>
          </DetailsSection>
          <p onClick={handleBack} className="onHover">
            Back
          </p>
        </>
      )}
    </Layout>
  );
}

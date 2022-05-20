import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <Background>
      <Container>
        <ImageTitle>
          <img src="https://upload.wikimedia.org/wikipedia/fr/1/1a/Bao_logo.png" alt="disney-clone" />
        </ImageTitle>

        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" alt="disney-clone" />
            <span>PLAY</span>
          </PlayButton>

          <TrailerButton>
            <img src="/images/play-icon-white.png" alt="disney-clone" />
            <span>Trailer</span>
          </TrailerButton>

          <AddButton>
            <span>+</span>
          </AddButton>

          <GroupWatchButton>
            <img src="/images/group-icon.png" alt="sas" />
          </GroupWatchButton>
        </Controls>

        <Subtitle>
          is simply dummy text of the printing and typesetting industry.
        </Subtitle>

        <Description>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here
        </Description>
      </Container>
    </Background>
  );
};

export default Detail;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 calc(3.5vw + 5px);
  background: rgba(0, 0, 0, 0.3);
`;

const Background = styled.div`
  height: 92.4vh;
  width: 100%;
  background: url("https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2C42A74B2CCC3E1FEC11B09A3EFF12DEB1A29663740CDAEBB5EFC713B9F97235/scale?width=1920&aspectRatio=1.78&format=jpeg")
    center;
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;

  padding: 0 24px;
  display: flex;
  align-items: center;
  margin-right: 22px;
  height: 56px;
  background: rgba(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgba(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(249, 249, 249);
  color: rgba(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid white;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.6);

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.div`
  color: rgba(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color:  rgba(249, 249, 249);
`;

// const Description = styled.div`

// `;

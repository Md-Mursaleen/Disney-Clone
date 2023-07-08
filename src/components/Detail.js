import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  useEffect(() => {
    db.collection("movies").doc(id).get().then((doc) => {
      if (doc.exists) {
        setDetailData(doc.data());
      } else {
        console.log("No such document exists in the firebase!");
      }
    }).catch((error) => {
      console.log(error);
    });
  }, [id]);
  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="Play Black Icon" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="Play White Icon" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="Group Icon" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  min-height: calc(100vh - 250px);
  display: block;
  overflow-x: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  opacity: 0.8;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  margin: 0px auto;
  padding-bottom: 24px;
  height: 30vw;
  width: 100%;
  min-height: 170px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  -webkit-box-pack: start;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  margin: 24px 0px;
  min-height: 56px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const Player = styled.button`
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(249, 249, 249);
  font-size: 15px;
  text-align: center;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  letter-spacing: 1.8px;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    margin: 0px 10px 0px 0px;
    padding: 0px 12px;
    height: 45px;
    font-size: 12px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;

  span {
    display: inline-block;
    background-color: rgb(249, 249, 249);

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0px) rotate(0deg);
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translateX(-8px) rotate(0deg);
    }
  }
`;

const GroupWatch = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  min-height: 20px;
  font-size: 15px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  padding: 16px 0px;
  font-size: 20px;
  color: rgb(249, 249, 249);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;

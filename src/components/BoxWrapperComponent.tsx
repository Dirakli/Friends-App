import { useState } from "react"
import styled from "styled-components"

function BoxWrapperComponent({ getData, setGetId, getApi, navigate }: { getData: any, setGetId: any, getApi: any, navigate: any }) {


  return (<div>
    <BoxWrapper>
      <Friends onClick={getApi} >friends</Friends>
      {getData && getData.results.map((result: any, index: number) => {
        return (
          <PersonBox key={index} >
            <ProfileImage src={getData ? result.picture.thumbnail : ""} />
            <PersonName onClick={() => {
              navigate("details")
              setGetId(index)
            }}>{getData ? result.name.first : ""} {getData ? result.name.last : ""}</PersonName>
          </PersonBox>
        )
      })}
    </BoxWrapper>
  </div>
  )
}


const Friends = styled.button`
  width: 140px;
  cursor: pointer;
  height: 30px;
  font-family: 'Fredoka One', cursive;
  border-radius: 16px;
  border: 1px solid #726452;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
	color: #00d9ffa4;
  }
`

const PersonName = styled.h1`
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  font-family: 'Fredoka One', cursive;
  cursor: pointer;
  letter-spacing: 1.5px;
  color: #110c20;
  :hover {
	color: #00d9ffa4;
  }
`

const ProfileImage = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 50%;
`

const PersonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  height: 180px;
  border: 2px solid #5c5a5789;
`

const BoxWrapper = styled.div`
	margin-left: 50px;
    display: grid;
    gap: 80px;
    grid-template-columns: 180px 180px 180px;
`

export default BoxWrapperComponent;
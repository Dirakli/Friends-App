import { useState } from "react";
import styled from "styled-components";

function PersonDetails({ getData, getId, navigate }: { getData: any, getId: any, navigate: any }) {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [marked, setMarked] = useState<boolean>(false);

  function handleMarked() {
    return (
      setMarked(true),
      setShowDetails(false)
    )
  }

  function handleChange() {
    console.log(showDetails)
    return setShowDetails(!showDetails)

  }

  return (
    <ImageAndDetailsWrapper>
      <div>
        <PersonImage src={getData ? getData.results[getId].picture.large : ""} alt="person image" />
        <Friends onClick={() => navigate("/")} >Go Back</Friends>
      </div>

      <DetailsWrapper>
        <NameAndSurname>{getData ? getData.results[getId].name.first : ""} {getData ? getData.results[getId].name.last : ""}</NameAndSurname>
        <ThreeHeadlines>
          <Headlines><Cube></Cube><Messages onClick={handleMarked} >Messages</Messages></Headlines>
          <Headlines onClick={handleChange} style={{ marginLeft: "20px", backgroundColor: showDetails ? "#01bbff1d" : "", color: showDetails ? "#01bbffbc" : "" }} >Contacts</Headlines>
          <Headlines onClick={handleMarked} style={{ marginLeft: "20px" }} >About me</Headlines>
        </ThreeHeadlines>
        {showDetails ? <div> <SecurityAndAboutWrapper>
          <SecurityAndAbout>Secutiry</SecurityAndAbout>
          <SecurityAndAbout style={{ marginLeft: "15px", color: showDetails ? "#110c20" : "" }} >About me</SecurityAndAbout>
        </SecurityAndAboutWrapper></div> : ""}
        {showDetails ? <div>
          <ContactsChilds>Phone   <ApiResults href={getData ? getData.results[getId].phone : ""}>+{getData ? getData.results[getId].phone : ""}</ApiResults></ContactsChilds>
          <ContactsChilds>Adress <Adress>{getData ? getData.results[getId].location.street.name : ""} {getData ? getData.results[getId].location.street.number : ""}str</Adress> </ContactsChilds>
          <ContactsChilds>Email   <ApiResults style={{ marginLeft: "20px" }} href={getData ? getData.results[getId].email : ""}>{getData ? getData.results[getId].email : ""}</ApiResults></ContactsChilds>
        </div> : ""}
      </DetailsWrapper>
    </ImageAndDetailsWrapper>
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
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  :hover {
	color: #00d9ffa4;
  }
`

const Cube = styled.div`
  width: 13px;
  height: 13px;
  background-color: black;
`

const Messages = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-left: 5px;
  line-height: 23px;
  font-family: 'Fredoka One', cursive;
  cursor: pointer;
  letter-spacing: 2px;
  color: #110c20;
  :hover {
    background-color: #01bbff1d;
    color: #01bbffbc;
    transition: all 0.4s;
  }    
`

const Adress = styled.span`
  font-size: 13px;
  font-weight: 500;
  margin-left: 10px;
  line-height: 23px;
  font-family: 'Fredoka One', cursive;
  cursor: pointer;
  letter-spacing: 1.5px;
`

const ApiResults = styled.a`
 font-size: 13px;
  font-weight: 500;
  margin-left: 15px;
  line-height: 23px;
  font-family: 'Fredoka One', cursive;
  cursor: pointer;
  letter-spacing: 1.5px;
`

const ContactsChilds = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-top: 10px;
  line-height: 23px;
  font-family: 'Fredoka One', cursive;
  letter-spacing: 1.5px;
  color: #110c20;  
`

const SecurityAndAbout = styled.span`
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  font-family: 'Fredoka One', cursive;
  cursor: pointer;
  letter-spacing: 1.5px;
  color: #8382826a;
  :hover {
    color: #110c20;
    transition: all 0.4s;
  }

`

const SecurityAndAboutWrapper = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 80px;
  border-bottom: 2px solid #0000003e;
`

const Headlines = styled.span`
  font-size: 16px;
  margin-top: 80px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 23px;
  font-family: 'Fredoka One', cursive;
  cursor: pointer;
  letter-spacing: 2px;
  color: #110c20;
  :hover {
    background-color: #01bbff1d;
    color: #01bbffbc;
    transition: all 0.4s;
  }  
`

const ThreeHeadlines = styled.div`
  width: 350px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const NameAndSurname = styled.h1`
  font-size: 36px;
  font-weight: 500;
  line-height: 23px;
  font-family: 'Fredoka One', cursive;
  letter-spacing: 3px;
  color: #110c20;  
`

const DetailsWrapper = styled.div`
  width: 500px;
  height: 350px;
  margin-top: 25px;
`

const PersonImage = styled.img`
  width: 200px;
  margin-top: 25px;
  height: 200px;
`

const ImageAndDetailsWrapper = styled.div`
  border-top: 2px solid #0000003e;
  width: 900px;
  height: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`

export default PersonDetails;
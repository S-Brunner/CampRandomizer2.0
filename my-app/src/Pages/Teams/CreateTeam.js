import React from "react";
import styled from "styled-components";

const CreateTeam = () => {

    let camper_list =  [];

    const handleSubmit = (e) => {
        e.preventDefault();
        const text_area = document.getElementById('text_area').value

        if ( text_area ){
            split_name(text_area)
        }
    }

    const split_name = (text_area) => {
        const campers = text_area.split(" ");
        
        campers.forEach(camper => {
            const camper_elements = camper.split(",")
            console.log(camper_elements);
            let name = camper_elements[0];
            let age = camper_elements[1];
            let gender = camper_elements[2];
        
            let new_camper = { name, age, gender }
            camper_list.push(new_camper);

        });
    }

    const CAMPERS = camper_list.length;
    
    const numberPerTeam = Math.floor(camperList.length / props.amountOfTeams);

    if( props.isSubmited ) {
        for( let numberOfTeams = 1 ; numberOfTeams <= props.amountOfTeams; numberOfTeams ++  ){

            let teamList = []
    
            for ( let numberOfSpots = numberPerTeam ; numberOfSpots !== 0 ; numberOfSpots -- ){
                let index = Math.round(Math.random() * camperList.length)
    
                let camperName = camperList.splice(index, 1);
    
                if(camperName.length === 0){
                    numberOfSpots ++
                } else {
                    teamList.push(camperName[0]);
                }
            }

            let team = {
                teamNumber : numberOfTeams,
                teamList,
                teamSize: numberPerTeam,
            }
            if(teams.length < props.amountOfTeams){
                teams.push(team)
            }
        }

        if(teams.length === props.amountOfTeams) {

            for ( let count = 0; count < props.amountOfTeams; count++) {
                let total = 0;
                teams.forEach((team) => {
                    total += team.teamSize;
                })
                if( total !== CAMPERS){
                    teams[count].teamSize ++;
                }
            }
        }
    }

    for( let index = 0; index < teams.length ; index ++){
        if(teams[index].teamList.length !== teams[index].teamSize){
            let leftoverCamper = camperList.splice(0, 1);
            teams[index].teamList.push(leftoverCamper[0])
        }
    }

    return(
        <Main>
            <Header>
                Create a Team
            </Header>
            <Body>
                <Form onSubmit={handleSubmit}>
                    <TextArea id="text_area" placeholder="Enter names"/>
                    <Button type="submit">Submit</Button>
                </Form>
            </Body>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.h1`

`;

const Body = styled.div`

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const TextArea = styled.textarea`
    width: 250px;
    height: 300px;
`;

const Button = styled.button`

`;

export default CreateTeam;
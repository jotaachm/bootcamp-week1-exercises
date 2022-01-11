import React, { useEffect, useState } from 'react';
import { StyledH1, Container, Background } from '../mainpage/styles';
import Line from '../../components/line/line';
import { Center } from "../../components/center/center";
import NavBar from '../../components/navBar/navBar';
import { StyledLink } from '../../components/navBar/styles';
import TwoImages from '../../components/img';
import santander from './santander.png';
import map from './map.png';

const GreetingPage = () => {

    const [weather, setWeather] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=santander&appid=886705b4c1182eb1c69f28eb8c520e20')
            const data = await res.json()
            setWeather(data.weather[0].description.toUpperCase())
        }
        fetchData()
    }, [])

    return (
        <Background>
            <NavBar></NavBar>
            <Container>
                <StyledH1>Welcome!!</StyledH1>
                <Line></Line>
                <Center V H>
                    <h3>The weather for today in Santander, Spain is: {weather}</h3>
                </Center>
                <TwoImages src1={santander} src2={map} alt1={"Santander"} alt2={"Santander in the map of Spain"}></TwoImages>
                <Center V H>
                    <StyledLink to={'/todo'}>Take me to my personal assistant please!</StyledLink>
                </Center>
            </Container>
        </Background >
    )
}

export default GreetingPage
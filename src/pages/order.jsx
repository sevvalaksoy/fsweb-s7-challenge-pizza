import styled from "styled-components"
import Description from "../components/description"
import Header from "../components/header"
import Size from "../components/size"
import Ingridients from "../components/ingridients"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export default function Order () {

    return (
        <Container>
            <Header/>
            <Description/>
            <Size/>
            <Ingridients/>
        </Container>
    )
}
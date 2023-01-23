import { Container, Column, Title, TitleHighlight, } from "./style";
import { Header } from "../../components/header";
import {Card} from "../../components/card-post";
import { UserInfo } from "../../components/userInfo";

const Feed = () => {
    return (
        <>
            <Header authenticated={true}/>
            <Container>
               <Column flex={3}> 
               <Title>Feed</Title>
               <Card/>
               <Card/>
               <Card/>
               </Column>
            
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo nome="Marcus Vieira" image="https://avatars.githubusercontent.com/u/79718740?s=96&v=4" percentual={90}/ >
                <UserInfo nome="Marcus Vieira" image="https://avatars.githubusercontent.com/u/79718740?s=96&v=4" percentual={50}/ >
                <UserInfo nome="Marcus Vieira" image="https://avatars.githubusercontent.com/u/79718740?s=96&v=4" percentual={80}/ >
                <UserInfo nome="Marcus Vieira" image="https://avatars.githubusercontent.com/u/79718740?s=96&v=4" percentual={67}/ >
            </Column>
            </Container>
        </>
    );
};

export { Feed };
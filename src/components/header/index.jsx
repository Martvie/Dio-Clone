import {
    Container,
    Row,
    Wrapper,
    SearchInputContainer,
    Menu,
    MenuRight,
    Input,
    UserPicture,
} from "./styles";
import Button from "../button/index";

import Logo from "../../assets/logo-dio.png";

const Header = ({ authenticated }) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={Logo} alt="Logo DIO" />
                    {authenticated ? (
                        <>
                            <SearchInputContainer>
                                <Input placeholder="Buscar..." />
                            </SearchInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {authenticated ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/79718740?s=400&u=a81131afdb7fd141923534501830af3a059cc4cf&v=4" />
                    ) : (
                        <>
                            <MenuRight href="#">Home</MenuRight>
                            <Button title={"Entrar"} />
                            <Button title={"Cadastrar"} />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    );
};

export { Header };
//TODO continuar de 23min

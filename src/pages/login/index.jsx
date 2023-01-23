import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import Button from "../../components/button";

import {Column, Container, CreateText, ForgetText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from "./style";

const Login = () => {

    const navigate = useNavigate();
    const handleClickSingIn = () => navigate('/feed');

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form>
                    <Input placeholder="E-mail" type="password" leftIcon={<MdEmail/>}/>
                    <Input placeholder="Password" type="password" leftIcon={<MdLock/>}/>
                    <Button title="Entrar" variant="second" onClick={handleClickSingIn} type="button"/>
                    </form>
                    <Row>
                        <ForgetText>Esqueci minha senha</ForgetText>
                        <CreateText>Criar conta</CreateText>
                    </Row>
                </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Login };
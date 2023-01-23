import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import Button from "../../components/button";

import {Column, Container, CreateText, ForgetText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from "./style";

import {api} from "../../services/api";

const schema = yup.object({
    email: yup.string().email('email não é valido').required('Campo obrigatório!'),
    password: yup.string().min(3, "Coloque no mínimo 3 caracteres").required('Campo obrigatório!'),
  }).required();

const Login = () => {

    const navigate = useNavigate();

      const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
});




const onSubmit = async (formData) => {
    try{
        const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
        
        if(data.length && data[0].id){
            navigate('/feed') 
            return
        }

        alert('Usuário ou senha inválido')
    }catch(e){
        //TODO: HOUVE UM ERRO
    }
};

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
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <Input control={control}  errorMessage={errors?.email?.message} name="email" placeholder="E-mail"  type="email" leftIcon={<MdEmail/>}/>
                    <Input control={control}  errorMessage={errors?.password?.message} name="password" placeholder="Password"  type="password" leftIcon={<MdLock/>}/>
                    <Button title="Entrar" variant="second" type="submit"/>
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
import { MdEmail, MdLock, MdPerson} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Header } from "../../components/header";
import { Input } from "../../components/input";
import Button from "../../components/button";

import {Column, Container, Text, Title, TitleCreate, Wrapper, TextWrapper, HaveAccount} from "./style";

const schema = yup.object({
    name: yup.string().required('Campo obrigatório!'),
    email: yup.string().email('email não é valido').required('Campo obrigatório!'),
    password: yup.string().min(3, "Coloque no mínimo 3 caracteres").required('Campo obrigatório!'),
  }).required();

const Create = () => {

    const navigate = useNavigate();

      const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
});




const onSubmit = () => {
     navigate('/feed') 
};

const toLogin = () => {
    navigate('/login') 
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
                    <TitleCreate>Comece agora grátis</TitleCreate>
                    <Text>Crie sua conta e make the change._</Text>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Input control={control} errorMessage={errors?.name?.message}name="name" placeholder="Nome"  type="name" leftIcon={<MdPerson className="icon"/>}/>
                        <Input control={control}  errorMessage={errors?.email?.message} name="email" placeholder="E-mail"  type="email" leftIcon={<MdEmail/>}/>
                        <Input control={control}  errorMessage={errors?.password?.message} name="password" placeholder="Password"  type="password" leftIcon={<MdLock/>}/>
                        <Button title="Criar Minha Conta" variant="second" type="submit" />
                    </form>
                    <TextWrapper>
                        <Text>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </Text>

                    <HaveAccount>Já tenho conta. <a onClick={toLogin}> Fazer login </a></HaveAccount>

                    </TextWrapper>
                </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Create };
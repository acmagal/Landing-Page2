import logo from "../assets/logoheader.svg";
import CelNote from "../assets/banner.png";
import React from "react";
import playStoreFooter from "../assets/playstoreFooter.svg";
import appleFooter from "../assets/appleStoreFooter.svg";
import google from "./../assets/google.svg";
import googleplay from "./../assets/googleplay.svg";
import apple from "./../assets/apple.svg";
import monitor from "../assets/MonitorHow.svg";
import celHow from "../assets/MobileHow.svg";
import table from "../assets/TableHow.svg";
import NoteBefore from "../assets/NoteBefore.svg";
import imageAB from "../assets/imageAB.svg";
import LogoWithout from "../assets/LogoWithout.svg";

import {
  Header,
  HeaderButtonsdiv,
  HeaderButton,
  Dash,
  ImgWrapper,
  LoginButton,
  Root,
  Header2,
  Footer,
  TitleWrapper,
  Title,
  Legenda,
  Button,
  ImgAside,
  ImgAsideWrapper,
  FooterWrapper,
  FooterHeader,
  AppText,
  AppButton,
  ComoFunciona,
  ComoFuncionaTextWrapper,
  ComoFuncionaSection,
  ComoFuncionaTitle,
  ComoFuncionaLegenda,
  Box,
  ButtonNumero,
  DescriptionBox,
} from "./Home.jsx";

function Home() {
  return (
    <Root>
      <Header>
        <ImgWrapper>
          <img
            src={logo}
            alt="logo Blu"
            onClick={() => window.open("https://bluvalida.com.br/", "__blank")}
          />
        </ImgWrapper>
        <HeaderButtonsdiv>
          <HeaderButton>Como Funciona</HeaderButton>
          <HeaderButton
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=558597230019&text&type=phone_number&app_absent=0",
                "__blank"
              )
            }
            className="Go"
          >
            Vantagens
          </HeaderButton>
          <HeaderButton
            onClick={() => window.open("https://bluvalida.com.br/", "__blank")}
            className="Go"
          >
            Empresas
          </HeaderButton>
          <Dash>|</Dash>
          <HeaderButton
            onClick={() => window.open("https://bluvalida.com.br/", "__blank")}
            className="Go"
          >
            <LoginButton>Login</LoginButton>
          </HeaderButton>
        </HeaderButtonsdiv>
      </Header>

      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <Header2>
        <TitleWrapper>
          <Title>
            Deseja enviar boletos via remessa de modo descomplicado?
          </Title>
          <Legenda>
            Conheça o Blu Valida, o aplicativo que facilita suas operações de
            modo organizado e seguro.
          </Legenda>
          <Button
            onClick={() =>
              window.open("https://bluvalida.com.br/create-account")
            }
            src="aaa"
          >
            Cadastre-se já!
          </Button>
        </TitleWrapper>
        <ImgAsideWrapper>
          <ImgAside src={CelNote} />
        </ImgAsideWrapper>

        <FooterWrapper>
          <FooterHeader>
            <AppText>Disponível na sua loja de aplicativos!</AppText>
            <AppButton
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.blu.bluvalida"
                )
              }
            >
              GET IT ON
              <span>
                <img src={google} alt="google" />
                <img src={googleplay} alt="googleplay" />
              </span>
            </AppButton>
            <AppButton>
              Download on the
              <span>
                <img src={apple} alt="apple" />
              </span>
            </AppButton>
          </FooterHeader>
        </FooterWrapper>
      </Header2>

      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <ComoFunciona>
        <ComoFuncionaTextWrapper>
          <ComoFuncionaTitle>
            Reduza as complexibilidades em suas operações!
          </ComoFuncionaTitle>
          <ComoFuncionaLegenda>
            Conheça o Blu Valida, o aplicativo que facilita suas operações de
            modo <b>organizado e seguro.</b>
          </ComoFuncionaLegenda>
        </ComoFuncionaTextWrapper>

        <ComoFuncionaSection>
          <Box>
            <img src={monitor} alt="Monitor" />
            <DescriptionBox>
              <ButtonNumero>1</ButtonNumero>
              <span>
                A empresa remetente cadastrada em nossa conta (parceiros), envia
                um documento de remessa com os boletos em formato ”txt”.
              </span>
            </DescriptionBox>
          </Box>

          <Box>
            <img src={table} alt="Monitor" />
            <DescriptionBox>
              <ButtonNumero>2</ButtonNumero>
              <span>
                O Blu valida converte essa remessa em boletos e encaminha aos
                clientes cadastrados no app.
              </span>
            </DescriptionBox>
          </Box>

          <Box>
            <img src={celHow} alt="Monitor" />
            <DescriptionBox>
              <ButtonNumero>3</ButtonNumero>
              <span>
                O cliente encaminha o comprovante pago, e este é enviado pelo
                app para a empresa, atualizando o status do boleto para
                ”anexado”
              </span>
            </DescriptionBox>
          </Box>
        </ComoFuncionaSection>
      </ComoFunciona>

      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      {/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

      <Footer>
        Blu Valida 2022. Todos os direitos reservados.
        <p>Precisa de ajuda?</p>
        <p>
          Entre em contato com nosso canal de{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=558597230019&text&type=phone_number&app_absent=0"
            target="__blank"
          >
            Suporte
          </a>
          !
        </p>
        <div>
          Download:
          <a
            target="__blank"
            href="https://play.google.com/store/apps/details?id=com.blu.bluvalida"
          >
            <img src={playStoreFooter} alt="googleFooter" />
          </a>
          <img src={appleFooter} alt="appleFooter" />
        </div>
      </Footer>
    </Root>
  );
}

export default Home;

import styled from "styled-components";

export const Root = styled.div`
  background-color: white;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  font-family: "Figtree", sans-serif;
  overflow: hidden;
  @media (max-width: 1024px) {
    min-width: 100vw;
  }
`;
export const Header = styled.div`
  width: 100vw;
  height: 15vh;
  background-color: #1d2b4e;
  -webkit-box-shadow: 0px 0px 21px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 21px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 21px 2px rgba(0, 0, 0, 0.75);
  font-size: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  flex-wrap: wrap;
  z-index: 1;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const HeaderButtonsdiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Dash = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: white;
`;

export const LoginButton = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
`;

export const HeaderButton = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 1.18rem;
  font-weight: 500;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: translateY(4px) scale(1.1);
  }
`;
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

export const Header2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background: rgb(31, 46, 84);
  background: linear-gradient(
    150deg,
    rgba(31, 46, 84, 1) 3%,
    rgba(29, 43, 78, 1) 50%,
    rgba(43, 69, 133, 1) 100%
  );
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 5rem;
  width: 45em;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: 700;
`;

export const Legenda = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 200;
  padding-top: 3em;
  padding-bottom: 3em;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #253c8c;
  border-color: transparent;
  color: white;
  height: 6vh;
  font-weight: 500;
  font-size: 1em;
  border-radius: 100px;
  cursor: pointer;
  :hover {
    transform: scale(1.6);
  }
  :active {
    transform: translateY(4px) scale(1.02);
  }
`;

export const ImgAsideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export const ImgAside = styled.img`
  width: 25em;
  @media (min-width: 768px) {
    padding: 5em;
    width: 35em;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  padding: 5em;
  flex-direction: column;
`;

export const FooterHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const AppText = styled.div`
  color: #ffff;
`;

export const AppButton = styled.button`
  background-color: #000;
  width: 300px;
  color: white;
  border-radius: 15px;
  font-size: 10px;
  height: 56px;
  cursor: pointer;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  :hover {
    transform: scale(1.02);
  }
  :active {
    transform: translateY(4px) scale(1.02);
  }
`;

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
export const ComoFunciona = styled.div`
  width: 100vw;
`;

export const ComoFuncionaTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  text-align: center;
  width: 100vw;
`;

export const ComoFuncionaTitle = styled.div`
  font-size: 1.9em;
  font-weight: 700;
  width: 100vw;
  padding-top: 2em;
`;

export const ComoFuncionaLegenda = styled.div`
  color: #cccccc;
  padding: 1em;
  font-size: 1em;
  font-weight: 600;
`;

export const ComoFuncionaSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1em;

  img {
    margin-bottom: 2em;
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 20em;
  height: 10em;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
`;

export const ButtonNumero = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  width: 1.5em;
  height: 1.5em;
  margin-bottom: 1em;
  color: #fff;
  border-radius: 50%;
  border-color: transparent;
  background-color: #253c8c;
  -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
`;
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

export const NossosPlanosWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 90vh;
  background-color: #f5f7fe;
`;
/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

export const OtimizeSeuEnvioWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 90vh;
`;

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
export const Footer = styled.div`
  background: #1d2b4e;
  width: 100vw;
  margin-top: 100px;
  padding-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  color: white;
  font-size: 20px;
  font-weight: 400;
  line-height: 14px;
  height: 40px;

  a {
    text-decoration: underline;
    cursor: pointer;
    color: white;
    :hover {
      transform: scale(1.1);
    }
    :active {
      transform: translateY(4px) scale(1.1);
    }
    :visited {
      color: white;
    }
  }
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    img {
      cursor: pointer;
      :hover {
        transform: scale(1.1);
      }
      :active {
        transform: translateY(4px) scale(1.1);
      }
    }
  }

  @media (max-width: 1024px) {
    font-size: 15px;
    flex-direction: column;
    padding-top: 25px;
    height: 20vh;

    p {
      font-size: 14px;
      margin-bottom: 0px;
    }
  }
`;

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

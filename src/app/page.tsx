import Image from "next/image";
import styles from "./page.module.css";
import Wrapper from "@/components/Wrapper/Wrapper";
import Container from "@/components/Container/Container";
import Main from "@/components/Main/Main";
import Navigation from "@/components/Navigation/Navigation";
import Center from "@/components/Center/Center";
import Sidebar from "@/components/Sidebar/Sidebar";
import Bar from "@/components/Bar/Bar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
 return (
  <Wrapper>
    <Container>
      <Main>
        <Navigation/>
          <Center/>
          <Sidebar/>
      </Main>
        <Bar/>
        <Footer/>
    </Container>
  </Wrapper>
      );
}

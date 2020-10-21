import React from 'react';
import logo from './logo.png';
import './App.css';
import {Typography, Layout, Tag, Carousel, Row, Col, Card} from 'antd';
import {
    TwitterOutlined,
    GithubOutlined,
    MailOutlined

} from '@ant-design/icons';
function App() {
  const { Title, Paragraph } = Typography;
  const { Header, Footer, Content } = Layout;

  const topicsCarrousel = [
      'Desenvolupament de programari web',
      'Organització de Hackathons',
      'Serveis de consultoria tecnològica',
      'Disseny de hardware IoT',
      'Desenvolupament d\'apps per a dispositius mòbils'
  ];

  return (
    <Layout>
        <Header className="header">
                <img src={logo} height="50" alt="logo" />
                <Title id="title">Ciclion HackLab</Title>
        </Header>
        <Content className="content">
            <Paragraph>Ciclion és un espai de creativitat tecnològica enfocat al desenvolupament de projectes</Paragraph>
            <Carousel autoplay dots={false}>
                {topicsCarrousel.map(topic =>
                    <h3 key={topic} style={{marginTop: '5px'}}>{topic}</h3>
                )}
            </Carousel>
            <Row>
                <Col span={12}>
                    <Card>
                        <Card.Meta
                            title="Desenvolupament Web"
                            description="Creem des de 0 les pàgines web més avançades amb els frameworks més moderns (Angular i React)" />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Card.Meta
                            title="Desenvolupament d'Apps Mòbils"
                            description="Desenvolupem aplicacions/frameworks natius per iOS i Android i també fem apps híbrides amb Ionic" />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Card>
                        <Card.Meta
                            title="Arquitectura de Solucions al Núvol"
                            description="Dissenyem sistemes complexos al núvol: bases de dades, servidors, clusters d'aplicacions containeritzades, etc..." />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                        <Card.Meta
                            title="Disseny de Sistemes IoT"
                            description="Des d'una pulsera BLE a un NAS fet amb una Raspberry Pi, ens encanten els projectes de IoT i l'electrònica en general" />
                    </Card>
                </Col>
            </Row>
        </Content>
        <Footer>
            <Paragraph>
                Ens podeu contactar a
            </Paragraph>
            <Tag icon={<MailOutlined />} color="grey">
                <a href="mailto:hola@ciclion.com" rel="noopener noreferrer" target="_blank">hola@ciclion.com</a>
            </Tag>
            <Tag icon={<TwitterOutlined />} color="#55acee">
                <a href="https://twitter.com/_ciclion" rel="noopener noreferrer" target="_blank">@_ciclion</a>
            </Tag>
            <Tag icon={<GithubOutlined />} color="black">
                <a href="https://github.com/ciclion" rel="noopener noreferrer" target="_blank">/ciclion</a>
            </Tag>
        </Footer>
    </Layout>
  );
}

export default App;

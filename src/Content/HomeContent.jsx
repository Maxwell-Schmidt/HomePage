import { memo } from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import professionalPhoto from '../Assets/Max_Schmidt_Professional.jpeg'
import resume from '../Assets/Maxwell_Schmidt_Resume_02.26.25.pdf'

function HomeContent() {
    return (
      <div>
        <Container>
            <Row>
                <Col sm={12} md={8} lg={7}>
                    <img src={professionalPhoto} alt="Professional photo of Max Schmidt" style={{width:"inherit"}}/>
                </Col>
                <Col sm={12} md={4} lg={5} style={{backgroundColor:"#e5e5f7"}}>
                    <p>
                        Welcome to my webpage! I am a third year student at the University of Wisconsin Madison studying Computer Science,
                        Data Science, and German. This website is in progress, but will hold my portfolio of professional projects as I create them.
                        For more information on my qualifications or if you'd like to view my LinkedIn, see the links below!
                    </p>
                    <Row>
                        <Col style={{textAlign: "center"}}><a href={resume} target="_blank">Résumé</a></Col>
                        <Col style={{textAlign: "center"}}><a href="https://www.linkedin.com/in/maxwell-r-schmidt/" target="_blank">LinkedIn</a></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
    );
  }
  
  export default memo(HomeContent);
  
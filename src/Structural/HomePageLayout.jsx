import {Container,Row, Col} from 'react-bootstrap';
import professionalPhoto from '../Assets/Max_Schmidt_Professional.jpeg'
import resume from '../Assets/Maxwell_Schmidt_Resume_02.26.25.pdf'

function HomePageLayout() {
    return (
      <div>
        <nav style={{color:"black"}}>Welcome to the Home Page of Maxwell Schmidt</nav>
        <br></br>
        <Container>
            <Row>
                <Col sm={12} md={8} lg={7}>
                    <img src={professionalPhoto} alt="Professional photo of Max Schmidt" style={{width:"inherit"}}/>
                </Col>
                <Col sm={12} md={4} lg={5} style={{backgroundColor:"lightgray"}}>
                    <p>
                        Welcome to my webpage! I am a third year student at the University of Wisconsin Madison studying Computer Science,
                        Data Science, and German. This website is in progress, but will hold my portfolio of professional projects as I create them.
                        For more information on my qualifications or if you'd like to view my LinkedIn, see the links below!
                    </p>
                    <Row>
                        <Col style={{textAlign: "center"}}><a href={resume}>Resumé</a></Col>
                        <Col style={{textAlign: "center"}}><a href="https://www.linkedin.com/in/maxwell-r-schmidt/">LinkedIn</a></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
    );
  }
  
  export default HomePageLayout;
  
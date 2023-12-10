import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../Assets/img/header-img.svg";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ " Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState (300 - Math.random() * 100);
    const period = 2000;
    
    useEffect (() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return() => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);


        setText (updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updateText === '')
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenue sur mon Portfolio</span>
                        <h1>{"Lejeune Corentin"}<span className="wrap">{text}</span></h1>
                        <p>Je suis un développeur Full Stack passionné par la création d'expériences numériques exceptionnelles. De la construction d'interfaces réactives à la mise en place de solutions serveur robustes, je combine créativité et expertise technique pour développer des projets innovants. Découvrez mes compétences et explorons ensemble de nouvelles opportunités !</p>
                        <button onClick={() => console.log('connect')}> Connexion <ArrowRightCircle size={25} ></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Member from '../Member/Member';
import './ourteam.css'

const OurTeam = () => {

    const [members, setMembers] = useState([]);

    // fetch the data 
    useEffect(() => {
        fetch('https://shielded-retreat-55862.herokuapp.com/ourteam')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);

    return (
        <div>
            <Header></Header>
            <div className='our-team pt-5 pb-5 bg-light text-center'>
                <Container>
                    <h4 className='text-center text-muted mb-5'> Meet Our Team</h4>
                    <Row xs={1} lg={2} xl={3} className="g-4">
                        {
                            members.map(member => <Member member={member}
                                key={member.key}
                            ></Member>)
                        }
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};



export default OurTeam;
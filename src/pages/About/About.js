import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
const About = () => {
    return (
        <div>
            <Header></Header>
            <div style={{
                background: "#F8F9FA",
                letterSpacing: ".025em"

            }}>
                <Container className='py-5' >
                    <div className='py-3'>
                        <h2 className='py-1 text-primary'>About Us </h2>
                        <div className='ms-1'>
                            <p>BikeValy.com is #1 motorcycle oriented website in Bangladesh where Bike enthusiasts from all over the country can find all the information about any bike. From motorcycle price in Bangladesh and Motorcycle Specification to the test ride reviews of various bikes and first impression reviews of any newly launched bikes. Since 2012, BikeValy is providing information to everyone across the nation about various offers from the motorcycle or related companies, news, coverage of motorcycle based or related events, and any update on any rules about motorcycle sector in Bangladesh.</p>

                            <p> At modern age, everyone is well acquainted with the latest technologies. Most of the peoples want to buy a Bike to ride one to another. The new wave of technology has started with the Bike. Most of the people are currently fascinated and known with this latest Bike news. The people of Bangladesh are also no exception.</p>




                            <p>It is tough to find a website in Bangladesh that provides all kinds of information, including for Bikes, including all specifications..</p>
                            <p>However, we have created a new site called BikeValy to solve this problem. We have been discussing every product of each of the biggest Bike brands of the latest updates</p>

                            <p>So, all the Bangladeshi customers get the proper benefit from it. Our site has been created, keeping in mind all the people of Bangladesh to get the maximum benefit from us.</p>
                        </div>





                    </div>

                    <div className='py-3'>
                        <h4 className='py-1 text-primary'>Our Niche:</h4>
                        <div className='ms-1'>
                            <p>We have tried to bring all the information, including the specification, reviews, updated news, and price to you in our BikeValy site, which is much related to the only for Bike.</p>
                            <p>Bangladeshi customers will get updated news for every Bike product of each brand from our website. We ensure the latest and correct information about the Bike to our visitor to fulfilling all curiosity and demands. Our information will help them to buy any desired model.</p>
                        </div>




                    </div>
                    <div className='py-3'>
                        <h4 className='py-1 text-primary'>Why We are Different from Others:</h4>
                        <div className='ms-1'>
                            <p>You can find many sites online that discuss only a specific technology, whether it can be a Bike. But it's tough to find a place that explains all four techniques at once or more! Our website is an exception to all because it publishes all information about each brand and model of these four technologies simultaneously</p>
                            <p>It is a blessing for all Bangladeshi customers that they will no longer need to search online for any information as we have access to everything on this site. We have specifically created a massive list of each brand and model these four technologies. If you want to get information about a model, all you have to do is click on that specific one, and then you can see all the information about it.</p>
                        </div>


                    </div>
                    <div className='py-3'>
                        <h4 className='py-1 text-primary'>Statement:</h4>
                        <div className='ms-1'>
                            <p>Our BikeValy site provides detailed discussion, reviews, update news, specification, and price of each of the models of various brands of Bikes.</p>
                            <p>Reviews of each model are presented in such a way that you can compare one model to another. We have listed the correct updated price for each model determined from some of Poplar's e-commerce sites.</p>
                        </div>

                    </div>
                    <div className='py-3'>
                        <h4 className='py-1 text-primary'>Final Thoughts:</h4>
                        <div className='ms-1'>
                            <p>Generally, Bangladeshi customers do not find any informative website related to only the latest and specifications of the Bike. To help them alleviate this problem, we have been creating this site to get all the latest information and updates about Bikes.</p>
                            <p>The more thing about our site, if you want, you can inform us of any problems related to these bikes' models via phone or email and our social media. We will try to give you our quick best service to help you.</p>
                        </div>

                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
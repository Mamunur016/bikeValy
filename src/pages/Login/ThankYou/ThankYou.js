import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const ThankYou = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <img src="https://images.unsplash.com/photo-1517076731070-13c65bcb2e86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGhhbmslMjB5b3V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" style={{
                    width: "100%",
                    height: "400px"
                }} />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ThankYou;
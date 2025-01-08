import React, {useEffect} from 'react';
import ScrollReveal from "scrollreveal";

const Chat = () => {

    useEffect(() => {
        ScrollReveal().reveal('.chat .chat-box', {
            origin: 'bottom',
            distance: '100px',
            duration: 1000,
            delay: 300,
            reset: false,
        });
    }, []);

    return (
        <section className="chat">
            <div className="container">
                <div className="chat-box bg-light p-5">
                    <h2>Got something in mind?</h2>
                    <p>Send us an email, we will be more than happy to assist you one-on-one</p>
                    <a href="mailto:waagvit@gmail.com" className="btn button-chat button-primary">Let's Chat</a>
                </div>
            </div>
        </section>
    );
};

export default Chat;
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
        <section className="chat py-5">
            <div className="container">
                <div className="chat-box bg-light p-5">
                    <h2>Got something in mind?</h2>
                    <p>Book a meeting with me. I will be more than happy to answer your question.</p>
                    <button className="btn btn-dark dropdown-toggle" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        Let's Chat
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Chat;
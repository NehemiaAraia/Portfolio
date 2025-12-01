import React, { useRef } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = form.current;
    if (!currentForm) return;

    	const name = (currentForm.elements.namedItem('name') as HTMLInputElement).value;
	const email = (currentForm.elements.namedItem('email') as HTMLInputElement).value;
	const message = (currentForm.elements.namedItem('message') as HTMLTextAreaElement).value;


    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        'service_d4ew3uq',          
        'template_k81dgre',         
        templateParams,
        '-KahcuvPMg8OzdR-R'         
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully.');
          currentForm.reset(); // Clear the form
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Message failed to send. Please try again later.');
        }
      );
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Always open to new conversations, opportunities, and ideas. Feel free to reach out!</p>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              required
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                color: 'black',
                backgroundColor: 'white',
              }}
            />
            <input
              type="text"
              name="email"
              placeholder="Email / Phone*"
              required
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                color: 'black',
                backgroundColor: 'white',
              }}
            />
            <textarea
              name="message"
              placeholder="Message*"
              rows={8}
              required
              style={{
                width: '100%',
                padding: '10px',
                color: 'black',
                backgroundColor: 'white',
              }}
            ></textarea>
            <button type="submit" className="send-button">
  Send
</button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
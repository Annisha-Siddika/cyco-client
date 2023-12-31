import { useState } from 'react';
import './Contact.css';
import Container from '../../components/container/Container';
import useTitle from '../../hooks/useTitle';

const Contacts = () => {
  // Page Title
  useTitle('Contact | CYCO')


  const addresses = [
    {
      name: 'Head Office',
      address: '123 Main Street',
      city: 'Dhaka Bangladesh',
      state: 'Mirpor Road',
      postalCode: '12345',
      country: 'Bangladesh',
    },
    {
      name: 'Brance',
      address: '456 Elm Avenue',
      city: 'China, Lorems',
      state: 'State 2',
      postalCode: '67890',
      country: 'China ',
    },
    {
      name: 'Control Room',
      address: '789 Oak Lane',
      city: 'trailo, USA',
      state: 'State 3',
      postalCode: '54321',
      country: 'USA',
    },
    {
      name: 'Helpline',
      address: '101 Pine Street',
      city: 'Nioh,china',
      state: 'Chinais Complex',
      postalCode: '98765',
      country: 'China',
    },
  ];
  const [isFormVisible, setIsFormVisible] = useState(false);
  return (
    <Container>
      <div className="flex flex-col mt-20 mx-auto h-screen">
        {/* Contact Form */}
        <section id="contact" className="w-full md:[50%] xl:w-[40%]">
          <div className="sectionheader">
            <h1>CONTACT</h1>
          </div>
          <article>
            <p className="text-black text-sm text-center">
              Have questions, suggestions, or feedback? We'd love to hear from
              you! At Cyco TV, we're dedicated to providing you with the best
              streaming experience and an extensive collection of movies and TV
              shows.
            </p>

            <label htmlFor="checkcontact" className="contactbutton">
              <div className="mail"></div>
            </label>
            <input id="checkcontact" type="checkbox" />

            <form action="" method="post" className="contactform" netlify>
              <p className="input_wrapper">
                <input type="text" name="name" id="name" />
                <label htmlFor="name">NAME</label>
              </p>
              <p className="input_wrapper">
                <input type="text" name="email" d id="email" />
                <label htmlFor="email">EMAIL</label>
              </p>
              <p className="input_wrapper">
                <input type="text" name="contact" id="contact" />
                <label htmlFor="contact">SUBJECT</label>
              </p>
              <p className="textarea_wrapper">
                <textarea name="contact_message" id="contact_message"></textarea>
              </p>
              <p className="submit_wrapper">
                <input type="submit" value="ENVOYER" />
              </p>
            </form>
          </article>
        </section>
        {/* Address */}
        {/* <div className="mt-10">
        <h1 className="text-xl font-semibold mb-4 text-center">Our Office</h1>
        <div className="grid gap-2 grid-cols-2">
          {addresses?.map((address, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{address.name}</h3>
              <p>
                {address.address}
                <br />
                {address.city}, {address.state} {address.postalCode}
                <br />
                {address.country}
              </p>
            </div>
          ))}
        </div>
      </div> */}
      </div>
    </Container>
  );
};

export default Contacts;

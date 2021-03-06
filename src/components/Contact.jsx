import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [status, setStatus] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yi8zese",
        "template_c9qmnqf",
        form.current,
        "6Fr99y5yPf4vzsNuH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("SUCCESS");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#03010E] text-[#E6E6E6] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-4">
          <p className="text-4xl font-bold inline ">
            <a className="text-[#b2fefd]">xi. </a>
            Contact
          </p>
          <p className="text-gray-300 py-2">
            Let's get in touch! I’m open to full-time opportunities.
          </p>
        </div>
        <div>
          <input
            type="text"
            className="my-2 p-2 bg-[#c6caca] form-control w-full"
            placeholder="Name"
            name="user_name"
          />
        </div>

        <div>
          <input
            type="email"
            className="my-2 p-2 bg-[#c6caca] form-control w-full"
            placeholder="Email"
            name="user_email"
          />
        </div>

        <div>
          <textarea
            className="my-2 p-2 bg-[#c6caca] form-control w-full"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>

        <div>
          <input
            type="submit"
            className="ml-[80%] text-[#b2fefd] group border-2 border-[#b2fefd] rounded-md px-2 py-1 flex items-center hover:bg-[#b2fefd24] hover:border-[#b2fefd] btn-message-submit"
            placeholder="Message"
            name="submit"
            value="Let's Connect!"
          />
        </div>
        {/* email success message*/}
        <div>{status && renderAlert()}</div>
      </form>
    </div>
  );
};

/*
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#03010E] text-[#E6E6E6] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/9282e804-1783-40b3-ba7c-9d22a94bfaad"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-4">
          <p className="text-4xl font-bold inline ">
            <a className="text-[#b2fefd]">xi. </a>
            Contact
          </p>
          <p className="text-gray-300 py-2">Let's get in touch!</p>
        </div>
        <input
          className="my-2 p-2 bg-[#c6caca]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-2 p-2 bg-[#c6caca]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="my-2 p-2 bg-[#c6caca]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="text-[#b2fefd] group border-2 border-[#b2fefd] rounded-md px-2 py-1 flex items-center hover:bg-[#b2fefd24] hover:border-[#b2fefd]"
        >
          Let's Get Connected!
        </button>
      </form>
    </div>
  );
};

*/

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue rounded mb-5 text-center">
    <a className="text-[#b2fefd]">
      Thank you so much! Your message submitted successfully.
    </a>
  </div>
);

export default Contact;

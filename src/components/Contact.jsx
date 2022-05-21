import React from "react";

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
        <button className="text-[#b2fefd] group border-2 border-[#b2fefd] rounded-md px-2 py-1 flex items-center hover:bg-[#b2fefd24] hover:border-[#b2fefd]">
          Let's Get Connected!
        </button>
      </form>
    </div>
  );
};

export default Contact;

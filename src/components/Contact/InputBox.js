import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function InputBox() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_s7l6rda',
        'template_0mk91nb',
        form.current,
        'aV5vgf8-feK56xvce'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputPhone').value = '';
    document.getElementById('inputMessage').value = '';
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      {/* <!-- Input Box First Name --> */}
      <div>
        <label
          for="first-name"
          className="block text-sm font-medium text-warm-gray-900"
        >
          First name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="first_name"
            id="firstName"
            autocomplete="given-name"
            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-stone-600 rounded-md"
          />
        </div>
      </div>

      {/* <!-- Input Box Last Name --> */}
      <div>
        <label
          for="last-name"
          className="block text-sm font-medium text-warm-gray-900"
        >
          Last name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="last_name"
            id="lastName"
            autocomplete="family-name"
            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-stone-600 rounded-md"
          />
        </div>
      </div>

      {/* <!-- Input Box Email --> */}
      <div>
        <label
          for="email"
          className="block text-sm font-medium text-warm-gray-900"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            id="inputEmail"
            name="email"
            type="email"
            autocomplete="email"
            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-stone-600 rounded-md"
          />
        </div>
      </div>

      {/* <!-- Input Box Phone --> */}
      <div>
        <div className="flex justify-between">
          <label
            for="phone"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Phone
          </label>
          <span id="phone-optional" className="text-sm text-warm-gray-500">
            Optional
          </span>
        </div>
        <div className="mt-1">
          <input
            type="text"
            name="phone"
            id="inputPhone"
            autocomplete="tel"
            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-stone-600 rounded-md"
            aria-describedby="phone-optional"
          />
        </div>
      </div>

      {/* <!-- Input Box Message --> */}
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label
            for="message"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Message
          </label>
          <span id="message-max" className="text-sm text-warm-gray-500">
            Max. 500 characters
          </span>
        </div>
        <div className="mt-1">
          <textarea
            id="inputMessage"
            name="message"
            rows="4"
            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-stone-600 rounded-md"
            aria-describedby="message-max"
          ></textarea>
        </div>
      </div>

      {/* <!-- Input Box Button --> */}
      <div className="sm:col-span-2 sm:flex sm:justify-end">
        <button
          type="submit"
          value="send"
          className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default InputBox;

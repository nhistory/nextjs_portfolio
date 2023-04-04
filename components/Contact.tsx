import React, { useState } from 'react';

const Contact = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState('Send Message');

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {
      fullname: false,
      email: false,
      subject: false,
      message: false,
    };
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Sending');
      const res = await fetch('/api/sendgrid.ts', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Send Message');

        // Reset form fields
        setFullname('');
        setEmail('');
        setMessage('');
        setSubject('');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Send Message');
      // Reset form fields
      setFullname('');
      setEmail('');
      setMessage('');
      setSubject('');
    }
    console.log(fullname, email, subject, message);
  };

  return (
    <div className="bg-white mt-[5vh] mx-auto rounded-md shadow-xl md:max-w-3xl dark:bg-gray-800">
      <div className="p-2 md:p-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-8 py-8 md:px-20"
        >
          <label
            htmlFor="fullname"
            className="text-gray-500 font-medium text-start my-4 ml-4 dark:text-gray-50"
          >
            Full name<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            placeholder="Full name"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-teal-400 font-light text-gray-500"
          />
          {(errors as any).fullname && (
            <p className="text-red-500">Fullname cannot be empty.</p>
          )}
          <label
            htmlFor="email"
            className="text-gray-500 font-medium text-start mt-8 mb-4 ml-4 dark:text-gray-50"
          >
            Email<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            className="bg-transparent border py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-teal-400 font-light text-gray-500"
          />
          {(errors as any).email && (
            <p className="text-red-500">Email cannot be empty.</p>
          )}
          <label
            htmlFor="subject"
            className="text-gray-500 font-medium text-start mt-8 mb-4 ml-4 dark:text-gray-50"
          >
            Subject<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            name="subject"
            className="bg-transparent border py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-teal-400 font-light text-gray-500"
          />
          {(errors as any).subject && (
            <p className="text-red-500">Subject cannot be empty.</p>
          )}
          <label
            htmlFor="message"
            className="text-gray-500 font-medium text-start mt-8 mb-4 ml-4 dark:text-gray-50"
          >
            Message<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
            className="bg-transparent border py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-teal-400 font-light text-gray-500"
          />
          {(errors as any).message && (
            <p className="text-red-500">Message body cannot be empty.</p>
          )}

          <div className="flex justify-center flex-col items-center">
            <div className=" sm:mx-10 text-slate-800 mt-8 md:mx-70 md:w-xl lg:w-[700px] flex flex-col items-center"></div>
            <button
              className="border-2  text-md mt-5 rounded-md py-2 bg-teal-100 text-teal-800 px-4 hover:bg-teal-200 border-teal-400 dark:bg-gray-700 dark:text-teal-400 dark:hover:bg-gray-800"
              type="submit"
            >
              {buttonText}
            </button>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-teal-800 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

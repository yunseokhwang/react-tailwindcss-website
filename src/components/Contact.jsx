import React from 'react';

const Contact = () => {
    return (
        <div name="contact" className="bg-gradient-to-b from-black to-gray-800 text-white w-full min-h-screen flex justify-center items-center">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center">
                <div className="text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        What's Next?
                    </p>
                </div>
                <div className="text-center mt-12 md:mt-20">
                    <p className="text-4xl">
                    Get in Touch!
                    </p>
                </div>
                <br />
                <div className="text-center mt-4 md:mt-6 max-w-2xl">
                <p className="text-xl">
                I'm currently looking for any new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll make sure to get back to you!
                </p>
                </div>
            </div>
        </div>
      )
    }
export default Contact;
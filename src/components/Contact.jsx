import React from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8142ccc3-fe84-4648-b89d-62a57ed35e14");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      //   alert("Form Submitted Successfully");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("");
      //   alert(data.message);
      toast.error(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="p-6 md:px-20 py-20 lg:px-32 text-center overflow-hidden w-full"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 under decoration-1 font-light">
          With Us
        </span>
      </h1>
      <p className="text-gray-500 mb-12 text-center mx-auto max-w-80">
        Ready to Make a Move? Let's Build Your Future Together
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl pt-8 mx-auto text-gray-600"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              placeholder="Your Name"
              required
              className="px-4 mt-2 rounded py-3 border border-gray-300 w-full"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              placeholder="Your Email"
              required
              className="px-4 mt-2 rounded py-3 border border-gray-300 w-full"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border resize-none border-gray-300 rounded h-48 py-3 px-4 mt-2"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div>
          <button className="rounded mb-10 cursor-pointer text-white bg-blue-600 py-2 px-12">
            {result ? result : "Send Message"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ly Sreypov",
          from_email: form.email,
          to_email: "lysreypov1911@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.div
      variants={slideIn("up", "tween", 0.2, 1)}
      className=" bg-white p-8 rounded-2xl mx-auto w-full max-w-2xl drop-shadow-xl"
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        <label className="flex flex-col">
          <span className="text-gray-500 font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your good name?"
            className="bg-gray py-3 px-6 placeholder:text-gray-400 text-gray-500 rounded-lg outline-none border-none font-medium sm:w-auto"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-500 font-medium mb-4">Your email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your web address?"
            className="bg-gray py-3 px-6 placeholder:text-gray-400 text-gray-500 rounded-lg outline-none border-none font-medium sm:w-auto"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-500 font-medium mb-4">Your Message</span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say?"
            className="bg-gray py-3 px-6 placeholder:text-gray-400 text-gray-500 rounded-lg outline-none border-none font-medium sm:w-auto"
          />
        </label>

        <button
          type="submit"
          className="bg-purple py-3 px-8 rounded-xl outline-none w-fit text-white font-medium shadow-md"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");

import { useState } from "react";

function Contact() {
  const [reason, setReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      setReason("");
      setOtherReason("");
      setEmail("");
      setMessage("");

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div
      id="contact"
      className="h-full bg-gradient-to-b from-[#0d0d0d] to-[#101010] py-24"
    >
      <div className="flex justify-start md:justify-center items-center">
        <h2 className="text-2xl font-medium bg-gradient-to-l text-transparent bg-clip-text from-[#dfdfdf] to-[#d2d2d2] px-6">
          Contact Us
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-4 w-11/12 mx-auto pb-24 pt-12">
        <div className="w-full md:w-2/3 lg:w-1/2 bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 rounded-lg p-6">
          <h3 className="text-xl md:text-2xl text-[#d2d2d2] font-medium mb-6">
            Get in touch with us
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[#c2c2c2] mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#272727] border border-[#3a3a3a] rounded-md p-2 text-[#d2d2d2] focus:outline-none focus:border-[#a0a0a0] transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="reason" className="text-[#c2c2c2] mb-2">
                Reason for Contact
              </label>
              <select
                id="reason"
                required
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="bg-[#272727] border border-[#3a3a3a] rounded-md p-2 text-[#d2d2d2] focus:outline-none focus:border-[#a0a0a0] transition-all duration-300"
              >
                <option value="">Select a reason</option>
                <option value="product-question">Product Question</option>
                <option value="training-advice">Training Advice</option>
                <option value="bug-report">Website Bug Report</option>
                <option value="collaboration">Collaboration Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>

            {reason === "other" && (
              <div className="flex flex-col">
                <label htmlFor="otherReason" className="text-[#c2c2c2] mb-2">
                  Please specify
                </label>
                <input
                  type="text"
                  id="otherReason"
                  required
                  value={otherReason}
                  onChange={(e) => setOtherReason(e.target.value)}
                  className="bg-[#272727] border border-[#3a3a3a] rounded-md p-2 text-[#d2d2d2] focus:outline-none focus:border-[#a0a0a0] transition-all duration-300"
                  placeholder="Specify your reason"
                />
              </div>
            )}

            <div className="flex flex-col">
              <label htmlFor="message" className="text-[#c2c2c2] mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="bg-[#272727] border border-[#3a3a3a] rounded-md p-2 text-[#d2d2d2] focus:outline-none focus:border-[#a0a0a0] transition-all duration-300 resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 bg-[#343434] text-[#e2e2e2] px-6 py-3 rounded-md text-lg font-medium transform duration-500 transition hover:opacity-75 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-500/40 rounded-md text-green-200">
                Your message has been sent successfully. We'll get back to you
                soon!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-4 p-3 bg-red-500/20 border border-red-500/40 rounded-md text-red-200">
                There was an error sending your message. Please try again later.
              </div>
            )}
          </form>
        </div>

        <div className="w-full md:w-1/4 lg:w-1/3 bg-[#1b1b1b]/80 border border-[#3a3a3a] shadow-lg shadow-black/40 rounded-lg p-6">
          <h3 className="text-xl md:text-2xl text-[#d2d2d2] font-medium mb-6">
            Our Details
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-[#a0a0a0] text-lg font-medium mb-1">Email</h4>
              <p className="text-[#d2d2d2]">info@barborn.com</p>
            </div>

            <div>
              <h4 className="text-[#a0a0a0] text-lg font-medium mb-1">Phone</h4>
              <p className="text-[#d2d2d2]">+1 (555) 123-4567</p>
            </div>

            <div>
              <h4 className="text-[#a0a0a0] text-lg font-medium mb-1">
                Social
              </h4>
              <div className="flex gap-4 mt-2">
                <a
                  href="#"
                  className="text-[#d2d2d2] hover:text-[#a0a0a0] transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#d2d2d2] hover:text-[#a0a0a0] transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#d2d2d2] hover:text-[#a0a0a0] transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-youtube"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;


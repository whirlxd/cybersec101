import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Faq() {
  return (
    <div className="bg-base-200">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <AnimationOnScroll animateOnce={true} animateIn="zoomInDown">
              <h1 className="text-5xl font-bold  mt-10">HTTP(S) 🔒</h1>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={true}
              animateIn="slideInDown"
              delay={700}
            >
              <p className="py-6 mb-5">
                what is the main difference between these 2 and why is it
                important
              </p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row w-full justify-center items-start md:items-center lg:items-center">
        <AnimationOnScroll animateOnce={true} animateIn="lightSpeedInLeft">
          <FaqCard
            question="What is HTTP"
            answer="HTTP (Hypertext Transfer Protocol) is ..."
            longdesc="HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands. It operates at the application layer and uses a request-response model where a client sends a request to a server, and the server sends back the requested information.
"
          />
        </AnimationOnScroll>

        {/* Hide the divider on small screens and adjust styling for larger screens */}
        <div className="hidden sm:flex md:flex lg:flex divider lg:divider-horizontal mx-auto  justify-center items-center h-screen"></div>

        <AnimationOnScroll animateOnce={true} animateIn="lightSpeedInRight">
          <FaqCard
            question="What is HTTPS?"
            answer="HTTPS (Hypertext Transfer Protocol Secu..."
            longdesc="HTTPS (Hypertext Transfer Protocol Secure) is an extension of HTTP designed to secure data communication over a computer network. It uses SSL/TLS protocols to encrypt the data exchanged between the client and server. This encryption ensures that sensitive information such as login credentials, credit card details, and personal data are protected from eavesdroppers and attackers during transmission."
          />
        </AnimationOnScroll>
      </div>

      <br></br>
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row w-full justify-center items-start md:items-center lg:items-center">
        <AnimationOnScroll animateOnce={true} animateIn="lightSpeedInLeft">
          <FaqCard
            question="How does HTTPS improve security?"
            answer="HTTPS improves security by encrypting ..."
            longdesc="HTTPS improves security by encrypting data sent between a user's browser and the website server, making it difficult for third parties to intercept or tamper with the data. This encryption is achieved through SSL/TLS protocols, which provide confidentiality, integrity, and authentication. Confidentiality ensures that only the intended recipient can read the data. Integrity ensures that the data has not been altered. Authentication verifies the identity of the website, ensuring users are communicating with the intended site."
          />
        </AnimationOnScroll>

        <div className="hidden sm:flex md:flex lg:flex divider lg:divider-horizontal mx-auto  justify-center items-center h-screen"></div>
        <AnimationOnScroll animateOnce={true} animateIn="lightSpeedInRight">
          <FaqCard
            question="Why is HTTPS important for websites?"
            answer="HTTPS is crucial for several reasons I... "
            longdesc="HTTPS is crucial for several reasons. It protects user data from being intercepted by hackers, thereby ensuring privacy and security. It also builds trust with users, as they can see their data is secure. Furthermore, modern web browsers mark non-HTTPS sites as *Not Secure,* which can deter users. HTTPS is also a factor in search engine rankings, with search engines like Google favoring secure sites. Lastly, it is required for accessing new browser features and APIs."
          />
        </AnimationOnScroll>
      </div>
      <br></br>
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row w-full justify-center items-start md:items-center lg:items-center ">
        <AnimationOnScroll animateOnce={true} animateIn="lightSpeedInLeft">
          <FaqCard
            question="How can you tell if a website uses HTTPS?"
            answer="To determine if a website uses HTTPS l..."
            longdesc="To determine if a website uses HTTPS, look at the URL in the browser's address bar. If the URL starts with *https://* instead of *http://*, the site is using HTTPS. Additionally, most browsers display a padlock icon next to the URL, indicating a secure connection. Some browsers may also show warnings if a site is not secure, highlighting the importance of using HTTPS."
          />
        </AnimationOnScroll>

        <div className="hidden sm:flex md:flex lg:flex divider lg:divider-horizontal mx-auto  justify-center items-center h-screen"></div>
        <AnimationOnScroll animateOnce={true} animateIn="lightSpeedInRight">
          <FaqCard
            question="How much do HTTPS certificates cost?"
            answer="The cost of HTTPS certificates can vary..."
            longdesc="The cost of HTTPS certificates can vary widely. Some certificate authorities (CAs) offer free certificates, like Let's Encrypt, which provide basic SSL/TLS encryption. Other CAs offer paid certificates that can range from $10 to several hundred dollars per year, depending on the level of validation (Domain Validation, Organization Validation, Extended Validation) and additional features like warranty, customer support, and site seals."
          />
        </AnimationOnScroll>
      </div>
      <br></br>

      <br></br>
      <br></br>
      <AnimationOnScroll animateOnce={true} animateIn="zoomInUp" offset={50}>
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTTPS"
          target="_blank"
          className="btn btn-primary btn-wide flex flex-col  mx-auto justify-center"
        >
          [ Learn More ]
        </a>
      </AnimationOnScroll>

      <br></br>

      <br></br>
    </div>
  );
}

function FaqCard(props) {
  // Rest of your component...
  const applyBlur = () => {
    document.body.style.filter = "blur(10px)";
  };

  const removeBlur = () => {
    document.body.style.filter = "none";
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    document.getElementById(props.question).showModal();
    setIsModalOpen(true);
    applyBlur(); // Apply blur when opening the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    removeBlur(); // Remove blur when closing the modal
    document.getElementById(props.question).close();
  };
  return (
    <div>
      <div className={isModalOpen ? "blur-background" : ""}>
        <div onClick={openModal}>
          <dialog
            id={props.question}
            className="modal"
            open={isModalOpen}
            onClose={closeModal}
          >
            <div className="modal-box ease-in-out delay-50 bg-[#9713fb]">
              <div className="mockup-code overflow-x-hidden  h-45 w-50 text-balance ">
                <pre data-prefix="$:" className="text-warning">
                  <code>{props.question}</code>
                </pre>
                <pre data-prefix=">:" className="text-success ">
                  <div className="text-center text-pretty ">
                    <code className="">{props.longdesc}</code>
                  </div>
                </pre>
              </div>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button onClick={closeModal}>close</button>
            </form>
          </dialog>
          <div
            onClick={openModal}
            className="mockup-code overflow-x-hidden  h-45 w-50 text-balance "
          >
            <pre data-prefix="$:" className="text-warning">
              <code>{props.question}</code>
            </pre>
            <pre data-prefix=">:" className="text-success text-clip">
              <code>{props.answer}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;

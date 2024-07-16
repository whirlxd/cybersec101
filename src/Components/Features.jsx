import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./blur.css";

function Features() {
  // Rest of your component...

  return (
    <>
      <div className="hero bg-base-100 ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <AnimationOnScroll animateOnce={true} animateIn="zoomInDown">
              <h1 className="text-5xl font-bold mb-10 mt-10 ">
                [ Vulnerbilities ]
              </h1>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={true}
              animateIn="slideInDown"
              delay={700}
            >
              <p className="py- mb-5">The way hackers exploit your website</p>
            </AnimationOnScroll>
          </div>
        </div>
      </div>

      <div className="lg:flex flex-col w-full  justify-center lg:flex-row sm:carousel bg-base-100">
        <AnimationOnScroll animateOnce={true} animateIn="zoomInLeft">
          <FeatureCard
            title="XSS Attacks"
            desc="Inject malicious scripts into web apps, exploiting vulnerabilities to steal data or hijack sessions.
"
            longdesc="Cross-site scripting (XSS) is a type of security vulnerability typically found in web applications. XSS attacks enable attackers to inject client-side scripts into web pages viewed by other users. A cross-site scripting vulnerability may be used by attackers to bypass access controls such as the same-origin policy. "
            previewImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Q2Bpmok5hiUQ29D3OTkJshFD5uBIc7t7y1SHddhlfUt8runH11nqEXFCubgjR7-vMVE&usqp=CAU"
          />
        </AnimationOnScroll>

        <div className="divider lg:divider-horizontal mx-auto"></div>

        <AnimationOnScroll animateOnce={true} animateIn="zoomIn">
          <FeatureCard
            title="SQL INJECTION"
            desc="Compromise databases via unauthorized queries, enabling data manipulation or exposure."
            longdesc="SQL Injection (SQLi) is a type of security vulnerability typically found in web applications that interact with databases. SQLi attacks enable attackers to execute arbitrary SQL queries within the database used by the application. An SQL injection vulnerability may be used by attackers to bypass authentication, extract sensitive data, modify or delete records, and perform administrative operations on the database."
            previewImage="https://t4.ftcdn.net/jpg/02/32/33/37/360_F_232333735_VB5UjyqrqxO9OQWeeiRiRzYvyd9iJY2f.jpg"
          />
        </AnimationOnScroll>
        <div className="divider lg:divider-horizontal mx-auto"></div>
        <AnimationOnScroll animateOnce={true} animateIn="zoomInRight">
          <FeatureCard
            title="LFI/RFI"
            longdesc="Local File Inclusion (LFI) / Remote File Inclusion (RFI) are types of security vulnerabilities commonly found in web applications. LFI allows attackers to include files from the server's filesystem, while RFI allows the inclusion of files from remote servers. These vulnerabilities may be exploited to execute arbitrary code, disclose sensitive information, or escalate privileges within the server hosting the web application."
            desc="Allow attackers to read local files without relying on environment variables, posing a significant security risk.
"
            previewImage="https://miro.medium.com/v2/resize:fit:1400/1*tzWXBtmGms1wGIt-ApMZzg.jpeg"
          />
        </AnimationOnScroll>
      </div>

      <div className="flex flex-col w-full  justify-center lg:flex-row bg-base-100">
        <AnimationOnScroll animateOnce={true} animateIn="zoomInLeft">
          <FeatureCard
            title="SSI Injection"
            longdesc="Server-Side Includes (SSI) Injection is a type of security vulnerability found in web applications that use SSI directives. SSI injection attacks enable attackers to inject and execute arbitrary SSI directives on the server. This can be used to read sensitive files, execute server-side commands, or modify the content delivered to the client, potentially leading to unauthorized access or data manipulation.

"
            desc="Manipulate server-side includes, potentially leading to unauthorized content insertion.
"
            previewImage="https://www.creativefabrica.com/wp-content/uploads/2020/02/09/server-Graphics-1-1-580x387.jpg"
          />
        </AnimationOnScroll>
        <div className="divider lg:divider-horizontal mx-auto"></div>
        <AnimationOnScroll animateOnce={true} animateIn="zoomInRight">
          <FeatureCard
            title="RCE"
            longdesc="Remote Code Execution (RCE) is a type of security vulnerability that allows attackers to execute arbitrary code on a remote server. RCE vulnerabilities can be exploited through various means, such as injecting malicious code via web applications or exploiting flaws in software running on the server. Successful exploitation of RCE can lead to complete control over the affected system, allowing attackers to steal data, disrupt services, or deploy malware."
            desc="Enables execution of arbitrary commands on a remote host, granting full control over the targeted system.
"
            previewImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkBnAbYjhpOmO-yyUGRks56CeoZAnbFySaw&usqp=CAU"
          />
        </AnimationOnScroll>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

function FeatureCard(props) {
  // Rest of your component...
  const applyBlur = () => {
    document.body.style.filter = "blur(10px)";
  };

  const removeBlur = () => {
    document.body.style.filter = "none";
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    document.getElementById(props.title).showModal();
    setIsModalOpen(true);
    applyBlur(); // Apply blur when opening the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    removeBlur(); // Remove blur when closing the modal
    document.getElementById(props.title).close();
  };
  return (
    <div className=" grid  card m-1 w-96 bg-base-100 transition ease-in-out delay-100 shadow-2xl hover:bg-[#9713fb] hover:font-extrabold">
      {/* modal end */}
      <div className={isModalOpen ? "blur-background" : ""}>
        <div onClick={openModal}>
          <dialog
            id={props.title}
            className="modal"
            open={isModalOpen}
            onClose={closeModal}
          >
            <div className="modal-box ease-in-out delay-50 bg-base-300 shadow-2xl">
              <figure className="px-10 pt-10 ">
                <img
                  src={props.previewImage}
                  alt="Feature"
                  className="rounded-xl"
                  height={200}
                  width={200}
                />
              </figure>

              <div className="card-body items-center text-center">
                <h2 className="card-title">{props.title}</h2>

                <div className="card-actions ">{props.longdesc}</div>
              </div>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button onClick={closeModal}>close</button>
            </form>
          </dialog>

          <figure className="px-10 pt-10">
            <img
              src={props.previewImage}
              alt="Feature"
              className="rounded-xl"
              height={200}
              width={200}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{props.title}</h2>

            <div className="card-actions">{props.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
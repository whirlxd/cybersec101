import React, { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./team.css";
import Footer from "./Footer";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function Team() {
  const [isLocked, setIsLocked] = useState(true);
  const [ip, setIP] = useState("");
  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");

    setIP(res.data.ip);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  const unlockSection = () => {
    const regex = new RegExp(
      `^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`
    );
    const regName = /^[a-zA-Z]/;
    let userAnswers = "";

    MySwal.fire({
      title: <p>Fill the form to get access</p>,
      input: "text",
      icon: "info",
      inputLabel: "Your Name",
      showCancelButton: false,
      inputValue: "",
      inputValidator: (value) => {
        if (!regName.test(value)) {
          return "Please enter a valid name";
        }
      },
    }).then((result) => {
      const answer1 = result.value;
      MySwal.fire({
        title: <p>Please answer honestly</p>,
        input: "text",
        icon: "info",
        inputLabel: "Your Phone Number",
        showCancelButton: false,
        inputValue: "",
        inputValidator: (value) => {
          if (!regex.test(value)) {
            return "Please submit a valid phone number!";
          }
        },
      }).then((result) => {
        const answer2 = result.value;
        userAnswers += `
Whoa, ${answer1}!

You just shared some personal info for access to resources:

• Your Name: ${answer1}
• Your Phone Number: ${answer2}
• Your IP Address: ${ip} [which i was able to get when you visited this site and submitted the form]

Did you realize you gave all that away just by filling out a form?

A Friendly Heads-Up:

- Think twice before sharing your personal information online, especially for small perks or extras.
- Be cautious when downloading files from sources you don't trust.
- Remember, if a website isn't secure, your data might end up in the hands of third-party actors.
- Don't blindly trust website developers or forms asking for personal details.


Stay smart, stay safe, and keep your info secure!

This version should effectively communicate the risks while remaining engaging and user-friendly.`;
        console.log("User answers:", userAnswers);
        const blob = new Blob([userAnswers], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url; // Specify the file URL
        link.download = "extraresources.txt"; // Specify the filename
        link.click();
        setIsLocked(false);
      });
    });
  };
  return (
    <div className="relative">
      <div
        className={`${isLocked ? "blur-section" : ""} absolute inset-0 z-10`}
      >
        {isLocked && (
          <div className="bg-base-200">
            <div className="hero">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <AnimationOnScroll animateOnce={true} animateIn="zoomInDown">
                    <h1 className="text-5xl font-bold  mt-10 text-nowrap">
                      Resources++📕
                    </h1>
                  </AnimationOnScroll>
                  <AnimationOnScroll
                    animateOnce={true}
                    animateIn="slideInDown"
                    delay={200}
                  >
                    <p className="py-6 mb-5">
                      Now that you are aware of basic cybersecurity conecepts
                      here are some resources to get started
                    </p>
                  </AnimationOnScroll>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center lg:flex-row">
              <TeamMember
                name="Linux Foundation"
                avatar="https://github.com/whirlxd.png"
                title1="Learning "
                title2="Projects"
                github="https://training.linuxfoundation.org/"
                twitter="https://training.linuxfoundation.org/"
              ></TeamMember>

              <TeamMember
                name="TODO Group"
                avatar="https://github.com/whirl21.png"
                title1="Projects"
                title2="Learning"
                github="https://www.channelfutures.com/connectivity/todo-group-new-linux-foundation-project-spurs-open-source-adoption"
                twitter="https://www.linkedin.com/company/todosecurity/"
              ></TeamMember>

              <TeamMember
                name="HackTheBox"
                avatar="https://github.com/whirl21.png"
                title1="CTF"
                title2="Learning"
                github="https://www.hackthebox.com/"
                twitter="https://twitter.com/whirl_21"
              ></TeamMember>
            </div>
            <br></br>
            <div className="flex flex-col w-full justify-center lg:flex-row">
              <TeamMember
                name="SEQUEL"
                avatar="https://github.com/shadowcodesyt.png"
                title1="Language"
                title2="Database"
                github="https://sequelpro.com/docs"
                twitter="https://twitter.com/shadowcodesyt"
              ></TeamMember>

              <TeamMember
                name="MDN Docs"
                avatar="https://github.com/whirl21.png"
                title1="Documentation"
                title2="Best Practices"
                github="https://developer.mozilla.org/en-US/"
                twitter="https://twitter.com/whirl_21"
              ></TeamMember>

              <TeamMember
                name="W3School"
                avatar="https://github.com/whirl21.png"
                title1="Documentation"
                title2="Learning"
                github="https://www.w3schools.com/"
                twitter="https://twitter.com/whirl_21"
              ></TeamMember>
            </div>
            <br></br>
            <div className="flex flex-col w-full justify-center lg:flex-row">
              <TeamMember
                name="Kali Linux"
                avatar="https://github.com/shadowcodesyt.png"
                title1="OS"
                title2="Tools"
                github="https://www.kali.org/"
                twitter="https://twitter.com/shadowcodesyt"
              ></TeamMember>

              <TeamMember
                name="SSL Certificate Labs"
                avatar="https://github.com/whirl21.png"
                title1="Tools"
                title2="Service"
                github="https://zerossl.com/"
                twitter="https://twitter.com/whirl_21"
              ></TeamMember>

              <TeamMember
                name="Browser101"
                avatar="https://github.com/whirl21.png"
                title1="Tools"
                title2="Extension"
                github="https://www.youtube.com/playlist?list=PLTA92rkznIIM1RRqwz27X5xQhcB-BwqJl"
                twitter="https://twit"
              ></TeamMember>
            </div>
            <br></br>
          </div>
        )}

        {!isLocked && (
              <div className="bg-base-200">
              <div className="hero">
                <div className="hero-content text-center">
                  <div className="max-w-md">
                    <AnimationOnScroll animateOnce={true} animateIn="zoomInDown">
                      <h1 className="text-5xl font-bold  mt-10 text-nowrap">
                        Resources++📕
                      </h1>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                      animateOnce={true}
                      animateIn="slideInDown"
                      delay={700}
                    >
                      <p className="py-6 mb-5">
                    A collection of handcrafted and Open Source resources to get your journey started
                      </p>
                    </AnimationOnScroll>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full justify-center lg:flex-row">
                <TeamMember
                  name="Linux Foundation"
                  avatar="https://github.com/whirlxd.png"
                  title1="Learning "
                  title2="Projects"
                  github="https://training.linuxfoundation.org/"
                  twitter="https://training.linuxfoundation.org/"
                ></TeamMember>
  
                <TeamMember
                  name="TODO Group"
                  avatar="https://github.com/whirl21.png"
                  title1="Projects"
                  title2="Learning"
                  github="https://www.channelfutures.com/connectivity/todo-group-new-linux-foundation-project-spurs-open-source-adoption"
                  twitter="https://www.linkedin.com/company/todosecurity/"
                ></TeamMember>
  
                <TeamMember
                  name="HackTheBox"
                  avatar="https://github.com/whirl21.png"
                  title1="CTF"
                  title2="Learning"
                  github="https://www.hackthebox.com/"
                  twitter="https://twitter.com/whirl_21"
                ></TeamMember>
              </div>
              <br></br>
              <div className="flex flex-col w-full justify-center lg:flex-row">
                <TeamMember
                  name="SEQUEL"
                  avatar="https://github.com/shadowcodesyt.png"
                  title1="Language"
                  title2="Database"
                  github="https://sequelpro.com/docs"
                  twitter="https://twitter.com/shadowcodesyt"
                ></TeamMember>
  
                <TeamMember
                  name="MDN Docs"
                  avatar="https://github.com/whirl21.png"
                  title1="Documentation"
                  title2="Best Practices"
                  github="https://developer.mozilla.org/en-US/"
                  twitter="https://twitter.com/whirl_21"
                ></TeamMember>
  
                <TeamMember
                  name="W3School"
                  avatar="https://github.com/whirl21.png"
                  title1="Documentation"
                  title2="Learning"
                  github="https://www.w3schools.com/"
                  twitter="https://twitter.com/whirl_21"
                ></TeamMember>
              </div>
              <br></br>
              <div className="flex flex-col w-full justify-center lg:flex-row">
                <TeamMember
                  name="Kali Linux"
                  avatar="https://github.com/shadowcodesyt.png"
                  title1="OS"
                  title2="Tools"
                  github="https://www.kali.org/"
                  twitter="https://twitter.com/shadowcodesyt"
                ></TeamMember>
  
                <TeamMember
                  name="SSL Certificate Labs"
                  avatar="https://github.com/whirl21.png"
                  title1="Tools"
                  title2="Service"
                  github="https://zerossl.com/"
                  twitter="https://twitter.com/whirl_21"
                ></TeamMember>
  
                <TeamMember
                  name="Browser101"
                  avatar="https://github.com/whirl21.png"
                  title1="Tools"
                  title2="Extension"
                  github="https://www.youtube.com/playlist?list=PLTA92rkznIIM1RRqwz27X5xQhcB-BwqJl"
                  twitter="https://twit"
                ></TeamMember>
              </div>
              <br></br>
            </div>
        )}
      </div>
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <button
            onClick={unlockSection}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Unlock Resources 🔑
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <form id="f">
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Email" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Username" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="password" className="grow" value="password" />
                </label>
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      )}
    </div>
  );
}
function TeamMember(props) {
  return (
    <div
      id="component-demo"
      className=" items-center gap-4 overflow-y-hidden overflow-x-scroll px-10 pt-1 pb-10 xl:grid xl:overflow-x-auto xl:px-4"
    >
      <AnimationOnScroll animateOnce={true} animateIn="zoomIn">
        <div className="bg-[#9713fb] rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full ">
          <div className="dropdown">
            <div tabindex="0"></div>
          </div>
          <div>
            <div className="dropdown w-full">
              <div tabindex="0">
                <div className="text-center">
                  <h1 className="text-xl text-[#77fb13] font-extrabold">
                    {props.name}
                  </h1>
                </div>
              </div>
            </div>
            <div className="dropdown w-full">
              <div tabindex="0">
                <div className="mt-2 text-center">
                  <div className="badge badge-ghost mr-3 py-2">
                    {props.title1}
                  </div>
                  <div className="badge badge-ghost mr-3 py-2">
                    {props.title2}
                  </div>
                </div>
              </div>
              <div tabindex="0" className="dropdown-content py-2"></div>
            </div>
          </div>
          <div className="dropdown dropdown-top">
            <div tabindex="0">
              <div className="btn-group">
                <a
                  href={props.github}
                  className="btn btn-neutral btn-sm mr-1"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Team;

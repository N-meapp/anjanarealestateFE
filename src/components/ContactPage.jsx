import React, { useState } from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import GoogleMap from "./GoogleMap";
import axios from "axios";
import { BASE_URL } from "../Constats/Constats";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {
  faCircleExclamation,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export function ContactPage() {
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const [email, setEmail] = useState();
  const location = window.location.href;
  const isContact = location.includes("contact-page");
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [isTriggered, setIsTriggered] = useState(false);
  const [isRequired, setIsRequired] = useState(false);

  const handleMessage = async () => {
    setIsTriggered(true);

    const body = {
      name: name,
      message: message,
      email: email,
    };

    if (name && email && message) {
      setIsContactClicked(true);

      try {
        const response = await axios.post(`${BASE_URL}/users/send-mail`, body);

        if (response.data) {
          if (response.data.success) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Message delivered successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            setEmail("");
            setMessage("");
            setName("");
            setIsContactClicked(false);
            setIsTriggered(false);
          }
        }

        // if (response.data && response.data.data) {
        //   setSinglePropertyData(response.data.data);
        // } else {
        //   console.error("Unexpected response format", response.data);
        //   setError("Unexpected response format");
        // }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
  };

  return (
    <section
      className={`px-8 py-8  mb-10 ${isContact ? "pt-32 lg:pt-48" : null}`}
    >
      <div className="container mx-auto text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl text-[#e1b40069]"
        >
          contact us
        </Typography>
        <Typography
          variant="h1"
          color=""
          className="mb-4 !text-3xl lg:!text-5xl text-[#e1b400]"
        >
          We&apos;re Here to Help
        </Typography>

        <Typography className="mb-10 font-normal !text-lg lg:mb-10 mx-auto max-w-3xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>

        <div className="mt-10 justify-items-center md:mt-20 md:flex md:justify-around">
          <div className="flex gap-4 mb-14">
            <FontAwesomeIcon icon={faLocationDot} className="h-10 text-[#e1b400]" />
            <div className="w-min">
              <h1 className="font-bold">Singarampalayam, Kinathukidavu</h1>
              <h1 className="text-[#608b7c71]">Tamilnadu</h1>
            </div>
          </div>
          <div className="flex gap-4 mb-14">
            <FontAwesomeIcon icon={faPhone} className="h-10 text-[#e1b400]" />
            <div>
             <h1 className="font-bold">+91 9965735888</h1>
              <h1 className="text-[#608b7c71]">+9933442238</h1>
            </div>
          </div>
          <div className="flex gap-4 mb-14">
          <FontAwesomeIcon icon={faEnvelope} className="h-10 text-[#e1b400]" />
          <div className="w-min">
          <h1 className="font-bold">anjanarealestate50@gmail.com</h1>
            <h1 className="text-[#608b7c71]">
            Send us your query anytime!</h1>
          </div>
        </div>
        <div className=" mb-14">
        <h1 className="mb-4 text-[#608b7ccc]">keep in touch!</h1>
        <div className="flex gap-4">
        <a href="https://www.facebook.com/profile.php?id=61567087028926">
        <FontAwesomeIcon icon={faFacebook} className="h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/anjana_realestates/">
        <FontAwesomeIcon icon={faInstagram} className="h-8 cursor-pointer" />
        </a>
        <a href="https://youtube.com/@anjanarealestates?si=a_XYjj6dgLMSSxqK">
        <FontAwesomeIcon icon={faYoutube} className="h-8 cursor-pointer" />
        </a>
        </div>
        
      </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <GoogleMap />

          <form action="#" className="flex flex-col gap-4 lg:max-w-sm">
            <Typography
              variant="small"
              className="text-center mt-8 mb-4 !font-semibold !text-gray-600"
            >
              Drop some!
            </Typography>

            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Name
              </Typography>
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                color="gray"
                size="lg"
                placeholder="Name"
                name="name"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
              {isTriggered ? (
                !name ? (
                  <p className="text-red-400 font-thin text-xs mt-1 text-left">
                    <FontAwesomeIcon icon={faCircleExclamation} /> This field is
                    required
                  </p>
                ) : null
              ) : null}
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Email
              </Typography>
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
              {isTriggered ? (
                !email ? (
                  <p className="text-red-400 font-thin text-xs mt-1 text-left">
                    <FontAwesomeIcon icon={faCircleExclamation} /> This field is
                    required
                  </p>
                ) : null
              ) : null}
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </Typography>
              <Textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
              {isTriggered ? (
                !message ? (
                  <p className="text-red-400 font-thin text-xs mt-1 text-left">
                    <FontAwesomeIcon icon={faCircleExclamation} /> This field is
                    required
                  </p>
                ) : null
              ) : null}
            </div>
            {isContactClicked ? (
              <Button
                className="w-full bg-[#faffe6] text-black border-black border-2"
                color="gray"
              >
                Sending...
              </Button>
            ) : (
              <Button onClick={handleMessage} className="w-full " color="gray">
                Send message
              </Button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;

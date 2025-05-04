import React from "react";
import { Button } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import "./Contact.css";
import { useLanguage } from "../../contexts/LanguageContext";
import { text } from "../../helpers/text";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "benjaminwilson0809@gmail.com",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "mailto:benjaminwilson0809@gmail.com",
  },
  {
    name: "TELEGRAM:",
    info: "@Benjamin WilsonWeb3",
    icon: <BsTelegram className="contact-icon" />,
    url: "https://t.me/Benjamin WilsonWeb3",
  },
  {
    name: "DISCORD:",
    info: "Benjamin Wilson#6804",
    icon: <FaDiscord className="contact-icon" />,
    url: "https://discord.com/users/775249998379614238",
  },
  {
    name: "GitHub:",
    info: "@0xBenjamin Wilson",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/benwilson-blockchain",
  },
];

const Contact = () => {

  const { language } = useLanguage();

  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">{text[language].contactHeading}</p>
        {/*<p className="text">If you have any questions or want to hire me, please contact me:</p>*/}
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank" rel="noreferrer">
              <div className="contact-section">
                {contact.icon}
                <div className="contact-text-div">
                  <p className="contact-title">{contact.name}</p>
                  <p className="contact-details">{contact.info}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="button-container">
        <a href="mailto:Benjamin Wilson@Benjamin Wilson.dev">
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            {text[language].contactButton}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
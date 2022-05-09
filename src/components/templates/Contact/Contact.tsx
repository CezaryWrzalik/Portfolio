import { SectionHeader } from "@molecules/SectionHeader/SectionHeader";
import { ContactForm } from "@organisms/ContactForm/ContactForm";
import Notification from "@organisms/Notification/Notification";
import { ContactWrapper } from "./Contact.styled";

export const Contact = () => {
  return (
    <ContactWrapper id="Contact">
      <SectionHeader>Get in touch</SectionHeader>
      <ContactForm />
      <Notification />
    </ContactWrapper>
  );
};

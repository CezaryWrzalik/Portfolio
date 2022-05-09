import { SectionHeader } from "@molecules/SectionHeader/SectionHeader";
import { ContactForm } from "@organisms/ContactForm/ContactForm";
import { ContactWrapper } from "./Contact.styled";

export const Contact = () => {
  return (
    <ContactWrapper id="Contact">
      <SectionHeader>Get in touch</SectionHeader>
      <ContactForm />
    </ContactWrapper>
  );
};

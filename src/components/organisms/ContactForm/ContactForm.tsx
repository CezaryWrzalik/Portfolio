import { Button } from "@atoms/Button/Button";
import { Input } from "@molecules/Input/Input";
import { Textarea } from "@molecules/Textarea/Textarea";
import { FormEvent } from "react";
import emailjs from "emailjs-com";
import {
  ContactFormInputsWrapper,
  ContactFormTextareaWrapper,
  ContactFormWrapper,
} from "./ContactForm.styled";

export const ContactForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uurehob", "template_a5foe39", e.target, "nrKeg8cMRWUhlEFHg")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
			e.target.reset();
  };

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <ContactFormInputsWrapper>
        <Input label="Email" name="Email" type="email" required/>
        <Input label="Title" name="Title" required/>
      </ContactFormInputsWrapper>
      <ContactFormTextareaWrapper>
        <Textarea label="Message" name={"Message"} required/>
      </ContactFormTextareaWrapper>
      <Button fullWidth>Send</Button>
    </ContactFormWrapper>
  );
};

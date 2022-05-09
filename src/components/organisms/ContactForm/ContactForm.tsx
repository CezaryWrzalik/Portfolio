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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

		console.log(process.env.SERVICE_ID!);
		console.log(process.env.TEMPLATE_ID!);
		console.log(process.env.PERSONAL_ID!);

    emailjs
      .sendForm(
        process.env.SERVICE_ID!,
        process.env.TEMPLATE_ID!,
        e.target as HTMLFormElement,
        process.env.PERSONAL_ID!,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    (e.target as HTMLFormElement).reset();
  };

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <ContactFormInputsWrapper>
        <Input label="Email" name="Email" type="email" required />
        <Input label="Title" name="Title" required />
      </ContactFormInputsWrapper>
      <ContactFormTextareaWrapper>
        <Textarea label="Message" name={"Message"} required />
      </ContactFormTextareaWrapper>
      <Button fullWidth>Send</Button>
    </ContactFormWrapper>
  );
};

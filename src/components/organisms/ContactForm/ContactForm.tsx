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
import { useSetRecoilState } from "recoil";
import { statusAtom } from "@@recoil/atom/statusAtom";

export const ContactForm = () => {
  const setStatusState = useSetRecoilState(statusAtom);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatusState({
      status: "pending",
      message: "Waiting for response",
      title: "Sending Email",
    });
    emailjs
      .sendForm(
        process.env.SERVICE_ID!,
        process.env.TEMPLATE_ID!,
        e.target as HTMLFormElement,
        process.env.PERSONAL_ID
      )
      .then(
        () => {
          setStatusState({
            status: "success",
            message: "Email send",
            title: "Sending Email",
          });
        },
        () => {
          setStatusState({
            status: "error",
            message:
              "Something went wrong. Please try again or send me an Email on wrzalikc@gmail.com",
            title: "Sending Email",
          });
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

import { Button } from "@atoms/Button/Button";
import { Input } from "@molecules/Input/Input";
import { SectionHeader } from "@molecules/SectionHeader/SectionHeader";
import { Textarea } from "@molecules/Textarea/Textarea";
import {
  ContactWrapper,
  Form,
  InputsWrapper,
  TextareaWrapper,
} from "./Contact.styled";

export const Contact = () => {
  return (
    <ContactWrapper id="Contact">
      <SectionHeader>Get in touch</SectionHeader>
      <Form>
        <InputsWrapper>
          <Input label="Email" />
          <Input label="Title" />
        </InputsWrapper>
        <TextareaWrapper>
          <Textarea label="Message" />
        </TextareaWrapper>
        <Button fullWidth>Send</Button>
      </Form>
    </ContactWrapper>
  );
};

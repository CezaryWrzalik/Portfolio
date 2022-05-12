import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { Footer } from "@atoms/Footer/Footer";
import { SectionHeader } from "@molecules/SectionHeader/SectionHeader";
import { ContactForm } from "@organisms/ContactForm/ContactForm";
import Notification from "@organisms/Notification/Notification";
import { useRecoilValue } from "recoil";
import { ContactWrapper, FooterWrapper } from "./Contact.styled";

export const Contact = () => {
  const currElIndex = useRecoilValue(currElIndexAtom);
  return (
    <FooterWrapper>

      <ContactWrapper id="Contact" currElIndex={currElIndex}>
        <SectionHeader>Get in touch</SectionHeader>
        <ContactForm />
        <Notification />
      </ContactWrapper>
      <Footer />
    </FooterWrapper>

  );
};

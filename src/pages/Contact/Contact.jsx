import { ContactStyled } from "./Contact.styled";

const Contact = () => {
  return (
    <ContactStyled>
      <iframe
        title="Contact Form"
        width="100%"
        height="900"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfSJ_i0gCEtptJaWjP1Mi8TRABCgZNyg7DhfIYJQZqmY-6mPg/viewform?embedded=true"
      >
        Loading…
      </iframe>
    </ContactStyled>
  );
};
export default Contact;

import { useState, useEffect } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";
import validateForm from "../Validation";
import toast from "react-hot-toast";
import { sendContactMessage } from "@/services/api/contact";
import { ContactFormData } from "@/types/contact";
import ContactLoadingPlaceholder from "../common/ContactLoadingPlaceholder";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const btn = useMatches({
    xsm: 'xs',
    sm: "sm",
    md: 'md',
    lg: "lg"
  })

  const form: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  }
  
  const [formData, setFormData] = useState<ContactFormData>(form);
  const [formError, setFormError] = useState<ContactFormData>(form);

  useEffect(() => {
    // Simulate loading time for consistency with other components
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
    setFormError({ ...formError, [id]: validateForm(id, value) });
  }

  const handleSubmit = async() => {
    let valid = true;
    let newFormError: ContactFormData = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    (Object.keys(formData) as Array<keyof ContactFormData>).forEach(key => {
      const error = validateForm(key, formData[key]);
      if (error.length > 0) {
        valid = false;
        newFormError[key] = error;
      }
    });
    setFormError(newFormError);

    if (valid) {
      const result = await sendContactMessage(formData);
      if (result.success) {
        toast.success("Message sent successfully");
        setFormData(form); // Reset form
      } else {
        toast.error("Failed to send message");
      }
    }
  }

  return (
    <div className="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0 my-10 font-mono animate-fade-in" id="Contact">
      <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">05.&nbsp;</span>Contact
      </h1>
      <div 
        data-aos="flip-left" 
        data-aos-duration="800" 
        className="w-[70%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 
          border border-primaryColor p-8 rounded-3xl sm-mx:p-4"
      >
        {isLoading ? (
          <ContactLoadingPlaceholder />
        ) : (
          <>
            <div className="text-3xl flex gap-2 items-center text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">
              Let's Connect 
              <IconTopologyStar3 size={30} className="w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7" />
            </div>
            <FloatingInput id="name" name="name" value={formData.name} handleChange={handleChange} error={formError.name} />
            <FloatingInput id="email" name="email" value={formData.email} handleChange={handleChange} error={formError.email} />
            <FloatingInput id="phone" name="phone" value={formData.phone} handleChange={handleChange} error={formError.phone} />
            <FloatingInput id="message" name="message" value={formData.message} handleChange={handleChange} error={formError.message} />
            <Button 
              fullWidth
              onClick={handleSubmit}
              rightSection={<IconArrowRight size={20} />}
              className="!text-bgColor !font-bold !text-2xl" 
              variant="filled" 
              color="primaryColor" 
              size={btn}
            >
              Send
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default Contact;

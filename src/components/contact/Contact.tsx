import { useState, useEffect } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const btn = useMatches({
    xsm: 'xs',
    sm: "sm",
    md: 'md',
    lg: "lg"
  })

  const form = {
    name: "",
    email: "",
    phone: "",
    message: "",
  }
  const [formData, setFormData] = useState<{[key: string]: string}>(form);

  useEffect(() => {
    // Simulate loading time for consistency with other components
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
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
            <>
              <div className="h-8 w-48 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-12 w-full bg-gray-700 rounded animate-pulse"></div>
              <div className="h-12 w-full bg-gray-700 rounded animate-pulse"></div>
              <div className="h-12 w-full bg-gray-700 rounded animate-pulse"></div>
              <div className="h-12 w-full bg-gray-700 rounded animate-pulse"></div>
              <div className="h-12 w-full bg-gray-700 rounded animate-pulse"></div>
            </>
          ) : (
            <>
              <div className="text-3xl flex gap-2 items-center text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">
                Let's Connect 
                <IconTopologyStar3 size={30} className="w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7" />
              </div>
              <FloatingInput id="name" name="name" value={formData.name} handleChange={handleChange} />
              <FloatingInput id="email" name="email" value={formData.email} handleChange={handleChange} />
              <FloatingInput id="phone" name="phone" value={formData.phone} handleChange={handleChange} />
              <FloatingInput id="message" name="message" value={formData.message} handleChange={handleChange} />
              <Button 
                fullWidth
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

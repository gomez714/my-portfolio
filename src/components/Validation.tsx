const validateForm = (id: string, value: string) => {
  switch (id) {
    case "name":
      if (value.length === 0) return "Name is required";
      if (value.length < 3) return "Name must be at least 3 characters long";
      return "";
    case "email":
      if (value.length === 0) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid Email Address";
      return "";
    case "phone":
      if (value.length === 0) return "Phone is required";
      if (!/^[0-9]+$/.test(value)) return "Phone Number is invalid";
      if (value.length < 10) return "Phone Number must be at least 10 digits long";
      return "";
    case "message":
      if (value.length === 0) return "Message is required";
      return "";
    default:
      return "";
  }
}

export default validateForm;
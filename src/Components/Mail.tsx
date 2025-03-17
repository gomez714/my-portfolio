const Mail = () => {
  return (
    <div className="flex items-center md-mx:hidden text-textColor gap-10 fixed bottom-32 -right-44 rotate-90">
      <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
        <a href="mailto:Lgomez00714@gmail.com" 
          className="font-mono tracking-wide hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out"
        >
          Lgomez00714@gmail.com
        </a>
      </div>
      <hr className="border rounded-full border-textColor w-40 bg-textColor" />
    </div>
  )
}

export default Mail;

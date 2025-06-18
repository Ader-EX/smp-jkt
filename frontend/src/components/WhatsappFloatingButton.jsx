import { BsWhatsapp } from "react-icons/bs";

const WhatsappFloatingButton = () => {
  return (
    <>
      <a
        href="https://wa.me/6282188878801"
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-12 right-12 z-50 inline-flex items-center justify-center w-[3.5rem] h-[3.5rem] rounded-full bg-[#25d366]"
      >
        <div className="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-[#25d366] animate-ping"></div>
        <div className="relative z-20">
          <BsWhatsapp className="justify-center size-10 text-white" />
        </div>
      </a>
    </>
  );
};

export default WhatsappFloatingButton;

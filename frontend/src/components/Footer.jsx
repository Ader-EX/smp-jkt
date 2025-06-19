import logoBG from "../assets/logo-bg.png"; // Updated logo import

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center p-4 bg-primary-base text-white text-center mt-10">
      <img src={logoBG} alt="SMP Logo" className="h-16 mb-4" />

      <h2 className="text-lg md:text-xl font-bold">SMP Negeri 244 Jakarta</h2>
      <p className="text-sm mb-2">Mencetak Calon Pemimpin Bangsa</p>

      <hr className="w-full max-w-screen-sm border-white/40 my-4" />

      <div className="text-sm space-y-2 leading-relaxed">
        <p>
          Jl. Bakti VI No.28, Cilincing, Kec. Cilincing, Jkt Utara, Daerah
          Khusus Ibukota Jakarta 14120
        </p>
        <p>
          No. Telp: (021) 4400872 &nbsp; | &nbsp; Email: smpnegeri244@gmail.com
        </p>
      </div>

      <p className="text-xs mt-6 opacity-80">© 2025 – SMP NEGERI 244 JAKARTA</p>
    </footer>
  );
};

export default Footer;

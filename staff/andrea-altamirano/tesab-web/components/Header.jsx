function Header() {
  return (
    <header>
      <div className="flex justify-between bg-[#323A47] p-3">
        <nav className="flex space-x-5 ">
          <a href="https://wa.me/34666967923">
            <img
              className="w-9"
              src="images/social/Wsapp-Blanco.png"
              alt="WhatsApp"
            />
          </a>
          <a href="">
            <img
              className="w-9"
              src="images/social/Youtube-Blanco.png"
              alt="YouTube"
            />
          </a>
          <a href="https://www.instagram.com/tesabspain/">
            <img
              className="w-9"
              src="images/social/Instagram-Blanco.png"
              alt="Instagram"
            />
          </a>
          <a href="https://www.linkedin.com/company/tesab-spain-sl/?viewAsMember=true">
            <img
              className="w-9"
              src="images/social/Linkedin-blanco.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://www.facebook.com/tesabspainsl/">
            <img
              className="w-9"
              src="images/social/Facebook-blanco.png"
              alt="Facebook"
            />
          </a>
        </nav>
        <nav className="flex space-x-8">
          <span className="flex items-center space-x-2">
            <img
              className="w-9"
              src="images/social/Telefono-Blanco.png"
              alt="Telephone"
            />
            <a href="tel:+34944924003" className="text-white">
              944 924 003
            </a>
          </span>

          <span className="flex items-center space-x-2">
            <img
              className="w-9"
              src="images/social/Correo-blanco.png"
              alt="E-mail"
            />
            <a href="mailto:tesab@tesabspain.es" className="text-white">
              tesab@tesabspain.es
            </a>
          </span>
        </nav>
      </div>

      <div className="flex justify-center p-3">
        <div className="flex flex-col justify-self-center self-center">
          <h1 className="">
            <img src="images/tesab-logo.png" alt="Tesab Spain" />
          </h1>
          <h2>Alquiler y venta de maquinaria</h2>
        </div>
        <span className="material-symbols-outlined justify-self-end self-center">
          menu
        </span>
      </div>
    </header>
  );
}

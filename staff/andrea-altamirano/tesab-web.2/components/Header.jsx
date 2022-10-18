function Header() {
  const [toggleButtonText, setToggleMenuText] = React.useState('close')

  const toggleMenu = () => setToggleMenuText(toggleButtonText === 'menu' ? 'close' : 'menu')

  return (
    <header>
      <div className="flex justify-between bg-[#323A47] p-2">
        <nav className="flex space-x-5">
          <a href="https://wa.me/34666967923">
            <img
              className="w-5"
              src="images/social/Wsapp-Blanco.png"
              alt="WhatsApp"
            />
          </a>
          <a href="">
            <img
              className="w-5"
              src="images/social/Youtube-Blanco.png"
              alt="YouTube"
            />
          </a>
          <a href="https://www.instagram.com/tesabspain/">
            <img
              className="w-5"
              src="images/social/Instagram-Blanco.png"
              alt="Instagram"
            />
          </a>
          <a href="https://www.linkedin.com/company/tesab-spain-sl/?viewAsMember=true">
            <img
              className="w-5"
              src="images/social/Linkedin-blanco.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://www.facebook.com/tesabspainsl/">
            <img
              className="w-5"
              src="images/social/Facebook-blanco.png"
              alt="Facebook"
            />
          </a>
        </nav>
        <nav className="flex space-x-8">
          <span className="flex items-center space-x-2">
            <img
              className="w-5"
              src="images/social/Telefono-Blanco.png"
              alt="Telephone"
            />
            <a href="tel:+34944924003" className="text-white">

            </a>
          </span>

          <span className="flex items-center space-x-2">
            <img
              className="w-5"
              src="images/social/Correo-blanco.png"
              alt="E-mail"
            />
            <a href="mailto:tesab@tesabspain.es" className="text-white">

            </a>
          </span>
        </nav>
      </div>

      <div className="flex justify-center p-3 bg-white/75">
        <div className="flex flex-col justify-self-center self-center">
          <h1 className="">
            <img className="" src="images/tesab-logo.png" alt="Tesab Spain" />
          </h1>
          <h2>Alquiler y venta de maquinaria</h2>
        </div>

        <button className="material-symbols-outlined justify-self-end self-center cursor-pointer" onClick={toggleMenu}>
          {toggleButtonText}
        </button>
      </div>

      {toggleButtonText === 'close' && <nav className="bg-white/75">
        <ul>
          <li className="border-b-gray-400 border-2 pl-4 text-right">
            <a href="">English</a>|<a href="">Português</a>
          </li>
          <li className="border-b-gray-400 border-2 pl-4">
            <a href="">Quienes Somos</a>
          </li>
          <li className="border-b-gray-400 border-2 pl-4">
            <span className="flex items-center"><a href="">Equipos</a><span className="material-symbols-outlined">arrow_drop_up</span></span>
            <ul className="ml-4">
              <li className="">
                <a href="">Machacadoras</a>
              </li>
              <li className="">
                <a href="">Cribadoras</a>
              </li >
              <li className="">
                <a href="">Precribadoras</a>
              </li>
              <li className="">
                <a href="">Molinos</a>
              </li>
              <li className="">
                <a href="">Cintas</a>
              </li>
              <li className="">
                <a href="">Reciclaje</a>
              </li>
              <li>
                <a href="">Accesorios</a>
              </li>
            </ul>
          </li >
          <li className="border-b-gray-400 border-2 pl-4"><a href="">Equipos usados</a></li>
          <li className="border-b-gray-400 border-2 pl-4"><a href="">Recambios</a></li>
          <li className="border-b-gray-400 border-2 pl-4"><span className="flex items-center"><a href="">Servicios</a><span className="material-symbols-outlined">arrow_drop_up</span></span>
            <ul className="ml-4">
              <li><a href="">Asesoramiento</a></li>
              <li><a href="">Post-Venta</a>
              </li>
              <li><a href="">Asistencia
                Técnica</a></li>
            </ul>
          </li>
          <li className="border-b-gray-400 border-2 pl-4"><a href="">Application News</a></li>
          <li className="border-b-gray-400 border-2 pl-4"><a href="">Contacto</a></li>
        </ul>
      </nav>}
    </header>
  );
}

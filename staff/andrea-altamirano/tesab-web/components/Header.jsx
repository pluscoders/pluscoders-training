import { useState } from 'react'

function Header() {
  const [toggleMenuButtonText, setToggleMenuText] = useState('close')
  const [toggleEquipmentButtonText, setToggleEquipmentButton] = useState('arrow_drop_up')

  const toggleMenu = () => setToggleMenuText(toggleMenuButtonText === 'menu' ? 'close' : 'menu')
  const toggleEquipment = () => setToggleEquipmentButton(toggleEquipmentButtonText === 'arrow_drop_up' ? 'arrow_drop_down' : 'arrow_drop_up')

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

      <div className="flex justify-between p-3 bg-white/75">
        <div className="flex flex-col justify-self-center self-center">
          <h1 className="">
            <img className="h-8" src="images/tesab-logo.png" alt="Tesab Spain" />
          </h1>
          <h2 className="text-sm font-sans">Alquiler y venta de maquinaria</h2>
        </div>
        <button className="material-symbols-outlined justify-self-end self-center cursor-pointer" onClick={toggleMenu}>
          {toggleMenuButtonText}
        </button>
      </div>
      {toggleMenuButtonText === 'close' && <nav className=" h-full bg-white/75">
        <ul className="font-sans text-lg">
          <li className="pl-4 text-right ">
            <a href="" className="px-4">English</a>|<a href="" className="px-4">Português</a>
          </li>
          <li className="border-b-black border pl-4 py-2">
            <a href="">Quienes Somos</a>
          </li>
          <li className="border-b-black border pl-4 py-2">
            <span className="flex items-center">
              <a href="">Equipos</a>
              <button className="material-symbols-outlined" onClick={toggleEquipment}>{toggleEquipmentButtonText}</button>
            </span>
            {toggleEquipmentButtonText === 'arrow_drop_up' && <ul className="ml-4">
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
                <a href="">Application news</a>
              </li>
            </ul>}
          </li >
          <li className="border-b-black border pl-4 py-2 py-2"><a href="">Equipos usados</a></li>
          <li className="border-b-black border pl-4 py-2"><a href="">Recambios</a></li>
          <li className="border-b-black border pl-4 py-2"><span className="flex items-center"><a href="">Servicios</a><button className="material-symbols-outlined">arrow_drop_up</button></span>
            <ul className="ml-4">
              <li className="py-1"><a href="">Asesoramiento</a></li>
              <li className="py-1"><a href="">Post-Venta</a></li>
              <li className="py-1"><a href="">Asistencia Técnica</a></li>
            </ul>
          </li>
          <li className="border-b-black border pl-4 py-2"><a href="">Application News</a></li>
          <li className="border-b-black border pl-4 py-2"><a href="">Contacto</a></li>
        </ul>
      </nav>}
    </header>
  );
}

export default Header
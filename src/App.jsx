import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function App() {
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const [ref3, inView3] = useInView({ threshold: 0.1 });
  const [ref4, inView4] = useInView({ threshold: 0.1 });
  const [ref5, inView5] = useInView({ threshold: 0.1 });

  // Estado para manejar el idioma actual
  const [language, setLanguage] = useState("en");

  // Objeto con las traducciones
  const translations = {
    en: {
      home: "Home",
      features: "Features",
      aboutUs: "About Us",
      download: "Download",
      tryForFree: "Try For Free",
      getExperience: "Get the best <b>experience</b> when sending messages.",
      platformUsed:
        "Platform used to send messages with a myriad of features. by prioritizing the user experience.",
      downloadNow: "Download Now",
      featured: "Featured",
      reasonsToChoose: "Reasons why you should choose a <b>Chatbox</b>",
      featuresDescription:
        "Chatbox has several features that make the reason why you choose chatbox",
      easyToUse: "Easy to use",
      easyToUseDescription: "Easy to use for anyone, and simple",
      realTime: "Real Time",
      realTimeDescription: "Connect with customers in real time.",
      safetyPrivate: "Safety & Private",
      safetyPrivateDescription:
        "Enjoy your comfort and safety when communicating.",
      communicateEfficiently:
        "Communicate more efficiently by using <b>Chatbox</b>",
      communicateDescription:
        "Send messages easily using only mobile or desktop applications, and with a myriad of features that can make your experience different from other applications.",
      users: "Users",
      downloads: "Downloads",
      years: "Years",
      sendMessagesRealTime:
        "Send messages in <b>Real Time</b>, without any delay between us",
      sendMessagesDescription:
        "Send messages easily and also without any delay between us. Make the convenience of sending messages better and more fun.",
      learnMore: "Learn More",
      wantToStayConnected: "Want to stay Connected?",
      randomDescription:
        "Random used to send messages with a myriad of features. by prioritizing the user experience.",
      mail: "mail@chatbox.com",
      community: "Community",
      getStarted: "Get Started",
      privacyPolicy: "Privacy Policy",
      socialMedia: "Social Media",
      instagram: "Instagram",
      linkedIn: "LinkedIn",
      rightsReserved: "© 2023 Chatbox. All rights reserved.",
    },
    es: {
      home: "Inicio",
      features: "Características",
      aboutUs: "Sobre Nosotros",
      download: "Descargar",
      tryForFree: "Prueba Gratis",
      getExperience: "Obtén la mejor <b>experiencia</b> al enviar mensajes.",
      platformUsed:
        "Plataforma utilizada para enviar mensajes con una gran cantidad de funciones. priorizando la experiencia del usuario.",
      downloadNow: "Descargar Ahora",
      featured: "Destacado",
      reasonsToChoose: "Razones por las que deberías elegir un <b>Chatbox</b>",
      featuresDescription:
        "Chatbox tiene varias características que hacen que sea la mejor opción.",
      easyToUse: "Fácil de usar",
      easyToUseDescription: "Fácil de usar para cualquiera, y simple",
      realTime: "Tiempo Real",
      realTimeDescription: "Conéctate con los clientes en tiempo real.",
      safetyPrivate: "Seguridad y Privacidad",
      safetyPrivateDescription:
        "Disfruta de tu comodidad y seguridad al comunicarte.",
      communicateEfficiently:
        "Comunícate de manera más eficiente usando <b>Chatbox</b>",
      communicateDescription:
        "Envía mensajes fácilmente usando solo aplicaciones móviles o de escritorio, y con una gran cantidad de funciones que pueden hacer que tu experiencia sea diferente a otras aplicaciones.",
      users: "Usuarios",
      downloads: "Descargas",
      years: "Años",
      sendMessagesRealTime:
        "Envía mensajes en <b>Tiempo Real</b>, sin demoras entre nosotros",
      sendMessagesDescription:
        "Envía mensajes fácilmente y también sin demoras entre nosotros. Haz que la comodidad de enviar mensajes sea mejor y más divertida.",
      learnMore: "Aprende Más",
      wantToStayConnected: "¿Quieres mantenerte conectado?",
      randomDescription:
        "Plataforma utilizada para enviar mensajes con una gran cantidad de funciones. priorizando la experiencia del usuario.",
      mail: "mail@chatbox.com",
      community: "Comunidad",
      getStarted: "Comenzar",
      privacyPolicy: "Política de Privacidad",
      socialMedia: "Redes Sociales",
      instagram: "Instagram",
      linkedIn: "LinkedIn",
      rightsReserved: "© 2023 Chatbox. Todos los derechos reservados.",
    },
  };

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <motion.div>
      <div className="p-10 bg-gradient-to-tr from-blue-700 to-blue-500">
        <div className="max-w-[1040px] mx-auto">
          {/* HEADER */}
          <header className="flex justify-between items-center gap-4">
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <svg
                className="w-8 h-8 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
              </svg>

              <h1 className="text-white text-xl font-semibold">Chatbox</h1>
            </div>

            {/* MENU */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-white text-sm">
                {translations[language].home}
              </a>
              <a href="#" className="text-white text-sm">
                {translations[language].features}
              </a>
              <a href="#" className="text-white text-sm">
                {translations[language].aboutUs}
              </a>
              <a href="#" className="text-white text-sm">
                {translations[language].download}
              </a>
            </div>

            {/* TRADUCTOR */}
            <div className="">
              {/* ENGLISH */}
              <button
                className="bg-white text-blue-700 text-sm font-semibold px-8 py-4 rounded-l-full cursor-pointer"
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
              {/* SPANISH */}
              <button
                className="bg-white text-blue-700 text-sm font-semibold px-8 py-4 rounded-r-full cursor-pointer"
                onClick={() => changeLanguage("es")}
              >
                ES
              </button>
            </div>

            {/* BUTTON */}
            <button className="bg-white text-blue-700 text-sm font-semibold px-8 py-4 rounded-full cursor-pointer">
              {translations[language].tryForFree}
            </button>
          </header>

          {/* BANNER */}
          <div className="mt-10">
            {/* HEADER */}
            <div className="flex items-center justify-between">
              <h1
                className="text-6xl/17 text-white"
                dangerouslySetInnerHTML={{
                  __html: translations[language].getExperience,
                }}
              />
              <div className="min-w-[35%] flex flex-col items-end gap-4">
                <h2 className="text-right text-white text-xs/5">
                  {translations[language].platformUsed}
                </h2>
                <button className="flex gap-1 w-fit items-center bg-white text-blue-700 text-sm font-semibold px-8 py-4 rounded-full cursor-pointer">
                  <svg
                    className="w-5 h-5 fill-blue-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <span className="ml-2">
                    {translations[language].downloadNow}
                  </span>
                </button>
                <button className="flex gap-1 w-fit items-center text-white text-sm font-semibold border border-white px-8 py-4 rounded-full cursor-pointer">
                  <svg
                    className="w-5 h-5 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <span className="ml-2">
                    {translations[language].downloadNow}
                  </span>
                </button>
              </div>
            </div>

            {/* MAIN IMAGE */}
            <img className="mt-10 -mb-42 rounded-xl" src="./main.png" />
          </div>
        </div>
      </div>

      {/* LINE */}
      <div className="bg-gray-950 p-10"></div>

      {/* BRANDS */}
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mt-22 py-10 px-15 max-w-[1040px] mx-auto flex justify-between items-center"
      >
        <img
          className="w-16 grayscale opacity-30 hover:opacity-100 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
          alt="stripe"
        />
        <img
          className="w-28 grayscale opacity-25 hover:opacity-100 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSci11wBKbPUYyZQpcTIEntAK1QIQC5C3VChA&s"
          alt="afterpay"
        />
        <img
          className="w-24 grayscale opacity-25 hover:opacity-100 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/2/24/Hopin_logo_%282024%29.png"
          alt="hopin"
        />
        <img
          className="w-24 grayscale opacity-25 hover:opacity-100 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-PASpJ1kGJj0fkrSX9cbRmWely9ylCCjXQ&s"
          alt="splunk"
        />
        <img
          className="w-26 grayscale opacity-25 hover:opacity-100 cursor-pointer"
          src="https://logos-download.com/wp-content/uploads/2022/01/Attentive_Logo.png"
          alt="attentive"
        />
      </motion.div>

      {/* FEATURED */}
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mt-16 p-10 max-w-[1040px] mx-auto"
      >
        {/* FEATURED HEADER */}
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="p-2 bg-gray-200 text-blue-700 text-xs font-semibold rounded-full">
            {translations[language].featured}
          </div>
          <h1
            className="text-3xl"
            dangerouslySetInnerHTML={{
              __html: translations[language].reasonsToChoose,
            }}
          />
          <p className="w-[50%] text-sm/8 text-gray-400 text-center">
            {translations[language].featuresDescription}
          </p>
        </div>

        {/* FEATURED CARDS */}
        <div className="mt-10 grid grid-cols-3 gap-2">
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-gradient-to-tr from-blue-700 to-blue-500 flex flex-col justify-center items-center gap-4 rounded-2xl shadow-lg"
          >
            <div className="p-2 bg-white rounded-[50%]">
              <svg
                className="w-8 h-8 fill-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold">
              {translations[language].easyToUse}
            </h3>
            <p className="text-white text-base/8 text-center">
              {translations[language].easyToUseDescription}
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-gradient-to-tr from-gray-50 to-gray-100 border border-gray-200 flex flex-col justify-center items-center gap-4 rounded-2xl shadow-lg"
          >
            <div className="p-2 bg-white rounded-[50%]">
              <svg
                className="w-8 h-8 fill-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
            </div>
            <h3 className="text-black text-xl font-semibold">
              {translations[language].realTime}
            </h3>
            <p className="text-black text-base/8 text-center">
              {translations[language].realTimeDescription}
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-6 bg-gradient-to-tr from-blue-700 to-blue-500 flex flex-col justify-center items-center gap-4 rounded-2xl shadow-lg"
          >
            <div className="p-2 bg-white rounded-[50%]">
              <svg
                className="w-8 h-8 fill-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold">
              {translations[language].safetyPrivate}
            </h3>
            <p className="text-white text-base/8 text-center">
              {translations[language].safetyPrivateDescription}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* INFORMATION 1 */}
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 50 }}
        animate={inView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mt-16 p-10 max-w-[1040px] mx-auto"
      >
        <div className="flex items-center gap-6">
          {/* FEATURED RIGHT */}
          <div className="flex flex-col items-right gap-6">
            <h1
              className="text-3xl/11"
              dangerouslySetInnerHTML={{
                __html: translations[language].communicateEfficiently,
              }}
            />
            <p className="text-sm/8 text-gray-400">
              {translations[language].communicateDescription}
            </p>
            <div className="flex gap-7">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-3xl">1M+</h3>
                <p className="text-sm text-gray-400">
                  {translations[language].users}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-3xl">2M+</h3>
                <p className="text-sm text-gray-400">
                  {translations[language].downloads}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-3xl">2+</h3>
                <p className="text-sm text-gray-400">
                  {translations[language].years}
                </p>
              </div>
            </div>
          </div>

          {/* FEATURED LEFT */}
          <img className="w-[50%] rounded-2xl" src="./info1.png" />
        </div>
      </motion.div>

      {/* INFORMATION 2 */}
      <motion.div
        ref={ref4}
        initial={{ opacity: 0, y: 50 }}
        animate={inView4 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mt-16 p-10 max-w-[1040px] mx-auto"
      >
        <div className="flex items-center gap-6">
          {/* FEATURED RIGHT */}
          <img className="w-[50%] rounded-2xl" src="./info2.png" />

          {/* FEATURED LEFT */}
          <div className="flex flex-col items-left gap-6">
            <h1
              className="text-3xl/11"
              dangerouslySetInnerHTML={{
                __html: translations[language].sendMessagesRealTime,
              }}
            />
            <p className="text-sm/8 text-gray-400">
              {translations[language].sendMessagesDescription}
            </p>
            <button className="bg-blue-700 w-fit text-white text-sm font-semibold px-8 py-4 rounded-full cursor-pointer">
              {translations[language].learnMore}
            </button>
          </div>
        </div>
      </motion.div>

      <footer className="relative mt-16 p-10 bg-gradient-to-tr from-blue-700 to-blue-500">
        <div className="max-w-[1040px] mx-auto">
          {/* MAIN IMAGE */}
          <img className="rounded-xl" src="./main.png" />
        </div>
        <div className="absolute top-[45%] left-0 w-full bg-gray-950 flex flex-col">
          {/* FOOTER HEADER */}
          <div className="p-10 max-w-[1040px] mx-auto">
            <div className="flex justify-between gap-10">
              <h1 className="text-white text-4xl/14 font-semibold">
                {translations[language].wantToStayConnected}
              </h1>
              <div className="flex gap-2 items-center">
                <button className="min-w-fit flex gap-1 items-center bg-blue-700 text-white text-xs font-semibold px-8 py-4 rounded-full cursor-pointer">
                  <svg
                    className="w-5 h-5 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  <span className="ml-2">
                    {translations[language].downloadNow}
                  </span>
                </button>
                <button className="min-w-fit flex gap-1 items-center text-white text-xs font-semibold border border-white px-8 py-4 rounded-full cursor-pointer">
                  <svg
                    className="w-5 h-5 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <span className="ml-2">
                    {translations[language].downloadNow}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <hr className="border-gray-500 mx-10" />

          {/* FOOTER INFO */}
          <div className="p-10 max-w-[1040px] mx-auto flex justify-between gap-10">
            <div className="flex flex-col gap-6">
              {/* LOGO */}
              <div className="flex items-center gap-2">
                <svg
                  className="w-8 h-8 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
                <h1 className="text-white text-xl font-semibold">Chatbox</h1>
              </div>

              <p className="w-[70%] text-gray-500 text-xs/7">
                {translations[language].randomDescription}
              </p>

              <p className="text-white text-xs">
                {translations[language].mail}
              </p>
            </div>

            <div className="flex justify-between gap-20">
              <ul className="flex flex-col gap-6 text-sm">
                <li className="text-white">{translations[language].home}</li>
                <li className="text-gray-400">
                  <a href="#">{translations[language].aboutUs}</a>
                </li>
                <li className="text-gray-400">
                  <a href="#">{translations[language].download}</a>
                </li>
                <li className="text-gray-400">
                  <a href="#">{translations[language].community}</a>
                </li>
              </ul>
              <ul className="flex flex-col gap-6 text-sm">
                <li className="text-white">
                  {translations[language].features}
                </li>
                <li className="text-gray-400">
                  <a href="#">{translations[language].getStarted}</a>
                </li>
                <li className="text-gray-400">
                  <a href="#">{translations[language].privacyPolicy}</a>
                </li>
              </ul>
              <ul className="flex flex-col gap-6 text-sm">
                <li className="text-white">
                  {translations[language].socialMedia}
                </li>
                <li className="text-gray-400">
                  <a href="#">{translations[language].instagram}</a>
                </li>
                <li className="text-gray-400">
                  <a href="#">{translations[language].linkedIn}</a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-500 mx-10" />

          <p className="py-10 text-white text-sm text-center">
            {translations[language].rightsReserved}
          </p>
        </div>
      </footer>
    </motion.div>
  );
}

export default App;

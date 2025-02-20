const Home = () => {
  return (
    /* FALTA POR O BACKGROUND  E A FRASE ANDANDO PELA SESSÃO*/
    <section className="relative bg-deepBlue min-h-screen flex justify-center items-center relative">
      {/* Div que engloba todo o HOME */}
      <div className="flex flex-col items-center justify-center max-w-5xl gap-14 lg:flex-row">
        {/* Container que engloba o lado esquero da pagina, titulos, botoões e etc */}
        <div className="flex flex-col justify-center lg:items-start space-y-3 text-center px-6">
          {/* Titulo nome */}
          <h1 className="gradient-text2 text-nowrap text-5xl lg:text-7xl font-bold transition-all duration-500">
            Talles Furtado
          </h1>

          {/* Subtitulo profissao */}
          <h2 className="gradient-text font-bold text-2xl md:text-3xl lg:text-5xl">
            Personal Trainer
          </h2>

          <p className=" lg:text-start">
            <strong> Bacharel em Ed.Física </strong>, Atleta e Praticante de
            musculação há mais de <strong>7 anos</strong>. Transformando a vida
            das pessoas.
          </p>

          {/* Div que engloba os links pra Planos e Whatsapp */}
          <div className="flex justify-center space-x-4 mt-6">
            {/* Link para ir pros PLANOS */}
            <a
              href="#planos"
              className="flex justify-center items-center text-lg btn-submit font-bold text-myWhite"
            >
              Planos
            </a>

            {/* Link para ir pro WHATSAPP */}
            <a
              id="whats"
              href="https://api.whatsapp.com/send/?phone=558198955665&text&type=phone_number&app_absent=0"
              target="_blank"
              className="flex justify-center items-center gap-2 text-lg btn-submit font-bold text-myWhite"
            >
              <i className="bx bxl-whatsapp text-4xl"></i>
              Whatsapp
            </a>
          </div>
        </div>

        {/* Container que engloba o lado direito, imagem de perfil */}
        <div className="">
          <img
            src="../../../Image/Img_Hero/profile2.png"
            alt=""
            className="p-1 w-[250px] lg:w-[400px] rounded-b-full shadow-2xl shadow-mainTheme"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

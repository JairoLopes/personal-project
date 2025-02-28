import Slider from "react-slick";

function Resultados() {
  const images = [
    { path: "/img/img_Resultado_Alunos/tai.jpeg" },
    { path: "/img/img_Resultado_Alunos/barbara.jpeg" },
    { path: "/img/img_Resultado_Alunos/julio.png" },
    { path: "/img/img_Resultado_Alunos/felipe.png" },
    { path: "/img/img_Resultado_Alunos/dias.jpeg" },
    { path: "/img/img_Resultado_Alunos/pep.png" },
    { path: "/img/img_Resultado_Alunos/Rhuana.jpeg" },
    { path: "/img/img_Resultado_Alunos/iris.png" },
  ];

  const setting = {
    dots: true,
    arrow: true,
    infinite: true,
    centerMode: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,

    /* Breakpoints */
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrow: true,
        },
      },
    ],
  };

  return (
    <section id="resultados" className="section-style">
      {/* Container que engloba resultados */}
      <div className="max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto px-6">
        <h1 className="h2-style">Resultados</h1>

        {/* Container dos titulos "VEM PRO TIME" */}
        <div className="flex flex-col items-center gap-8 border-1 p-4 border-gray-600/20 shadow-2xl shadow-gray-950 rounded-2xl ">
          <h1 className="gradient-text font-bold text-2xl lg:text-3xl">
            Vem pro time!
          </h1>
          <p>
            Seguindo minha metodologia, somada a sua disciplina e constância,
            seremos capazes de obter resultados significativos em um tempo que
            nem você esperaria.
          </p>
        </div>

        {/* Container de slides */}
        <div className="mt-9">
          <Slider {...setting}>
            {images.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 p-8">
                <div>
                  <div className="flex justify-items-start items-center gap-2 ">
                    <img
                      src={item.path}
                      alt=""
                      className="w-[300px] h-[250px] border rounded object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Resultados;

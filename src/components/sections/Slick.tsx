import Slider from "react-slick";

const Slick = () => {
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
    <section id="feedback" className="section-style">
      {/* Container que engloba resultados */}
      <div className="container">
        {/* Subcontainer */}
        <div className="space-y-4 p-6 text-center max-w-2xl mx-auto">
          <h1 className="uppercase font-semibold text-orange-600">Feedback</h1>
          <p className="font-semibold text-3xl">
            What Our Students Say About Us
          </p>
        </div>

        {/* Container do slide */}
        <div>
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
};

export default Slick;

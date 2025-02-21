import { useState } from "react";

function Resultados() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "Image/img_Resultado_Alunos/tai.jpeg",
    "Image/img_Resultado_Alunos/barbara.jpeg",
    "Image/img_Resultado_Alunos/julio.png",
    "Image/img_Resultado_Alunos/felipe.png",
    "Image/img_Resultado_Alunos/dias.jpeg",
    "Image/img_Resultado_Alunos/pep.png",
    "Image/img_Resultado_Alunos/Rhuana.jpeg",
    "Image/img_Resultado_Alunos/iris.png",
  ];

  const handleStepClick = (index: number) => {
    if (index >= 0 && index < images.length) {
      setCurrentImage(index);
    }
  };

  return (
    <section id="results">
      <div className="title_global_wrapped">
        <h1 className="to-hide">Resultados</h1>
      </div>

      <div id="zip-results">
        <div id="titles-zip">
          <div id="sub-titles-zip">
            <h1 className="to-hide">Vem pro time!</h1>
            <p className="to-hide">
              Seguindo minha metodologia, somada a sua disciplina e constância,
              seremos capazes de obter resultados significativos em um tempo que
              nem você esperaria.
            </p>
          </div>
        </div>

        <div id="img-zip">
          <div id="images" className="to-hide !duration-700">
            <img
              src={images[currentImage]}
              alt={`Resultado ${currentImage + 1}`}
              style={{ width: "500px", height: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="flex justify-center gap-4 mt-4">
            {" "}
            {/* Container para os botões */}
            <button
              onClick={() => handleStepClick(currentImage - 1)}
              disabled={currentImage === 0}
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50" // Estilos de exemplo
            >
              Anterior
            </button>
            <button
              onClick={() => handleStepClick(currentImage + 1)}
              disabled={currentImage === images.length - 1}
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50" // Estilos de exemplo
            >
              Próxima
            </button>
          </div>
        </div>
      </div>

      <div id="container-meus-resultados" className="to-hide">
        <a href="results.html" target="_blank">
          Minha evolução
        </a>
        <a className="" href="conquistas.html" target="_blank">
          Conquistas
        </a>
      </div>
    </section>
  );
}

export default Resultados;

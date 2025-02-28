export const gradient_text =
  "bg-gradient-to-r from-sky-600 via-mainTheme to-blue-600 bg-clip-text text-transparent";

export const gradient_textWhite =
  "bg-gradient-to-r from-myWhite/90 to-myWhite/95 bg-clip-text text-transparent";

export const section_style = "min-h-screen flex justify-center pt-[10%] pb-20";

export const h2_style = "text-3xl lg:text-4xl font-bold mb-8 text-center";

/* BACKGROUNDS */
export const home_bg =
  "bg-[linear-gradient(to_right,rgb(13,12,12,0.9),rgb(13,12,12,0.97)),url('/img/Img_About/gym.jpg')] bg-no-repeat bg-fixed bg-cover";

export const plans_bg =
  "bg-[linear-gradient(to_right,rgb(13,12,12,0.97),rgb(13,12,12,0.9)),url('/img/img_Plans/plans_bg.jpg')] bg-no-repeat bg-fixed bg-cover";

export const strong_style = "text-secondaryTheme italic";

export const btn_hover =
  /* ESTILIZAÇÃO COMUM */
  "bg-mainTheme text-white py-3 px-6 font-medium transition relative overflow-hidden rounded-sm border border-mainTheme shadow-lg " +
  /* ESTILIZAÇÃO DO BEFORE */
  "before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-deepBlue before:duration-1000 " +
  /* ESTILIZAÇÃO DO HOVER */
  "hover:text-white hover:shadow-mainTheme hover:shadow-lg hover:before:h-64 hover:before:-translate-y-32 transition-shadow duration-1000" +
  "active:scale-95";

export const btn_hover2 =
  /* ESTILIZAÇÃO COMUM */
  "bg-deepBlue text-white py-3 px-6 font-medium transition relative overflow-hidden rounded-sm border border-mainTheme shadow-lg " +
  /* ESTILIZAÇÃO DO BEFORE */
  "before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-mainTheme before:duration-1000 " +
  /* ESTILIZAÇÃO DO HOVER */
  "shadow-mainTheme hover:shadow-none transition-shadow duration-1000 hover:before:h-64 hover:before:-translate-y-32 active:scale-95";

export const btn_submit =
  /* ESTILIZAÇÃO COMUM */
  "bg-deepBlue text-white py-3 px-6 font-medium transition relative overflow-hidden rounded-sm border border-mainTheme shadow-lg transition-all duration-600 shadow-mainTheme " +
  /* ESTILIZAÇÃO DO HOVER */
  "hover:shadow-secondaryTheme hover:border-secondaryTheme hover:-translate-y-1 ";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        // media querys personalizadas
        xs: { max: "768px" },
        xxs: { max: "475px" },
      },
      boxShadow: {
        // Sombra personalizada, que podemos usar dentro de la utilidad de shadow de tailwind
        header3D:
          "0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f",
        box: "0px 0px 1px rgba(0, 0, 0, 0.3), 0px 3px 7px rgba(0, 0, 0, 0.3), 0px 1px white inset, 0px -3px 1px rgba(0, 0, 0, 0.3) inset",
      },
      /* backgroundImage: theme => ({// imagenes de fondo
        'body-pattern': "url('/src/assets/img/pattern.png')",
        "banner": "url('/src/assets/img/earth.jpg')",
      }), */
      backgroundImage: {
        // imagenes de fondo
        "body-pattern": "url('/public/img/pattern.png')",
        banner: "url('/public/img/earth.jpg')",
      },
      backgroundPosition: {
        //  posicion de imagen personalizada
        "banner-position": "-200px -200px",
      },
      colors: {
        "azul-claro": "#96b7ff",
        "azul-oscuro": "#1c26ba",
      },
      animation: {
        "spin-low": "spin 2s linear infinite", // aimacion de spin personalizada
        "from-below": "fromBelow 500ms linear",
        "from-right": "fromRight 300ms linear",
        "bg-banner": "backBanner 10s linear",
        "text-banner": "showBannerText 10s linear",
        "show-card-icon": "showCardIcon 300ms linear",
        "show-card-category": "showCardCategory 400ms linear",
        "show-card-description": "showCardDescription 400ms linear",
      },
      keyframes: {
        // keyframes para animation
        fromBelow: {
          // animación symbol desde abajo
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(0%)" },
        },
        fromRight: {
          // animacion texto desde la derecha
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0%)" },
        },
        backBanner: {
          "0%": { "background-position": "0px 0px" },
          "100%": { "background-position": "-200px -200px" },
        },
        showBannerText: {
          "0%": {
            transform: "translateX(-600%) scale(5,5)",
            opacity: 1,
          },
          "50%": {
            transform: "translateX(600%) scale(5,5)",
            opacity: 1,
          },
          "75%": {
            transform: "translateX(-600%) sacale(5,5)",
            "text-shadow": "none",
            color: "transparent",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%) sacale(1,1)",
            "text-shadow": "2px 2px 1px black",
            color: "white",
            opacity: 1,
          },
        },
        showCardIcon: {
          from: {
            transform: "translateY(-200%)",
          },
          to: {
            transform: "translateY(0%)",
          },
        },
        showCardCategory: {
          from: {
            transform: "translateY(-300%)",
          },
          to: {
            transform: "translateY(0%)",
          },
        },
        showCardDescription: {
          from: {
            transform: "translateX(-300%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [],
};

import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Main from "../assets/q1-1.png";
import Line from "../assets/line-decore.webp";
import Logo from "../assets/logo-no-background.png";


export default function Home() {

  return (
    <>
      <nav
        className="py-5 px-[5%] top-0 w-full fixed flex items-center justify-between z-20 bg-hotpink shadow-md special-font"
        style={{
          border: "0px solid rgb(229, 231, 235)",
          boxSizing: "border-box",
          position: "fixed",
          top: "0px",
          zIndex: 20,
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgb(255 241 218/1)",
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          boxShadow:
            "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <a
          className="w-[80px]"
          href="#/"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            textDecoration: "inherit",
            color: "inherit",
            width: "80px",
          }}
        >
          <img
            className="w-full"
            height={24}
            width={80}
            alt="logo"
            src={Logo}
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "block",
              verticalAlign: "middle",
              maxWidth: "100%",
              height: "auto",
              width: "100%",
              color: "transparent",
            }}
          />
        </a>
        <section
          className="left-0 nav-transition md:transition-none absolute top-[68px] md:top-0 md:left-0 md:relative md:flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8 text-[16px] text-litedark font-bold bg-orange md:bg-transparent pl-[5%] md:pl-auto py-10 md:py-0 w-full md:w-auto"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            paddingLeft: "5%",
            fontSize: "16px",
            fontWeight: 700,
            color: "rgb(33 40 50/1)",
            transition: "left 1s",
            position: "relative",
            left: "0px",
            top: "0px",
            display: "flex",
            width: "auto",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "transparent",
            paddingTop: "0px",
            paddingBottom: "0px",
            transitionProperty: "none",
            gap: "2rem",
          }}
        >
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          ><useAuth>
            <a
              className="hover:text-white md:hover:text-orange transition delay-200"
              href="/dashboard"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                textDecoration: "inherit",
                color: "inherit",
                transitionProperty:
                  "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "0.15s",
                transitionDelay: "0.2s",
              }}
            >
              Bookings
            </a></useAuth>
            <SignedOut>
            <SignInButton />
            </SignedOut>
            <SignedIn>
            <UserButton />
            </SignedIn>
          </div>
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8 mt-4 md:mt-0"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              marginTop: "0px",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            
          </div>
        </section>
        <svg
          className="block md:hidden text-4xl text-orange font-bold cursor-pointer"
          height="1em"
          width="1em"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            verticalAlign: "middle",
            cursor: "pointer",
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
            fontWeight: 700,
            color: "rgb(231 147 16/1)",
            display: "none",
          }}
        >
          <path
            d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
            }}
          />
        </svg>
      </nav>
      <main
  className="relative w-full flex flex-col md:flex-row items-center justify-between py-40 md:py-28 px-5% bg-right-top bg-no-repeat bg-contain"
  style={{
    backgroundImage: 'url("https://jadoo-travels.vercel.app/img/Decore.png")',
    backgroundAttachment: "fixed",
    backgroundSize: "contain",
    backgroundPosition: "100% 0",
  }}
>
  <section className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-3">
    <p className="text-sm text-green-500 font-bold">
      BEST DESTINATIONS AROUND THE WORLD
    </p>
    <h1 className="text-4xl md:text-5xl xl:text-6xl text-blue-900 font-extrabold w-full lg:w-4/5 text-center md:text-left">
      Travel,
      <span className="relative px-1">
        enjoy
        <img
          className="absolute bottom-0 w-full"
          alt="line-decor"
          src={Line}
          height={5}
        />
      </span>
      and live a new and fulfill life
    </h1>
    <p className="text-sm text-gray-500 font-bold w-full lg:w-4/5 xl:w-3/5 text-center md:text-left">
      Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the
    </p>
    <div className="flex items-center gap-4">
      <a
        className="py-3 px-5 rounded-md bg-orange-500 text-white font-bold"
        href="/booking form"
      >
        Book Now
      </a>
    </div>
  </section>
  
  <section className="relative mt-5 md:mt-0">
    <img
      className="w-full h-auto"
      src={Main}
      alt="hero-img"
      style={{ animation: "2s ease-in-out infinite dangle" }}
    />
  </section>
</main>
      <main
        className="px-[5%] py-[40px] bg-white special-font"
        style={{
          border: "0px solid rgb(229, 231, 235)",
          boxSizing: "border-box",
          backgroundColor: "rgb(255 255 255/1)",
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingTop: "40px",
          paddingBottom: "40px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <section
          className="aos-init aos-animate"
          style={{
            border: "0px solid rgb(229, 231, 235)",
            boxSizing: "border-box",
            pointerEvents: "auto",
            transitionDuration: "1s",
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: "0.4s",
            transitionProperty: "opacity, transform",
            opacity: 1,
            transform: "none",
          }}
        >
          <div
            className="flex justify-between flex-wrap gap-2"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "0.5rem",
            }}
          >
            <div
              className="flex flex-col gap-2 mb-5 md:mb-0 w-full md:w-auto items-center md:items-start justify-center md:justify-start"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginBottom: "0px",
                width: "auto",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <img
                height={23}
                width={100}
                alt="logo"
                src={Logo}
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "block",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  height: "auto",
                  color: "transparent",
                }}
              />
              <p
                className="text-[12px] text-litegrey font-semibold w-full md:max-w-[200px] text-center md:text-left"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  margin: "0px",
                  width: "100%",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "rgb(104 109 119/1)",
                  maxWidth: "200px",
                  textAlign: "left",
                }}
              >
                Book your trip in minute, get full Control for much longer.{" "}
              </p>
            </div>
            <div
              className="grid gap-4"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "grid",
                gap: "1rem",
              }}
            >
              <h1
                className="text[18px] text-litedark font-extrabold"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontSize: "inherit",
                  margin: "0px",
                  fontWeight: 800,
                  color: "rgb(33 40 50/1)",
                }}
              >
                Contact
              </h1>
              <div
                className="text-[15px] text-litegrey font-semibold flex flex-col gap-2"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "rgb(104 109 119/1)",
                }}
              >
                <a
                  className="hover:text-orange transition delay-200"
                  href="#/"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    textDecoration: "inherit",
                    color: "inherit",
                    transitionProperty:
                      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "0.15s",
                    transitionDelay: "0.2s",
                  }}
                >
                  Help/FAQ
                </a>
              </div>
            </div>
            <div
              className="grid gap-4"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "grid",
                gap: "1rem",
              }}
            >
              <h1
                className="text[18px] text-litedark font-extrabold"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  fontSize: "inherit",
                  margin: "0px",
                  fontWeight: 800,
                  color: "rgb(33 40 50/1)",
                }}
              >
                More
              </h1>
            </div>
            <div
              className="flex flex-col gap-4 items-center md:items-start justify-center md:justify-start w-full md:w-auto mt-5 md:mt-0"
              style={{
                border: "0px solid rgb(229, 231, 235)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "0px",
                width: "auto",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                className="flex items-center gap-4"
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <svg
                  className="text-4xl p-2 text-litedark bg-white rounded-full shadow-md cursor-pointer"
                  height="1em"
                  width="1em"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    cursor: "pointer",
                    borderRadius: "9999px",
                    backgroundColor: "rgb(255 255 255/1)",
                    padding: "0.5rem",
                    fontSize: "2.25rem",
                    lineHeight: "2.5rem",
                    color: "rgb(33 40 50/1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)",
                  }}
                >
                  <path
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  />
                </svg>
                <svg
                  className="text-4xl p-2 text-litedark bg-white rounded-full shadow-md cursor-pointer"
                  height="1em"
                  width="1em"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    cursor: "pointer",
                    borderRadius: "9999px",
                    backgroundColor: "rgb(255 255 255/1)",
                    padding: "0.5rem",
                    fontSize: "2.25rem",
                    lineHeight: "2.5rem",
                    color: "rgb(33 40 50/1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)",
                  }}
                >
                  <g
                    id="Instagram"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  >
                    <g
                      style={{
                        border: "0px solid rgb(229, 231, 235)",
                        boxSizing: "border-box",
                      }}
                    >
                      <path
                        d="M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      />
                      <path
                        d="M12,16.594A4.595,4.595,0,1,1,16.6,12,4.6,4.6,0,0,1,12,16.594ZM12,8.4A3.595,3.595,0,1,0,15.6,12,3.6,3.6,0,0,0,12,8.4Z"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      />
                      <circle
                        cx="17.2"
                        cy="6.83"
                        r="1.075"
                        style={{
                          border: "0px solid rgb(229, 231, 235)",
                          boxSizing: "border-box",
                        }}
                      />
                    </g>
                  </g>
                </svg>
                <svg
                  className="text-4xl p-2 text-litedark bg-white rounded-full shadow-md cursor-pointer"
                  height="1em"
                  width="1em"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    border: "0px solid rgb(229, 231, 235)",
                    boxSizing: "border-box",
                    display: "block",
                    verticalAlign: "middle",
                    cursor: "pointer",
                    borderRadius: "9999px",
                    backgroundColor: "rgb(255 255 255/1)",
                    padding: "0.5rem",
                    fontSize: "2.25rem",
                    lineHeight: "2.5rem",
                    color: "rgb(33 40 50/1)",
                    boxShadow:
                      "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1)",
                  }}
                >
                  <path
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    style={{
                      border: "0px solid rgb(229, 231, 235)",
                      boxSizing: "border-box",
                    }}
                  />
                </svg>
              </div>
            </div>
          </div>
          <p
            className="text-[14px] text-litegrey text-center font-normal mt-5"
            style={{
              border: "0px solid rgb(229, 231, 235)",
              boxSizing: "border-box",
              margin: "0px",
              marginTop: "1.25rem",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: 400,
              color: "rgb(104 109 119/1)",
            }}
          >
            All rights Appname
          </p>
        </section>
      </main>
      <style
  dangerouslySetInnerHTML={{
    __html: `
/* Base styles for all screen sizes */
html {
  border: 0 solid rgb(229, 231, 235);
  box-sizing: border-box;
  line-height: 1.5;
  text-size-adjust: 100%;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-size: 16px; /* Default font-size */
}

body {
  border: 0 solid rgb(229, 231, 235);
  box-sizing: border-box;
  margin: 0;
  line-height: inherit;
  font-family: __Volkhov_0b5ca1, __Volkhov_Fallback_0b5ca1;
  font-weight: 700;
  font-style: normal;
}

// main{
//     margin: 10px;
// }
/* Make the font-size responsive using clamp */
html {
  font-size: clamp(14px, 2vw, 18px); /* It will scale between 14px and 18px based on the viewport width */
}

/* Responsive styles using media queries */
@media (max-width: 1024px) { /* Tablet screens */
  html {
    font-size: 14px; /* Adjust font size for smaller screens */
  }
  
  body {
    margin: 0 10px; /* Add margin for smaller screens to prevent content from hitting screen edges */
  }

  main{
    margin:0px;
  }
}

@media (max-width: 768px) { /* Mobile screens */
  html {
    font-size: 12px;
  }

  body {
    margin: 0 8px; /* Reduce margin on mobile */
  }

    main{
    margin:0px;
  }
}

@media (min-width: 1440px) { /* Large desktops */
  html {
    font-size: 18px; /* Larger font on big screens */
  }

      main{
    margin:20px;
  }
}

`
  }}
/>
    </>
  );
}

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import wavingIcon from "../assets/wavinghand.png";
import emptySvg from "../assets/undraw_file_searching_re_3evy.svg";
import { FaAngleDown, FaRegCalendarCheck, FaPhoneAlt, FaWhatsapp  } from "react-icons/fa";
import { TbCurrentLocation } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import CancelModal from "../components/cancelModal";
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from '@clerk/clerk-react';

export default function Dashboard(props) {

  const [showRideDetail, setShowRideDetail] = useState("none");
  const [showCancel, setShowCancel] = useState(false);

  const driverNumber = "+91 6367719125";

  const handleCall = () => {
    window.location.href = `tel:${driverNumber}`;
  };

  const handleMessage = () => {
    window.location.href = `https://wa.me/${driverNumber.replace(/\s/g, '')}`;
  };

  const { isSignedIn } = useAuth()

  if (!isSignedIn) {
    return <div style={{
    backgroundColor: "aquamarine",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    }}>Sign in to view this page<br/><SignInButton style={{
      background: "black",
    color: "white",
    width: "110px",
    height: "50px",
    borderRadius: "10px",
    }}/></div>
  }
  

  return (
    <main className="h-full flex flex-col relative">
      <div className="bg-green-400 text-black py-5 px-3 flex flex-row items-center justify-center gap-2">
        <a className="md:text-2xl text-xl text-violet-600 mr-6 font-bold" href="/">Home</a>
        <p className="md:text-2xl text-xl">Hello there</p>
        <img src={wavingIcon} alt="waving icon" className="w-4 w-4" />
        <SignedOut>
            <SignInButton />
            </SignedOut>
            <SignedIn>
            <UserButton />
            </SignedIn>
      </div>

      <section
        className={`sm:p-5 p-2 grow flex flex-col items-center ${
          props.allRides.length === 0 ? "justify-center" : "justify-start pt-6"
        }`}
      >
        {props.allRides.length === 0 ? (
          <div className="flex flex-col items-center">
            <img
              src={emptySvg}
              alt="no ride"
              className="sm:w-64 w-2/3 object-scale-down"
            />
            <h5 className="mt-8 font-bold md:text-2xl text-xl">
              No ride scheduled
            </h5>
            <p className="text-gray-600 md:text-xl text-lg">
              Start by booking a ride
            </p>
          </div>
        ) : (
          <ul className="xl:w-2/3 lg:w-3/4 w-full mx-auto bg-green-50 sm:p-5 p-2 rounded-md">
            {props.allRides &&
              props.allRides.map((ride, i) => (
                <li key={i} className="">
                  <div className="flex flex-row items-center gap-5 w-full md:text-lg text-base">
                    <FaRegCalendarCheck />
                    <p className="grow flex flex-row items-center justify-between">
                      <span className="flex flex-col">
                        <span>{ride.date}</span>
                        <span>{ride.time}</span>
                      </span>
                      <span className="flex flex-row items-center gap-3">
                        <span className="font-semibold">${ride.price}</span>
                        <FaAngleDown
                          className="cursor-pointer"
                          onClick={() =>
                            showRideDetail === i
                              ? setShowRideDetail("none")
                              : setShowRideDetail(i)
                          }
                        />
                      </span>
                    </p>
                  </div>

                  <AnimatePresence>
                    {showRideDetail === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="pt-3 h-0 opacity-0 overflow-hidden"
                      >
                        <div className="flex flex-row gap-2">
                          <div className="flex flex-row items-center justify-center sm:gap-4 gap-2 sm:p-2 p-0.5 rounded-md w-full">
                            <TbCurrentLocation className="sm:text-xl text-lg" />
                            <div className="md:text-base sm:text-sm text-xs basis-11/12">
                              <span className="text-black/50">Pick Up:</span>
                              <h4 className="text-slate-700 font-semibold">
                                {ride.pick.formatted_address}
                              </h4>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-center sm:gap-4 gap-2 sm:p-2 p-0.5 rounded-md w-full">
                            <GrMapLocation className="sm:text-xl text-lg" />
                            <div className="md:text-base sm:text-sm text-xs basis-11/12">
                              <span className="text-black/50">
                                Destination:
                              </span>
                              <h4 className="text-slate-700 font-semibold">
                                {ride.dest.formatted_address}
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                    {/* <p className="font-semibold">Driver Number: {driverNumber}</p> */}
                    <div className="flex flex-row items-center justify-center sm:gap-4 gap-2 sm:p-2 p-0.5 rounded-md w-full">
                      <button
                        onClick={handleCall}
                        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded gap-2	"
                      >
                        <FaPhoneAlt /> Call
                      </button>
                      <button
                        onClick={handleMessage}
                        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded"
                      >
                        <FaWhatsapp /> Message
                      </button>
                    </div>
                  </div>
                        <div className="lg:mt-3 mt-4 w-fit flex flex-row gap-4">
                          <Link
                            to={"/booking form"}
                            className="bg-green-400 text-white rounded-md basis-1/2 sm:py-2 py-1 px-8 sm:text-xl text-lg font-semibold"
                          >
                            Edit
                          </Link>
                          <button
                            type="button"
                            className="bg-green-400 text-white rounded-md basis-1/2 sm:py-2 py-1 px-8 sm:text-xl text-lg font-semibold"
                            onClick={() => setShowCancel(true)}
                          >
                            Cancel
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
          </ul>
        )}

        <div className="absolute bottom-20 right-4">
          <Link
            to={props.allRides.length === 0 ? "/booking form" : "/"}
            className="hover:bg-green-400 hover:shadow group transition-all duration-300 flex flex-row items-center gap-4 rounded-full cursor-pointer"
            onClick={() => {
              if (props.allRides.length > 0) {
                props.setError("Ride in progress. Cancel to book another.");
                setTimeout(() => {
                  props.setError("none");
                }, 2000);
              }
            }}
          >
            <p className="md:text-xl text-lg ps-4 invisible group-hover:visible">
              Book a ride
            </p>
            <motion.p
              whileHover={{ rotate: "45deg" }}
              transition={{ duration: 0.3 }}
              className="bg-green-400 p-4 rounded-full md:text-2xl text-xl shadow-lg"
            >
              <FiPlus />
            </motion.p>
          </Link>
        </div>
      </section>

      <CancelModal
        showCancel={showCancel}
        setShowCancel={setShowCancel}
        setAllRides={props.setAllRides}
        setDropoffLocation={props.setDropoffLocation}
        setPickupLocation={props.setPickupLocation}
        setRideDate={props.setRideDate}
        setRideTime={props.setRideTime}
        setDistance={props.setDistance}
        setCarType={props.setCarType}
        setTotalPrice={props.setTotalPrice}
      />
    </main>
  );
}
//dark:bg-zinc-900 dark:text-white
//bg-white text-white

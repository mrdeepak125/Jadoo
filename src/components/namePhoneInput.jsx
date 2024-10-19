import React, { useState } from "react";

export default function namePhoneInput({
  id,
  label,
  type,
  value,
  setValue,
  error,
  setError,
}) {
  const validateInput = (e) => {
    setError("none");
    const inputValue = e.target.value;

    if (id === "nameInput") {
      if (inputValue.trim() === "") {
        setError("invalid");
      } else {
        setValue(inputValue);
      }
    }

    if (id === "numberInput") {
      const numberValue = inputValue.replace(/\D/g, ""); // Remove non-digits
      if (numberValue.length <= 10) {
        setValue( numberValue);
      } else {
        setError("invalid");
      }
    }
  };

  return (
    <div className="grow flex flex-col">
      <label
        htmlFor={id}
        className="sm:text-lg text-base sm:mb-2 mb-1 text-slate-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        className={`md:px-3 px-2 md:py-4 py-2 rounded-md outline-none bg-transparent border-2 text-base ${
          error === "none" ? "border-gray-400" : "border-red-400"
        }`}
        onChange={validateInput}
      />
    </div>
  );
}

export function NameAndNumberForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("+91 ");
  const [nameError, setNameError] = useState("none");
  const [numberError, setNumberError] = useState("none");

  return (
    <div className="flex justify-between space-x-4">
      <input
        id="nameInput"
        label="Name:"
        type="text"
        value={name}
        setValue={setName}
        error={nameError}
        setError={setNameError}
      />
      <input
        id="numberInput"
        label="Number:"
        type="text"
        value={number}
        setValue={setNumber}
        error={numberError}
        setError={setNumberError}
      />
    </div>
  );
}

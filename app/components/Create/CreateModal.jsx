"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import LanguagesDropdown from "../Heal/LanguageDropdowns";
import { FaPause } from "react-icons/fa6";


const avators = ["Jui Jutsu", "Boxer", "Kickboxer", "Karateka", "Bodybuilder", "Coach", "Swimmer", "Wrestler", "Sprinter", "Gymnast", "Weightlifter", "Cyclist", "Football Player", "Basketball Player ", "Tennis Player", "Rugby Player", "Volleyball Player"];
const genders = ["Male", "Female",];

const CreateModal = ({ onClose, onCreate, onUploadVideo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Jui Jutsu");
  const [isOpenGenderDropdown, setIsOpenGenderDropdown] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Select Gender");
  const [isRecording, setIsRecording] = useState(false);
  const [text, setText] = useState("");
  const recognitionRef = useRef(null);


  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };


  // Gender Dropdown 
  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
    setIsOpenGenderDropdown(false);
  };



  const handleMicClick = () => {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const startRecording = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert(
        "Speech recognition not supported in this browser. Please use Chrome or a supported browser."
      );
      return;
    }

    const SpeechRecognition = window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "en-US";

    recognitionRef.current.onresult = (event) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          setText((prevText) => prevText + event.results[i][0].transcript);
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      // Optional: Update textarea in real-time with interim results
      document.querySelector("textarea").value = text + interimTranscript;
    };

    recognitionRef.current.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div
        onClick={onClose}
        className="absolute inset-0"
      ></div>

      <div className="bg-white rounded-[30px] px-5 py-[30px] w-full mx-auto max-w-[600px] relative h-[90vh] overflow-y-scroll overflow-x-hidden formscrollbar">


        <h1 className="font-semibold text-xl text-center mb-3">
          Create
        </h1>

        <p className="text-sm text-center">
          Please describe in as much detail as possible what you intend to create, update, or modify.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 mb-5">
          <div className="flex flex-col gap-5">

            {/* Gender Dropdwon  */}
            <div>
              <h3 className="text-base font-semibold text-gradient mb-2">Select Gender</h3>

              {/* Gender dropdown  */}
              <div className="relative">
                {/* Dropdown Button */}
                <button
                  onClick={() => setIsOpenGenderDropdown((prev) => !prev)}
                  className="w-full bg-[#EEE8FD] text-gray-700 px-5 py-3 text-base font-semibold rounded-[14px] flex justify-between items-center"
                >
                  {selectedGender}
                  <IoIosArrowDown className={`text-purple-500 text-xl ${isOpenGenderDropdown ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {isOpenGenderDropdown && (
                  <ul className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg h-fit min-h-[80px] overflow-y-scroll formscrollbar">
                    {genders.map((gender, index) => (
                      <li
                        key={index}
                        onClick={() => handleSelectGender(gender)}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      >
                        {gender}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>


            {/* Avators Gender  */}
            <div>
              <h3 className="text-base font-semibold text-gradient mb-2">Select Avatar</h3>

              {/* Avator dropdown  */}
              <div className="relative">
                {/* Dropdown Button */}
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="w-full bg-[#EEE8FD] text-gray-700 px-5 py-3 text-base font-semibold rounded-[14px] flex justify-between items-center"
                >
                  {selectedOption}
                  <IoIosArrowDown className={`text-purple-500 text-xl ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <ul className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg h-[200px] overflow-y-scroll formscrollbar">
                    {avators.map((avator, index) => (
                      <li
                        key={index}
                        onClick={() => handleSelect(avator)}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      >
                        {avator}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Image src="/assets/avator-img.png" alt="avator img" width={100} height={100} className="rounded-full w-[157px] h-[157px] object-cover" />
          </div>
        </div>

        <LanguagesDropdown />

        {/* Voice Recorder & convert into text  */}
        <div className="relative my-5">
          <textarea
            value={text}
            placeholder="Type"
            onChange={(e) => setText(e.target.value)}
            className="placeholder:text-[#0000005C] resize-none p-5 w-full rounded-[14px] bg-[#EEE8FD] h-[140px]"
          ></textarea>

          <button
            className="absolute bottom-4 right-4"
            onClick={handleMicClick}
          >
            {isRecording ? (
              <FaPause className="text-2xl text-red-600" />
            ) : (
              <Image
                src="/assets/microphone.svg"
                alt="mic icon"
                width={19}
                height={24}
                loading="lazy"
              />
            )}
          </button>
        </div>

        {/* Add File  */}
        <div onClick={onUploadVideo} className="relative cursor-pointer pt-8 pb-5 mb-5 bg-[#E4DAFF] border border-dashed rounded-[14px] border-[#3D2278]">
          <div className="text-center">
            <Image
              alt="upload"
              loading="lazy"
              width={36}
              height={25}
              className="mx-auto mb-[10px]"
              src="/assets/video-plus.svg"
            />
            <label htmlFor="file-upload" className="relative font-medium text-base text-gradient cursor-pointer">
              Upload Video
              <input
                id="file-upload"
                className="sr-only"
                type="file"
                name="file-upload"
              />
            </label>
          </div>
        </div>


        <div className="flex items-center justify-between gap-2">
          <button
            onClick={onClose}
            className="btn-red-gradient text-white rounded-[14px] w-full max-w-[126px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
          >
            Cancel
          </button>

          <button onClick={onCreate} className="bg-gradient text-white rounded-[14px] w-full max-w-[260px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
            Create
            <Image
              src="/assets/icon/arrow-right-small.svg"
              alt="arrow-right-small"
              width={18}
              height={10}
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;

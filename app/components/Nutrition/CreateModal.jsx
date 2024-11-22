"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FaPause } from "react-icons/fa6";


const CreateModal = ({ onClose, onCreate }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [text, setText] = useState("");
  const recognitionRef = useRef(null);

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


  // Category Dropdwon 

  const [isOpenCategoryDrodpwon, setIsCategoryDrodpwon] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Jui Jutsu");

  const categories = ["Appetizers & Starters", "Soups", "Main course", "Soups", "Juices", "Smoothies", "Salads", "Side Dishes", "Desserts", "Snacks", "Beverages", "Breakfast", "Breads", "Baked Goods", "Finger Foods", "Street Food"]

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setIsCategoryDrodpwon(false);
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-5 windows-bg">
      <div
        onClick={onClose}
        className="absolute inset-0"
      ></div>

      <div className="bg-white rounded-[30px] px-5 py-[30px] w-full mx-auto max-w-[600px] relative">
        {/* Close Window btn */}
        <Image
          src="/assets/icon/close-icon.svg"
          alt="close-icon"
          width={18}
          height={18}
          onClick={onClose}
          loading="lazy"
          className="absolute md:top-5 right-[30px] cursor-pointer"
        />

        <h1 className="font-semibold text-xl text-center mb-3">
          Create
        </h1>

        <p className="text-sm text-center mb-5">
          Please describe in as much detail as possible what you intend to create, update, or modify.</p>

        <div>
          <h3 className="text-base font-semibold text-gradient mb-2">Select Category</h3>

          {/* Avator dropdown  */}
          <div className="relative">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsCategoryDrodpwon((prev) => !prev)}
              className="w-full bg-[#EEE8FD] text-gray-700 px-5 py-3 text-base font-semibold rounded-[14px] flex justify-between items-center"
            >
              {selectedCategory}
              <IoIosArrowDown className={`text-purple-500 text-xl ${isOpenCategoryDrodpwon ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpenCategoryDrodpwon && (
              <ul className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg h-[200px] overflow-y-scroll formscrollbar">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectCategory(category)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>


        {/* Voice Recorder & convert into text  */}
        <div className="relative my-4">
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

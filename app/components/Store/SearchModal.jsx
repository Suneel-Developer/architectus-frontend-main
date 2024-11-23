"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaPause } from "react-icons/fa6";

const SearchModal = ({ onClose, openAdertise }) => {
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

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="bg-white rounded-[20px] p-6 md:p-7 w-full mx-auto max-w-[600px] relative">
        <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-center mb-4">
          Search
        </h1>

        <p className="text-sm text-[#0F0A19B2] text-center">
          Please describe in as much detail as possible what you intend to create, update, or modify.
        </p>

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

        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="btn-red-gradient text-white rounded-[14px] w-full max-w-[126px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
          >
            Cancel
          </button>

          <button onClick={openAdertise} className="bg-gradient text-white rounded-[14px] w-full max-w-[260px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
            Advertise
            <Image
              src="/assets/icon/gallery-icon.svg"
              alt="Gallery Icon"
              width={19}
              height={17}
              loading="lazy"
            />
          </button>

          <button className="bg-gradient text-white rounded-[14px] w-full max-w-[260px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
            Search
            <Image
              src="/assets/icon/search-text.svg"
              alt="Search Icon"
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

export default SearchModal;

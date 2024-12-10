"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaPause } from "react-icons/fa6";



const CreateNewTicketModal = ({ onClose }) => {
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
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div
        onClick={onClose}
        className="absolute inset-0"
      ></div>

      <div className="bg-white rounded-[30px] px-5 py-[30px] w-full mx-auto max-w-[950px] relative h-[90vh] lg:h-fit overflow-y-scroll overflow-x-hidden formscrollbar">


        <h1 className="text-2xl font-medium text-center mb-3">Create New ticket</h1>

        <p className="text-sm md:text-xl text-center">
          Log a new ticket in our system to track and manage your issue from start to resolution.
        </p>


        <p className="text-[#6530FC] font-bold text-center text-3xl my-10">Ticket#0012</p>

        {/* Subject Voice Recorder & convert into text  */}
        <div className="max-w-[700px] w-full mx-auto mb-4">
          <p className="text-[#6530FC] mb-2 font-medium">Subject</p>

          <div className="relative">
            <textarea
              value={text}
              placeholder="Lorem ipusm dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
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
        </div>


        <div className="flex items-center justify-center gap-2">
          <button
            onClick={onClose}
            className="btn-red-gradient text-white rounded-[14px] w-full max-w-[126px] h-14 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
          >
            Cancel
          </button>

          <button className="bg-gradient text-white rounded-[14px] w-full max-w-[220px] h-14 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewTicketModal;



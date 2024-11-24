"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const CreateSendModal = ({ onClose, onCreate }) => {
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
      <div
        onClick={onClose}
        className="absolute inset-0"
      ></div>

      <div className="bg-white rounded-[20px] p-6 md:p-7 w-full mx-auto max-w-[600px] relative">
        <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-left mb-4">
          Message
        </h1>

        <Image
          src="/assets/icon/close-icon.svg"
          alt="close-icon"
          width={18}
          height={18}
          onClick={onClose}
          loading="lazy"
          className="absolute top-5 md:top-[30px] right-[30px] cursor-pointer"
        />

        <div className="relative mt-6 mb-4">
          <textarea
            value={text}
            placeholder="Type"
            onChange={(e) => setText(e.target.value)}
            className="border placeholder:text-sm placeholder:text-[#9D9D9D] pl-5 pt-4 border-[#E7E7E7] text-[#0F0A19] w-full rounded-xl bg-[#FAFAFA] h-[140px]"
          ></textarea>

          <button
            className="absolute bottom-4 right-4"
            onClick={handleMicClick}
          >
            {isRecording ? (
              <Image
                src="/assets/icon/pause-icon.svg"
                alt="pause icon"
                width={32}
                height={32}
                loading="lazy"
              />
            ) : (
              <Image
                src="/assets/icon/mic-icon.svg"
                alt="mic icon"
                width={32}
                height={32}
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
            Send
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

export default CreateSendModal;

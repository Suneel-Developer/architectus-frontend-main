"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaPause } from "react-icons/fa6";



const UploadVideoModal = ({ onClose }) => {
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

            <div className="bg-white rounded-[30px] px-5 py-[30px] w-full mx-auto max-w-[600px] relative h-[90vh] overflow-y-scroll overflow-x-hidden formscrollbar">


                <h1 className="font-semibold text-xl text-center mb-3">
                    Upload Video
                </h1>

                <p className="text-sm text-center">
                    Please describe in as much detail as possible what you intend to create, update, or modify.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 mt-7">
                    <div className="w-full">
                        <label htmlFor="filename" className="text-gradient text-base font-semibold mb-2 block">File name</label>
                        <input type="text" placeholder="Enter File Name . . ." className="bg-[#EEE8FD] rounded-[14px] py-3 px-4 placeholder:text-[#0000005C] w-full" />
                    </div>

                    <div className="w-full">
                        <label htmlFor="title" className="text-gradient text-base font-semibold mb-2 block">Title</label>
                        <input type="text" placeholder="Enter Title . . ." className="bg-[#EEE8FD] rounded-[14px] py-3 px-4 placeholder:text-[#0000005C] w-full" />
                    </div>
                </div>

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

                {/* Type Translate Audio & Subtitles  */}
                <div className="flex flex-col sm:flex-row gap-5">
                    <div className="w-full">
                        <label htmlFor="translateaudio" className="text-gradient text-base font-semibold mb-2 block">Translate Audio</label>
                        <textarea type="text" placeholder="Type . . ." className="bg-[#EEE8FD] rounded-[14px] h-[140px] p-4 placeholder:text-[#0000005C] w-full" />
                    </div>

                    <div className="w-full">
                        <label htmlFor="translatesubtitles" className="text-gradient text-base font-semibold mb-2 block">Translate Subtitles</label>
                        <textarea type="text" placeholder="Type . . ." className="bg-[#EEE8FD] rounded-[14px] h-[140px] p-4 placeholder:text-[#0000005C] w-full" />
                    </div>
                </div>

                {/* Add File  */}
                <div className="relative pt-8 pb-5 my-5 bg-[#E4DAFF] border border-dashed rounded-[14px] border-[#3D2278]">
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

                    <button className="bg-gradient text-white rounded-[14px] w-full max-w-[260px] h-12 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
                        Upload
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

export default UploadVideoModal;

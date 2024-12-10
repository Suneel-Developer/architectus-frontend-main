"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { FaPause } from "react-icons/fa6";

const EditAgendaModal = ({ onClose }) => {
    const [image, setImage] = useState("/assets/user-review-img.png");

    // States for subject and notes
    const [subjectText, setSubjectText] = useState("");
    const [notesText, setNotesText] = useState("");
    const [isRecording, setIsRecording] = useState({ subject: false, notes: false });

    // Refs for speech recognition
    const recognitionRefs = {
        subject: useRef(null),
        notes: useRef(null),
    };

    // Function to handle image change
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    // Start recording for a specific field
    const startRecording = (field) => {
        if (!("webkitSpeechRecognition" in window)) {
            alert(
                "Speech recognition not supported in this browser. Please use Chrome or a supported browser."
            );
            return;
        }

        const SpeechRecognition = window.webkitSpeechRecognition;
        recognitionRefs[field].current = new SpeechRecognition();
        recognitionRefs[field].current.continuous = true;
        recognitionRefs[field].current.interimResults = true;
        recognitionRefs[field].current.lang = "en-US";

        recognitionRefs[field].current.onresult = (event) => {
            let interimTranscript = "";
            for (let i = event.resultIndex; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    if (field === "subject") {
                        setSubjectText((prevText) => prevText + event.results[i][0].transcript);
                    } else if (field === "notes") {
                        setNotesText((prevText) => prevText + event.results[i][0].transcript);
                    }
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }

            // Optional: Update textarea in real-time with interim results
            const textarea = document.querySelector(`#${field}-textarea`);
            if (textarea) {
                textarea.value = (field === "subject" ? subjectText : notesText) + interimTranscript;
            }
        };

        recognitionRefs[field].current.onend = () => {
            setIsRecording((prev) => ({ ...prev, [field]: false }));
        };

        recognitionRefs[field].current.start();
        setIsRecording((prev) => ({ ...prev, [field]: true }));
    };

    // Stop recording for a specific field
    const stopRecording = (field) => {
        if (recognitionRefs[field].current) {
            recognitionRefs[field].current.stop();
            setIsRecording((prev) => ({ ...prev, [field]: false }));
        }
    };

    const handleMicClick = (field) => {
        if (!isRecording[field]) {
            startRecording(field);
        } else {
            stopRecording(field);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
            <div onClick={onClose} className="absolute inset-0"></div>

            <div className="bg-white rounded-[30px] px-5 py-[30px] w-full mx-auto max-w-[950px] relative h-[90vh] overflow-y-scroll overflow-x-hidden formscrollbar">
                <h1 className="text-3xl text-center mb-3">Edit Agenda</h1>
                <p className="text-sm md:text-xl text-center">
                    Let&apos;s break the key points discuss to achieve goals for the session.
                </p>

                {/* Profile Image */}
                <div className="space-y-4 mb-8 mt-4">
                    <div className="w-[170px] h-[170px] rounded-full overflow-hidden mx-auto relative group">
                        <img src={image} alt="user profile" className="w-full h-full object-cover" />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="absolute inset-0 opacity-0 cursor-pointer z-30"
                            title="Change Profile Picture"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 hidden group-hover:flex items-center justify-center text-white text-sm font-medium">
                            Click to Change
                        </div>
                    </div>

                    {/* Delete & Download btn  */}
                    <div className="flex items-center mx-auto justify-center space-x-4">
                        <button className="w-9 h-9 flex items-center justify-center bg-[#EDF2FE] rounded-lg">
                            <Image
                                src="/assets/icon/delete.svg"
                                alt="delete icon"
                                width={17}
                                height={22}
                            />
                        </button>

                        <button className="w-9 h-9 flex items-center justify-center bg-[#EDF2FE] rounded-lg">
                            <Image
                                src="/assets/icon/download.svg"
                                alt="download icon"
                                width={26}
                                height={29}
                            />
                        </button>
                    </div>
                </div>

                {/* Textareas with voice recording */}
                {["subject", "notes"].map((field) => (
                    <div key={field} className="max-w-[750px] w-full mx-auto mb-4">
                        <p className="text-[#6530FC] mb-2 font-medium capitalize">{field}</p>
                        <div className="relative">
                            <textarea
                                id={`${field}-textarea`}
                                value={field === "subject" ? subjectText : notesText}
                                placeholder={`Enter ${field} here...`}
                                onChange={(e) =>
                                    field === "subject"
                                        ? setSubjectText(e.target.value)
                                        : setNotesText(e.target.value)
                                }
                                className="placeholder:text-[#0000005C] resize-none p-5 w-full rounded-[14px] bg-[#EEE8FD] h-[140px]"
                            ></textarea>
                            <button
                                className="absolute bottom-4 right-4"
                                onClick={() => handleMicClick(field)}
                            >
                                {isRecording[field] ? (
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
                ))}

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={onClose}
                        className="btn-red-gradient text-white rounded-[14px] w-full max-w-[126px] h-14 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90"
                    >
                        Cancel
                    </button>

                    <button className="bg-gradient text-white rounded-[14px] w-full max-w-[220px] h-14 text-center flex items-center justify-center gap-3 p-2 text-base font-semibold transition-opacity duration-300 hover:opacity-90">
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditAgendaModal;

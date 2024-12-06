"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import ReceivingLanguage from "./Dropdwons/ReceivingLanguage";
import { IoCloseSharp } from "react-icons/io5";
import AgoraRTC from "agora-rtc-sdk-ng";

interface ModalProps {
  onClose: () => void;
}

const CallsModal: React.FC<ModalProps> = ({ onClose }) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [isInCall, setIsInCall] = useState<boolean>(false);
  const [localVideoTrack, setLocalVideoTrack] = useState<any>(null);
  const [remoteVideoTrack, setRemoteVideoTrack] = useState<any>(null);

  // Refs for video containers
  const localVideoContainerRef = useRef<HTMLDivElement | null>(null);
  const remoteVideoContainerRef = useRef<HTMLDivElement | null>(null);

  const appId = "c1f936551c334eec8ec7510c145aa89f"; // Agora App ID
  const token =
    "007eJxTYLg4Ve3p7qvC6+Yknxf1YbPf8/ddfPg2idYbGSYVGh7cJXsUGJIN0yyNzUxNDZONjU1SU5MtUpPNTQ0Nkg1NTBMTLSzTmpmD0hsCGRmynJ+yMDJAIIjPzlCSWlySmZfOwAAAoi4gBA=="; // Agora Token
  const channelName = "testing"; // Channel name

  const client = useRef<any>(
    AgoraRTC.createClient({ mode: "rtc", codec: "vp8" })
  );

  const toggleSwitch = () => setIsOn(!isOn);

  const openVideoCallModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoCallModal = () => {
    // If in call, ask the user to end call first or handle it accordingly.
    // For simplicity, we just close if not in call:
    if (!isInCall) {
      setIsVideoModalOpen(false);
    }
  };

  const startVideoCall = async () => {
    try {
      // Create local video track
      const videoTrack = await AgoraRTC.createCameraVideoTrack();
      setLocalVideoTrack(videoTrack);

      // Display local video track
      if (localVideoContainerRef.current) {
        videoTrack.play(localVideoContainerRef.current);
      }

      // Join the channel
      await client.current.join(appId, channelName, token);

      // Publish the local video track
      await client.current.publish([videoTrack]);

      // Handle remote users
      client.current.on("user-published", async (user: any, mediaType: any) => {
        if (mediaType === "video") {
          await client.current.subscribe(user, "video");
          const remoteTrack = user.videoTrack;
          setRemoteVideoTrack(remoteTrack);
          if (remoteVideoContainerRef.current) {
            remoteTrack.play(remoteVideoContainerRef.current);
          }
        }
      });

      client.current.on("user-unpublished", (user: any) => {
        if (remoteVideoTrack) {
          remoteVideoTrack.stop();
          setRemoteVideoTrack(null);
        }
      });

      setIsInCall(true);
    } catch (error) {
      console.error("Error starting video call:", error);
    }
  };

  const endVideoCall = async () => {
    try {
      // Stop and close local track
      if (localVideoTrack) {
        localVideoTrack.stop();
        localVideoTrack.close();
      }

      // Stop remote track if present
      if (remoteVideoTrack) {
        remoteVideoTrack.stop();
      }

      // Leave the channel
      await client.current.leave();

      // Reset states
      setLocalVideoTrack(null);
      setRemoteVideoTrack(null);
      setIsInCall(false);

      // Close the video modal now that call ended
      setIsVideoModalOpen(false);
    } catch (error) {
      console.error("Error ending video call:", error);
    }
  };

  // Helper function to get call details based on the type
  const getCallDetails = (type: string) => {
    switch (type) {
      case "outgoing":
        return {
          bgColor: "bg-gradient",
          icon: "/assets/icon/phone-outgoing.svg",
          alt: "Outgoing call",
        };
      case "missed":
        return {
          bgColor: "missed-call",
          icon: "/assets/icon/phone-times.svg",
          alt: "Missed call",
        };
      case "closed":
        return {
          bgColor: "bg-gradient-pausebtn",
          icon: "/assets/icon/phone-missed.svg",
          alt: "Closed call",
        };
      default:
        return {
          bgColor: "bg-gray-300",
          icon: "/assets/icon/phone-slash.svg",
          alt: "Unknown call",
        };
    }
  };

  // List of calls
  const calls = [
    { type: "closed", name: "Alice Johnson", phone: "+1 456 789 0123" },
    { type: "outgoing", name: "John Doe", phone: "+1 234 567 8910" },
    { type: "missed", name: "Jane Smith", phone: "+1 987 654 3210" },
    { type: "closed", name: "Alice Johnson", phone: "+1 456 789 0123" },
    { type: "outgoing", name: "John Doe", phone: "+1 234 567 8910" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-5 windows-bg">
      <div onClick={onClose} className="absolute inset-0"></div>

      <div className="h-full w-full md:w-auto overflow-y-scroll overflow-x-hidden formscrollbar rounded-[30px] overflow-hidden flex justify-self-center">
        <div className="bg-white rounded-[30px] px-4 md:px-5 py-[30px] w-full m-auto md:min-w-[690px] max-w-[690px] relative">
          {/* Close Window btn */}
          <button
            onClick={onClose}
            className="min-w-8 min-h-8 rounded-full flex items-center justify-center text-white bg-gradient absolute right-6 top-4"
          >
            <IoCloseSharp />
          </button>

          <h1 className="font-semibold text-xl text-center mb-3">Calls</h1>

          <p className="text-sm text-center mb-8">Manage All your Calls</p>

          <div className="flex justify-between gap-6">
            {/* Receive Calls  */}
            <div className="flex md:items-center flex-col md:flex-row gap-2 md:gap-5">
              <h3 className="text-base font-medium text-gradient">
                Receive Calls
              </h3>

              <div
                onClick={toggleSwitch}
                className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                  isOn ? "bg-gradient" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ${
                    isOn ? "translate-x-4" : "translate-x-0"
                  }`}
                ></div>
              </div>
            </div>

            {/* Receiving Language */}
            <div>
              <h3 className="text-base font-medium text-gradient mb-2">
                Receiving Language
              </h3>

              <div className="w-full md:w-[315px]">
                <ReceivingLanguage />
              </div>
            </div>
          </div>

          {/* Calls List  */}
          <div className="mt-5 flex flex-col gap-3">
            {calls.map((call, index) => {
              const callDetails = getCallDetails(call.type);
              const buttonOpacity =
                call.type === "outgoing" ? "opacity-100" : "opacity-40";

              return (
                <div
                  key={index}
                  className="bg-[#F7F3FF] rounded-2xl md:rounded-3xl flex items-center justify-between p-3 md:p-4"
                >
                  {/* Left Section */}
                  <div className="flex items-center gap-[10px]">
                    <div
                      className={`w-10 h-10 flex items-center justify-center ${callDetails.bgColor} rounded-full`}
                    >
                      <Image
                        src={callDetails.icon}
                        alt={callDetails.alt}
                        width={18}
                        height={18}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-base leading-4 truncate overflow-hidden w-[100px]">
                        {call.name}
                      </p>
                      <p className="font-medium text-gradient text-sm">
                        {call.phone}
                      </p>
                    </div>
                  </div>

                  {/* Right Section */}
                  <div className="flex gap-2">
                    <button
                      onClick={openVideoCallModal}
                      className="w-10 h-10 rounded-lg bg-white flex items-center justify-center"
                    >
                      <Image
                        src="/assets/icon/video-slash.svg"
                        alt="Video slash icon"
                        width={20}
                        height={19}
                      />
                    </button>
                    <button
                      className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#5C24FC] text-2xl ${buttonOpacity}`}
                    >
                      <LiaCheckDoubleSolid />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Video Call Modal */}
          {isVideoModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white rounded-[30px] px-4 md:px-5 py-[30px] w-full m-auto md:min-w-[690px] max-w-[690px] relative flex flex-col gap-4">
                {/* Close the modal only if not in call */}
                {!isInCall && (
                  <button
                    onClick={closeVideoCallModal}
                    className="absolute top-4 right-4 text-white bg-gradient p-1 rounded-full"
                  >
                    <IoCloseSharp />
                  </button>
                )}

                {!isInCall ? (
                  <>
                    <h2 className="text-xl font-semibold mb-4">
                      Start Video Call
                    </h2>
                    <div
                      ref={localVideoContainerRef}
                      className="h-[400px] mb-4 bg-gray-300"
                    ></div>
                    <button
                      onClick={startVideoCall}
                      className="text-white bg-gradient p-3 rounded-lg w-full"
                    >
                      Start Video Call
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold mb-4">In Call</h2>
                    <div
                      className="h-[200px] mb-4 bg-gray-300"
                      ref={localVideoContainerRef}
                    ></div>
                    <div
                      id="remote-video-container"
                      className="h-[200px] mb-4 bg-gray-300"
                      ref={remoteVideoContainerRef}
                    ></div>
                    <button
                      onClick={endVideoCall}
                      className="text-white bg-gradient p-3 rounded-lg w-full"
                    >
                      End Call
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallsModal;

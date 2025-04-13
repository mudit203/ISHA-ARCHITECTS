import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function VoiceInput({ onCommand }) {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleStop = () => {
    SpeechRecognition.stopListening();
    onCommand(transcript);
    resetTranscript();
  };

  return (
    <div>
      <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>🎙️ Start</button>
      <button onClick={handleStop}>🛑 Stop</button>
      <p>🎧 Heard: {transcript}</p>
    </div>
  );
}

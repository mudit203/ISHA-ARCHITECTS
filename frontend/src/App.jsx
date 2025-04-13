import React, { useState } from 'react';
import { Mic, Code2 } from 'lucide-react';
import CodeEditor from './components/CodeEditor';
import VoiceInput from './components/VoiceInput';
import api from './Api';

export default function App() {
  const [code, setCode] = useState("// Say a command to begin...");

  const handleCommand = async (command) => {
    const res = await api.post('/generate', { code, command });
    setCode(res.data.updatedCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold">Voice Code Editor</h1>
          </div>
          <div className="bg-gray-800 rounded-full p-2 shadow-lg">
            <VoiceInput 
              onCommand={handleCommand}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              <Mic className="w-5 h-5" />
              <span>Voice Command</span>
            </VoiceInput>
          </div>
        </header>

        {/* Main Editor */}
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="bg-gray-700 px-4 py-2 border-b border-gray-600">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="p-4">
            <CodeEditor 
              code={code} 
              setCode={setCode}
              className="w-full font-mono text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-400 text-sm">
          <p>Speak your code commands and watch the magic happen</p>
        </footer>
      </div>
    </div>
  );
}

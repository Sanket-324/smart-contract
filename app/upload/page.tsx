"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FileText, Play, Code } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UploadPage() {
  const [code, setCode] = useState("")
  const [fileName, setFileName] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const router = useRouter()

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
      const reader = new FileReader()
      reader.onload = (e) => {
        setCode(e.target?.result as string)
      }
      reader.readAsText(file)
    }
  }

  const handleAnalyze = async () => {
    if (!code.trim()) return

    setIsAnalyzing(true)
    // Simulate analysis delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsAnalyzing(false)

    // Navigate to results page
    router.push("/results")
  }

  const sampleContract = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleToken {
    mapping(address => uint256) public balances;
    uint256 public totalSupply;
    
    constructor(uint256 _totalSupply) {
        totalSupply = _totalSupply;
        balances[msg.sender] = _totalSupply;
    }
    
    function transfer(address to, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
    
    function withdraw() public {
        uint256 amount = balances[msg.sender];
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart Contract Analysis</h1>
          <p className="text-gray-600">
            Upload your Solidity code or paste it directly for comprehensive security analysis
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Contract Input
            </CardTitle>
            <CardDescription>Choose how you'd like to provide your smart contract code</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="editor" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="editor">Code Editor</TabsTrigger>
                <TabsTrigger value="upload">File Upload</TabsTrigger>
              </TabsList>

              <TabsContent value="editor" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Solidity Code</Label>
                  <Textarea
                    id="code"
                    placeholder="Paste your Solidity contract code here..."
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="min-h-[400px] font-mono text-sm"
                  />
                </div>
                <Button variant="outline" onClick={() => setCode(sampleContract)} className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Load Sample Contract
                </Button>
              </TabsContent>

              <TabsContent value="upload" className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <div className="space-y-2">
                    <Label htmlFor="file-upload" className="cursor-pointer">
                      <span className="text-blue-600 hover:text-blue-700 font-medium">Click to upload</span> or drag and
                      drop
                    </Label>
                    <p className="text-sm text-gray-500">.sol files up to 10MB</p>
                  </div>
                  <input id="file-upload" type="file" accept=".sol" onChange={handleFileUpload} className="hidden" />
                </div>
                {fileName && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>File loaded:</strong> {fileName}
                    </p>
                  </div>
                )}
                {code && (
                  <div className="space-y-2">
                    <Label>Preview</Label>
                    <Textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="min-h-[200px] font-mono text-sm"
                    />
                  </div>
                )}
              </TabsContent>
            </Tabs>

            <div className="flex gap-4 mt-6">
              <Button
                onClick={handleAnalyze}
                disabled={!code.trim() || isAnalyzing}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Analyze Contract
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

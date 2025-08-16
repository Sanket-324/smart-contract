"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Bot, Copy, Download, Sparkles } from "lucide-react"

const contractTemplates = [
  {
    name: "ERC-20 Token",
    description: "Standard fungible token with mint and burn functions",
    prompt: "Create an ERC-20 token with mint and burn functions",
  },
  {
    name: "ERC-721 NFT",
    description: "Non-fungible token with metadata support",
    prompt: "Create an ERC-721 NFT contract with metadata and minting",
  },
  {
    name: "Multi-Signature Wallet",
    description: "Secure wallet requiring multiple signatures",
    prompt: "Create a multi-signature wallet contract with 3 owners",
  },
  {
    name: "Staking Contract",
    description: "Token staking with rewards distribution",
    prompt: "Create a staking contract with reward distribution",
  },
]

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("")
  const [generatedCode, setGeneratedCode] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    // Simulate AI generation delay
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Mock generated contract based on prompt
    const mockContract = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * @title ${prompt.includes("ERC-20") ? "MyToken" : "GeneratedContract"}
 * @dev AI-generated smart contract based on: "${prompt}"
 */
contract MyToken is ERC20, Ownable, Pausable {
    uint256 public constant MAX_SUPPLY = 1000000 * 10**18;
    
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) {
        require(initialSupply <= MAX_SUPPLY, "Initial supply exceeds maximum");
        _mint(msg.sender, initialSupply);
    }
    
    /**
     * @dev Mint new tokens (only owner)
     * @param to Address to mint tokens to
     * @param amount Amount of tokens to mint
     */
    function mint(address to, uint256 amount) public onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "Would exceed max supply");
        _mint(to, amount);
    }
    
    /**
     * @dev Burn tokens from caller's balance
     * @param amount Amount of tokens to burn
     */
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
    
    /**
     * @dev Burn tokens from specified account (with allowance)
     * @param from Address to burn tokens from
     * @param amount Amount of tokens to burn
     */
    function burnFrom(address from, uint256 amount) public {
        _spendAllowance(from, msg.sender, amount);
        _burn(from, amount);
    }
    
    /**
     * @dev Pause all token transfers (only owner)
     */
    function pause() public onlyOwner {
        _pause();
    }
    
    /**
     * @dev Unpause all token transfers (only owner)
     */
    function unpause() public onlyOwner {
        _unpause();
    }
    
    /**
     * @dev Override transfer to include pause functionality
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }
}`

    setGeneratedCode(mockContract)
    setIsGenerating(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode)
  }

  const downloadContract = () => {
    const blob = new Blob([generatedCode], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "generated-contract.sol"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Contract Generator</h1>
          <p className="text-gray-600">Generate secure smart contracts from natural language descriptions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  Contract Description
                </CardTitle>
                <CardDescription>Describe the smart contract you want to generate</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="prompt">Natural Language Prompt</Label>
                  <Textarea
                    id="prompt"
                    placeholder="e.g., Create an ERC-20 token with mint and burn functions, pausable transfers, and a maximum supply of 1 million tokens"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Generating Contract...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Contract
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Templates */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle>Quick Templates</CardTitle>
                <CardDescription>Click on a template to use as starting point</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {contractTemplates.map((template, index) => (
                    <div
                      key={index}
                      onClick={() => setPrompt(template.prompt)}
                      className="p-4 border rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{template.name}</h4>
                        <Badge variant="outline">Template</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{template.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Generated Contract</CardTitle>
                    <CardDescription>AI-generated Solidity smart contract</CardDescription>
                  </div>
                  {generatedCode && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={copyToClipboard}>
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={downloadContract}>
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {generatedCode ? (
                  <div className="bg-gray-900 rounded-lg p-4 max-h-[600px] overflow-auto">
                    <pre className="text-sm text-green-400">
                      <code>{generatedCode}</code>
                    </pre>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <Bot className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Generated contract will appear here</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {generatedCode && (
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle>Contract Analysis</CardTitle>
                  <CardDescription>Quick security overview of generated contract</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Security Score</span>
                      <Badge className="bg-green-100 text-green-800">95/100</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Gas Efficiency</span>
                      <Badge className="bg-blue-100 text-blue-800">Optimized</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Best Practices</span>
                      <Badge className="bg-green-100 text-green-800">Followed</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Documentation</span>
                      <Badge className="bg-green-100 text-green-800">Complete</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

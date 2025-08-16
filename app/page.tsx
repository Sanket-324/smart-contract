import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Code, Bot, BarChart3, FileText, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            AI-Powered Security Analysis
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Secure Your Smart Contracts with <span className="text-blue-600">AI Analysis</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Upload your Solidity code and get comprehensive vulnerability analysis, security recommendations, and
            AI-generated smart contracts in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/upload">
                <FileText className="w-5 h-5 mr-2" />
                Analyze Contract
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/generate">
                <Bot className="w-5 h-5 mr-2" />
                Generate Contract
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Smart Contract Security</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform provides deep analysis and intelligent contract generation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Vulnerability Detection</CardTitle>
              <CardDescription>Identify reentrancy, overflow, and other critical security issues</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Reentrancy attack detection</li>
                <li>• Integer overflow/underflow</li>
                <li>• Access control issues</li>
                <li>• Gas optimization suggestions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Visual Analytics</CardTitle>
              <CardDescription>Interactive charts and risk scores for better understanding</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Risk severity scoring</li>
                <li>• Interactive vulnerability charts</li>
                <li>• Code complexity analysis</li>
                <li>• Security trend tracking</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>AI Contract Generation</CardTitle>
              <CardDescription>Generate secure smart contracts from natural language</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Natural language prompts</li>
                <li>• ERC standard templates</li>
                <li>• Custom contract logic</li>
                <li>• Best practice implementation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Contracts Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">5K+</div>
              <div className="text-gray-600">Vulnerabilities Found</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Smart Contracts?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust our AI-powered analysis to keep their contracts secure
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/upload">
              <Zap className="w-5 h-5 mr-2" />
              Start Analysis Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

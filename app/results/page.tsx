"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AlertTriangle, CheckCircle, XCircle, Info, Download, Code } from "lucide-react"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const vulnerabilityData = [
  { name: "Critical", value: 2, color: "#ef4444" },
  { name: "High", value: 3, color: "#f97316" },
  { name: "Medium", value: 5, color: "#eab308" },
  { name: "Low", value: 8, color: "#22c55e" },
]

const complexityData = [
  { name: "Functions", complexity: 15 },
  { name: "Modifiers", complexity: 8 },
  { name: "Events", complexity: 5 },
  { name: "Variables", complexity: 12 },
]

const vulnerabilities = [
  {
    id: 1,
    severity: "Critical",
    type: "Reentrancy Attack",
    line: 23,
    description: "The withdraw function is vulnerable to reentrancy attacks",
    suggestion: "Use the checks-effects-interactions pattern or ReentrancyGuard",
    code: `// Fix: Use checks-effects-interactions pattern
function withdraw() public {
    uint256 amount = balances[msg.sender];
    require(amount > 0, "No balance");
    balances[msg.sender] = 0; // Effect before interaction
    payable(msg.sender).transfer(amount);
}`,
  },
  {
    id: 2,
    severity: "High",
    type: "Integer Overflow",
    line: 18,
    description: "Potential integer overflow in balance calculation",
    suggestion: "Use SafeMath library or Solidity 0.8+ built-in overflow protection",
    code: `// Fix: Add overflow check
function transfer(address to, uint256 amount) public {
    require(balances[msg.sender] >= amount, "Insufficient balance");
    require(balances[to] + amount >= balances[to], "Overflow");
    balances[msg.sender] -= amount;
    balances[to] += amount;
}`,
  },
  {
    id: 3,
    severity: "Medium",
    type: "Missing Access Control",
    line: 12,
    description: "No access control on critical functions",
    suggestion: "Implement proper access control using OpenZeppelin Ownable",
    code: `// Fix: Add access control
import "@openzeppelin/contracts/access/Ownable.sol";

contract SimpleToken is Ownable {
    // ... existing code ...
    
    function mint(address to, uint256 amount) public onlyOwner {
        balances[to] += amount;
        totalSupply += amount;
    }
}`,
  },
]

export default function ResultsPage() {
  const overallScore = 65

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "High":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "Critical":
        return <XCircle className="w-4 h-4" />
      case "High":
        return <AlertTriangle className="w-4 h-4" />
      case "Medium":
        return <Info className="w-4 h-4" />
      case "Low":
        return <CheckCircle className="w-4 h-4" />
      default:
        return <Info className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Analysis Results</h1>
          <p className="text-gray-600">Comprehensive security analysis of your smart contract</p>
        </div>

        {/* Overall Score */}
        <Card className="mb-8 shadow-xl border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Security Score</CardTitle>
            <CardDescription>Overall contract security rating</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-900">{overallScore}</span>
              </div>
              <Progress value={overallScore} className="w-full h-4" />
            </div>
            <Badge variant={overallScore >= 80 ? "default" : overallScore >= 60 ? "secondary" : "destructive"}>
              {overallScore >= 80 ? "Good" : overallScore >= 60 ? "Fair" : "Needs Improvement"}
            </Badge>
          </CardContent>
        </Card>

        <Tabs defaultValue="vulnerabilities" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="vulnerabilities" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Vulnerability Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      critical: { label: "Critical", color: "#ef4444" },
                      high: { label: "High", color: "#f97316" },
                      medium: { label: "Medium", color: "#eab308" },
                      low: { label: "Low", color: "#22c55e" },
                    }}
                    className="h-[200px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={vulnerabilityData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          dataKey="value"
                        >
                          {vulnerabilityData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Code Complexity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      complexity: { label: "Complexity", color: "#3b82f6" },
                    }}
                    className="h-[200px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={complexityData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="complexity" fill="#3b82f6" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              {vulnerabilities.map((vuln) => (
                <Card key={vuln.id} className="shadow-lg border-0">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge className={getSeverityColor(vuln.severity)}>
                          {getSeverityIcon(vuln.severity)}
                          {vuln.severity}
                        </Badge>
                        <CardTitle className="text-lg">{vuln.type}</CardTitle>
                      </div>
                      <Badge variant="outline">Line {vuln.line}</Badge>
                    </div>
                    <CardDescription>{vuln.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>Recommendation</AlertTitle>
                      <AlertDescription>{vuln.suggestion}</AlertDescription>
                    </Alert>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Suggested Fix</span>
                        <Button variant="ghost" size="sm">
                          <Code className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                      </div>
                      <pre className="text-sm text-green-400 overflow-x-auto">
                        <code>{vuln.code}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Gas Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Current Gas Usage</span>
                      <Badge variant="secondary">2,450,000</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Optimized Gas Usage</span>
                      <Badge variant="default">1,890,000</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Potential Savings</span>
                      <Badge className="bg-green-100 text-green-800">23%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Code Quality Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Test Coverage</span>
                      <Badge variant="secondary">45%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Documentation</span>
                      <Badge variant="secondary">60%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Best Practices</span>
                      <Badge variant="default">75%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="grid gap-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Priority Actions</CardTitle>
                  <CardDescription>Recommended steps to improve your contract security</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-red-900">Fix Reentrancy Vulnerability</h4>
                        <p className="text-sm text-red-700 mt-1">
                          Implement checks-effects-interactions pattern in withdraw function
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-orange-900">Add Access Controls</h4>
                        <p className="text-sm text-orange-700 mt-1">
                          Implement proper role-based access control for administrative functions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <Info className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-900">Improve Documentation</h4>
                        <p className="text-sm text-yellow-700 mt-1">
                          Add comprehensive NatSpec documentation for all functions
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex gap-4 mt-8">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <Code className="w-4 h-4 mr-2" />
            Export Fixed Code
          </Button>
        </div>
      </div>
    </div>
  )
}

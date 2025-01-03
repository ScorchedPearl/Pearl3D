import React, { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from 'lucide-react'

const MovementSuggestions = () => {
  const [highlighted, setHighlighted] = useState(true)

  useEffect(() => {
  const timeout = setTimeout(() => {
  setHighlighted(false)
  }, 5000)

  return () => {
  clearTimeout(timeout)
  }
  }, [])

  if (!highlighted) return null
 return (
 <Card className="w-64 bg-black/30 backdrop-blur-md text-white border border-white/20 shadow-lg rounded-xl mt-10 ml-20">
  <CardContent className="p-4">
  <h3 className="text-lg font-semibold mb-4 text-center">Movement Controls</h3>
  <div className="space-y-3">
   <ControlItem keyChar="W" action="Move Forward" icon={<ArrowUp className="w-4 h-4" />} />
   <ControlItem keyChar="S" action="Move Backward" icon={<ArrowDown className="w-4 h-4" />} />
  </div>
  </CardContent>
 </Card>
 )
}

const ControlItem = ({ keyChar, action, icon }: { keyChar: string; action: string; icon: React.ReactNode }) => {


 return (
 <div className="flex items-center space-x-3 group">
  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-white/10 group-hover:bg-white/20 transition-colors duration-200">
  <span className="text-sm font-bold">{keyChar}</span>
  </div>
  <span className="text-sm">{action}</span>
  <div className="ml-auto opacity-50 group-hover:opacity-100 transition-opacity duration-200">{icon}</div>
 </div>
 )
}

export default MovementSuggestions

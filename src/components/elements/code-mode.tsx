import * as React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSettings, type CodeMode } from '@/lib/settings'

export function CodeModeSelect() {
  const { getSetting, setSetting } = useSettings()
  const codeMode = getSetting('codeMode', 'base')
  
  const handleValueChange = (value: CodeMode) => {
    setSetting('codeMode', value)
    window.location.reload()
  } 
  
  return (
    <Select value={codeMode} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select code mode" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="base">Base</SelectItem>
        <SelectItem value="advanced">Advanced</SelectItem>
      </SelectContent>
    </Select>
  )
} 
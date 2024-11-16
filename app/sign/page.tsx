'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function Component() {
  const [signature, setSignature] = useState('')
  const { toast } = useToast()
  const signatureRef = useRef<HTMLDivElement>(null)

  const formatPhoneNumber = (input: string) => {
    const phone = input.replace(/\D/g, '')
    const match = phone.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return input
  }

  const generateSignature = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const title = (form.elements.namedItem('title') as HTMLInputElement).value
    const department = (form.elements.namedItem('department') as HTMLInputElement).value
    const pronouns = (form.elements.namedItem('pronouns') as HTMLInputElement).value
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value

    let contactHTML = ''
    if (phone) {
      contactHTML = `<a href="tel:${phone.replace(/\D/g, '')}" style="color: black; text-decoration: none;">${phone}</a> | `
    }

    const signatureHTML = `
      <div class="signature" style="font-family: Arial, sans-serif;">
        <div class="name-title" style="font-size: 12px; color: black;">
          <span class="name" style="font-weight: bold;">${name}</span> | ${title}
        </div>
        <div class="department" style="font-size: 10px; text-transform: uppercase; color: rgb(170, 0, 0);">
          ${department.toUpperCase()} | SEATTLE UNIVERSITY
        </div>
        <div class="pronouns" style="font-size: 10px; color: black;">${pronouns}</div>
        <div class="spacer" style="margin-top: 6.5px;"></div>
        <div class="address" style="font-size: 10px; color: black;">901 12th Avenue, Seattle, WA 98122-1090</div>
        <div class="contact" style="font-size: 10px; color: black;">
          ${contactHTML}<a href="mailto:${email}" style="color: black; text-decoration: none;">${email}</a>
        </div>
      </div>
    `

    setSignature(signatureHTML)
  }

  const copySignature = () => {
    if (signatureRef.current) {
      const range = document.createRange()
      range.selectNode(signatureRef.current)
      window.getSelection()?.removeAllRanges()
      window.getSelection()?.addRange(range)
      document.execCommand('copy')
      window.getSelection()?.removeAllRanges()
      toast({
        title: "Signature copied!",
        description: "The signature has been copied to your clipboard.",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Email Signature Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={generateSignature} className="space-y-4">
            <div>
              <Label htmlFor="name">Name:</Label>
              <Input type="text" id="name" required />
            </div>
            
            <div>
              <Label htmlFor="title">Title:</Label>
              <Input type="text" id="title" required />
            </div>
            
            <div>
              <Label htmlFor="department">Department:</Label>
              <Input type="text" id="department" required />
            </div>
            
            <div>
              <Label htmlFor="pronouns">Pronouns:</Label>
              <Input type="text" id="pronouns" required />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone:</Label>
              <Input 
                type="tel" 
                id="phone" 
                onChange={(e) => e.target.value = formatPhoneNumber(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email:</Label>
              <Input type="email" id="email" required />
            </div>
            
            <Button type="submit">Generate Signature</Button>
          </form>

          {signature && (
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-2">Generated Signature:</h2>
              <div 
                ref={signatureRef}
                className="bg-gray-100 p-4 rounded"
                dangerouslySetInnerHTML={{ __html: signature }}
              />
              <Button onClick={copySignature} className="mt-4">Copy Signature</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
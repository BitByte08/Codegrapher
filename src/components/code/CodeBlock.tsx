'use client'
import 'prismjs/themes/prism-tomorrow.css'
import { useEffect } from 'react'
import Prism from 'prismjs'

type CodeBlockProps = {
  language: string
  code: string
}

const CodeBlock = ({ language, code }: CodeBlockProps) => {
  useEffect(() => {
    async function loadPrism() {
      try {
        await import(`prismjs/components/prism-${language}`)
        Prism.highlightAll()
      } catch (e) {
        console.error('Prism load failed:', e)
      }
    }
    loadPrism()
  }, [language])
  return (
    <pre className={`language-${language} h-full w-full`}>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  )
}

export default CodeBlock;
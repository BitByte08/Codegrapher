import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function CodeBlock({ code, language }: { code: string; language: string }) {
  return (
    <SyntaxHighlighter language={language} style={oneDark} className={"font"}>
      {code}
    </SyntaxHighlighter>
  )
}
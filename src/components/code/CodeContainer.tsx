'use client'

import dynamic from 'next/dynamic'
const CodeBlock = dynamic(() => import('@/components/code/CodeBlock'), { ssr: false })

type CodeContainerProps = {
  children: React.ReactNode
}

const CodeContainer = ({children}:CodeContainerProps) => {
  return (
    <>
      <CodeBlock language={"python"} code={"print('hello')"} />
      {children}
    </>
  )
}

export default CodeContainer;
import CodeBlock from "@/components/code/CodeBlock";

type CodeContainerProps = {
  children: React.ReactNode
}

const CodeContainer = ({children}:CodeContainerProps) => {
  return (
    <div className="grid grid-rows-[1fr_6.25rem] gap-2 pl-2 pr-2 bg-surface rounded-[0.875rem]">
      <CodeBlock language={"python"} code={`print('hello')`} />
      <div className={"mt-2 mb-2 pl-4 pr-4 pb-4"}>
      {children}
      </div>
    </div>
  )
}

export default CodeContainer;
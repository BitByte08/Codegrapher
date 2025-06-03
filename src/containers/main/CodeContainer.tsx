import CodeBlock from "@/components/ui/CodeBlock";
import Link from "next/link";

type CodeContainerProps = {
  children: React.ReactNode
}

const CodeContainer = ({children}:CodeContainerProps) => {
  return (
    <Link href="code/hello" className="grid grid-rows-[1fr_6.25rem] gap-2 pl-2 pr-2 bg-surface rounded-[0.875rem] transition-all duration-100 shadow-md hover:scale-105">
      <CodeBlock language={"python"} code={`print('hello')`} />
      <div className={"mt-2 mb-2 pl-4 pr-4 pb-4"}>
      {children}
      </div>
    </Link>
  )
}

export default CodeContainer;
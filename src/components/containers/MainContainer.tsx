
type MainContainerProps = {
  children: React.ReactNode;
}
const MainContainer = ({children} : MainContainerProps) => (
  <div className="grid grid-cols-3 pl-40 pr-40 gap-2 pt-2">
    {children}
  </div>
)
export default MainContainer;
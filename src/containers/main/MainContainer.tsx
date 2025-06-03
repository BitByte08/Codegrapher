import React from "react";

type MainContainerProps = {
  children: React.ReactNode;
}
const MainContainer = ({children} : MainContainerProps) => (
  <div className="grid grid-cols-3 px-20 gap-2 pt-2">
    {children}
  </div>
)
export default MainContainer;
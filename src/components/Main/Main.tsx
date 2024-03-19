import { FC, PropsWithChildren } from "react";

const Main:FC<PropsWithChildren> = ({children}) => {
    return(
        <div className="main">
            {children}
        </div>
    )
}

export default Main;
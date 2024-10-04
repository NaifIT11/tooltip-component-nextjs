



type ChildrenProps = {
    children: React.ReactNode
}

const TooltipProvider = ({children} : ChildrenProps) => {
    return <div role="tooltip">{children}</div>
}
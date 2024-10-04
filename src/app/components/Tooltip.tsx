



type ChildrenProps = {
    children: React.ReactNode
}

const TooltipProvider = ({children} : ChildrenProps) => {
    return <div className="tooltip-provider">{children}</div>
}

const TooltipTrigger = ({children} : ChildrenProps) => {
    return <div className="tooltip-trigger" aria-label="Tooltip Trigger">{children}</div>
}

const TooltipContent = ({children} : ChildrenProps) => {
    return <div role="tooltip" aria-label="ToolTip">{children}</div>
}


export {TooltipProvider , TooltipTrigger , TooltipContent};
import { TooltipContent, TooltipProvider, TooltipTrigger } from "./components/Tooltip";


export default function Home() {
  return (
    <TooltipProvider>
      <TooltipTrigger>
        <p>hover me</p>
      </TooltipTrigger>
      <TooltipContent>
        this is tooltip content
      </TooltipContent>
    </TooltipProvider>
  );
}

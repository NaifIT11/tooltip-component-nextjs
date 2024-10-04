import { TooltipContent, TooltipProvider, TooltipTrigger } from "./components/Tooltip";


export default function Home() {
  return (
    <TooltipProvider>
      <TooltipTrigger>
        <button>hover me</button>
      </TooltipTrigger>
      <TooltipContent>
        this is tooltip content
      </TooltipContent>
    </TooltipProvider>
  );
}

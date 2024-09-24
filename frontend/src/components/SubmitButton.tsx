"use client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

function Loader({ text }: { readonly text: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" color="gray" />
      <p>{text}</p>
    </div>
  );
}

interface submitButtonProps {
  loadingText: string;
  loading?: boolean;
  text: string;
  className?: string;
}
const SubmitButton = ({
  text,
  loading,
  loadingText,
  className,
}: Readonly<submitButtonProps>) => {
  const status = useFormStatus();

  return (
    <div className="w-full">
      <Button
        type="submit"
        disabled={status.pending || loading}
        aria-disabled={status.pending || loading}
        className={cn(className)}
      >
        {status.pending || loading ? <Loader text={loadingText} /> : text}
      </Button>
    </div>
  );
};
export default SubmitButton;

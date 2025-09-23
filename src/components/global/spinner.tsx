import { FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";

const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      base: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

const Spinner: FC<SpinnerProps> = ({ size, className }) => {
  return <Loader className={cn(spinnerVariants({ size }), className)} />;
};

export default Spinner;

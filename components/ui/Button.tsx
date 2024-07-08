import { cn } from "@/lib/utils";

type VariantProps = {
  color?: "primary" | "secondary" | "ghost_primary" | "ghost_secondary";
  fill?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps;

export function Button({
  color,
  children,
  className,
  fill,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ color, size, fill, className })}
      {...props}
    >
      {children}
    </button>
  );
}

export function buttonVariants({ color, size, fill, className }: VariantProps) {
  return cn(
    "hover:border-opacity-70",
    {
      "rounded-sm border px-2 py-1 text-sm": size === "xs",
      "rounded-md border px-2 py-1 text-base": size === "sm",
      "rounded-lg border px-6 py-1.5 text-lg max-lg:px-2 max-lg:text-sm":
        !size || size === "md",
      "rounded-xl border-2 px-8 py-2.5 text-xl": size === "lg",
    },

    fill
      ? {
          "color-primary border-transparent": !color || color === "primary",
          "color-secondary border-transparent": color === "secondary",
          "bg-transparent text-primary hover:bg-primary/20":
            color === "ghost_primary",
          "bg-transparent text-secondary hover:bg-secondary/20":
            color === "ghost_secondary",
        }
      : {
          "border-primary text-primary": !color || color === "primary",
          "border-secondary text-secondary": color === "secondary",
          "border-transparent text-primary": color === "ghost_primary",
          "border-transparent text-secondary": color === "ghost_secondary",
        },
    className,
  );
}

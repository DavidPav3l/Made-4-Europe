import { Button } from "./ui/button";

export default function CustomButton({
  children,
  link = "",
  variant = "default",
  size = "default",
}) {
  return (
    <>
      {link !== "" ? (
        <Button asChild variant={variant} size={size}>
          <a href={link}>{children}</a>
        </Button>
      ) : (
        <Button variant={variant} size={size}>
          {children}
        </Button>
      )}
    </>
  );
}

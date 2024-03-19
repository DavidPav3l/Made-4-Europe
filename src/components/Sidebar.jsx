import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { ChevronsLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 mx-auto flex h-[80px] w-[90%] max-w-screen-2xl items-center justify-between bg-white bg-opacity-80 py-3 backdrop-blur-[2px]">
      <a href="/" className={buttonVariants({ variant: "link" })}>
        <p className="text-2xl text-black lg:text-3xl">
          BITL <span className="">Blog</span>
        </p>
      </a>

      <Sheet>
        <SheetTrigger className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <ChevronsLeft className="h-8 w-8" />
          <span className="sr-only">Open</span>
        </SheetTrigger>
        <SheetContent>
          <nav className="mt-5 flex w-full flex-col items-start justify-start gap-10"></nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

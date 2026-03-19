// @ts-ignore
import "./index.css";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ArrowUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CircleFadingArrowUpIcon } from "lucide-react"

export function App() {
  return (
    <div>
      <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4 pl-10 pr-10">
          <a href="http://localhost:3000/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Bun</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" /></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary md:flex-row md:items-center">
              <li>
                <a href="http://localhost:3000" className="block py-2 px-3 text-neutral-400 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href="http://localhost:3000/login" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Login</a>
              </li>
              <li>
                <a href="http://localhost:3000/register" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Register</a>
              </li>
              <li className="flex items-center h-full">
                  <span className="flex items-center"><Sheet>
                  <SheetTrigger asChild>
                      <Button variant="outline" className="border-none mr-2 -ml-2">Profile</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                          Make changes to your profile here. Click save when you&apos;re done.
                        </SheetDescription>
                      </SheetHeader>
                      <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        <div className="grid gap-3">
                          <Label htmlFor="sheet-demo-name">Name</Label>
                          <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="sheet-demo-username">Username</Label>
                          <Input id="sheet-demo-username" defaultValue="@peduarte" />
                        </div>
                    </div>
                    
                    <SheetFooter>
                      <Button type="submit" variant="destructive">Log out</Button>
                        <Button type="submit">Save changes</Button>
                        <SheetClose asChild>
                          <Button variant="outline">Close</Button>
                      </SheetClose>
                      
                      </SheetFooter>
                    </SheetContent>
                  </Sheet></span>

                  <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/JokubasPukinskas.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

      <div className="max-w-250 bg-neutral-950 mx-auto min-h-screen p-4 pl-10 pr-10 mt-15 relative">
        <h1 className="bold text-2xl pb-5">Home</h1>
        <hr className="pb-5"></hr>
        <div className="w-full space-y-2">

          <div className="flex items-start gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage
                src="https://github.com/JokubasPukinskas.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Textarea
              className="flex-1 resize-none bg-none"
              placeholder="What's on your mind?"
            />

          </div>

          <div className="flex">
            <div className="ml-13">
              <ToggleGroup variant="outline" type="multiple">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Bold />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Italic />
                </ToggleGroupItem>
                <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
                  <Underline />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <Button className="ml-auto w-20">Send</Button>
          </div>

          <div className="mb-5">
            <div className="w-full h-auto mt-10 mb-5">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="w-full h-auto mt-15 mb-5">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
              <div className="w-full max-w-sm mt-5 ml-15">
                <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
                </AspectRatio>
              </div>
            </div>
            <hr></hr>
            <div className="w-full h-auto mt-15 mb-5">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="w-full h-auto mt-15 mb-5">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-16 w-[400px]" />
                </div>
              </div>
            </div>
            <hr></hr>
          </div>

        </div>

        <Pagination className="absolute bottom-30 left-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default App;

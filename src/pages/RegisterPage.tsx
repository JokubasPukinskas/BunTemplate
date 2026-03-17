
import "../index.css";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon, InfoIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

import { Label } from "@/components/ui/label"

export function LoginPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
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
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <a href="http://localhost:3000" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href="http://localhost:3000/login" className="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Login</a>
              </li>
              <li>
                <a href="http://localhost:3000/register" className="block py-2 px-3 text-neutral-400 rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="grid w-full max-w-md items-start gap-4 m-10 mt-20">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Register Successful</AlertTitle>
        <AlertDescription>
          You've registered successfully. Soon you'll be redirected to another page.
        </AlertDescription>
      </Alert>
    </div>
        <Card className="w-120 max-w-200 m-auto mt-20">
      <CardHeader>
        <CardTitle>Register for app</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email*</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password*</Label>
              </div>
                      <CardDescription>
          Password should be at least 15 characters.
        </CardDescription>
              <Input id="password" type="password" name="password" required />
              <div className="flex items-center">
                <Label htmlFor="password">Repeat Password*</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
              <div className="grid gap-2">
                <Label htmlFor="Calendar">Date of Birth*</Label>
                    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border m-auto"
      captionLayout="dropdown"
      required
    />
    <FieldGroup className="mt-5 w-56">
      <Field orientation="horizontal">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
        <FieldLabel htmlFor="terms-checkbox-basic">
          Accept terms and conditions
        </FieldLabel>
      </Field>
    </FieldGroup>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Register
        </Button>
        <Button variant="outline" className="w-full">
          Register with Google
        </Button>
      </CardFooter>
    </Card>
    </div>
  );
}

export default LoginPage;

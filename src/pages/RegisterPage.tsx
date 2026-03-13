
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
      <div className="grid w-full max-w-md items-start gap-4 m-10">
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

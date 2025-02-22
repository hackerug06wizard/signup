import type React from "react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

export default function AuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Sign up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your email or phone number to login to your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form onSubmit={onSubmit}>
              <div className="space-y-1">
                <Label htmlFor="email">Email or Phone</Label>
                <Input id="email" type="text" placeholder="m@example.com or +1234567890" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full mt-4" type="submit" disabled={isLoading}>
                {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                Login
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => {}}>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Login with GitHub
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Create a new account using your email or phone number.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form onSubmit={onSubmit}>
              <div className="space-y-1">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email or Phone</Label>
                <Input id="email" type="text" placeholder="m@example.com or +1234567890" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full mt-4" type="submit" disabled={isLoading}>
                {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                Sign Up
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => {}}>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Sign up with GitHub
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

      

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
       <Tabs defaultValue="student" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="student">Student</TabsTrigger>
        <TabsTrigger value="teacher">Teacher</TabsTrigger>
      </TabsList>
      <TabsContent value="student">
        <Card>
          <CardHeader>
            <CardTitle>Student Login</CardTitle>
            <CardDescription>
              {/* Message at the beginning */}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="studentEmail">Email</Label>
              <Input id="studentEmail" defaultValue="" placeholder="Enter Your Email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="studentPassword">Passowrd</Label>
              <Input id="studentPassword" type="password" defaultValue="" placeholder="Enter Your Password"/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="teacher">
        <Card>
          <CardHeader>
            <CardTitle>Teacher Login</CardTitle>
            <CardDescription>
          {/* Message at the beginning */}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="teacherEmail">Email</Label>
              <Input id="teacherEmail" type="text" placeholder="Enter Your Email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="teacherPassword">Password</Label>
              <Input id="teacherPassword" type="password" placeholder="Enter Your Password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  );
}

import SignInButton from "@/components/SignInButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getAuthSession } from "@/lib/nextauth";
import Image from "next/image";
import heroImg from "../../public/rb_2149329995.png"

export default async function Home() {
  const session = await getAuthSession()
if(session?.user){
  redirect("/dashboard")
}
  return (
    <div className="flex w-full  p-20 justify-center ">
      {/* <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Quizzzy 🔥!</CardTitle>
          <CardDescription>
            Quizzzy is a platform for creating quizzes using AI!. Get started by
            loggin in below!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google" />
        </CardContent>
      </Card> */}
          <div className="flex flex-col items-center justify-center min-h-screen  dark:bg-gray-900 px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Welcome to{' '}
          <span className="inline-block mt-2 md:mt-0">
            <span className="bg-white dark:bg-gray-800 rounded-lg border-2 border-b-4 border-r-4 border-black dark:border-white px-3 py-2 text-2xl md:text-4xl lg:text-5xl font-bold transition-all hover:-translate-y-[2px] hover:shadow-lg">
              Quizzzy
            </span>
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Create engaging quizzes powered by AI. Learn, challenge, and have fun!
        </p>
      </div>
      <SignInButton text="Sign In with Google" />
      <div className="relative w-full max-w-2xl aspect-square">
        <Image
          src={heroImg}
          alt="Quizzzy Hero"
          layout="fill"
          objectFit="contain"
          className="drop-shadow-xl"
        />
      </div>
    </div>
    </div>
  );
}

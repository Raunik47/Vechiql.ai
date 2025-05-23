
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Heart, CarFront, Layout, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { checkUser } from '@/lib/checkUser';

const Header = async ({ isAdminPage = false }) => {

  // this function every time run and check if our user  is inside the data base if not then in create it in the database
  const user= await checkUser();


  const isAdmin = user?.role==="ADMIN";

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={isAdminPage ? "/admin" : "/"} className='flex'>
        {/* this is the logo of this app */}
          <Image 
            src={"/logo.png"}
            alt="Vehiql Logo"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
          {isAdminPage && (
            <span className="text-xs font-extralight">admin</span>
          )}
        </Link>
         
{/* below this link have some action button */}

 {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {isAdminPage ? (
            <>
              <Link href="/">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft size={18} />
                  <span>Back to App</span>
                </Button>
              </Link>
            </>
          ) : (
            <SignedIn>
              {!isAdmin && (
                <Link
                  href="/reservations"
                  className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
                >
                  <Button variant="outline">
                    <CarFront size={18} />
                    <span className="hidden md:inline">My Reservations</span>
                  </Button>
                </Link>
              )}
              <a href="/saved-cars">
                <Button className="flex items-center gap-2">
                  <Heart size={18} />
                  <span className="hidden md:inline">Saved Cars</span>
                </Button>
              </a>
              {isAdmin && (
                <Link href="/admin">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Layout size={18} />
                    <span className="hidden md:inline">Admin Portal</span>
                  </Button>
                </Link>
              )}
            </SignedIn>
          )}

 {/* this  piece of code will used to show up login button when user is signed out */}
<SignedOut>
  <SignInButton forceRedirectUrl="/">
    <Button variant="outline">Login</Button>
  </SignInButton>
</SignedOut>


{/* this  piece of code is used to show the user button when user is sign this button is your email profile when u click on it u got option of sign out  */}


<SignedIn>
  <UserButton 
  appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
  />
</SignedIn>



          </div>

      </nav>
    </header>
  );
};

export default Header;
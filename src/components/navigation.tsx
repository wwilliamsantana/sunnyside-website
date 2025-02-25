import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Image from "next/image"

import iconHamburguer from "../assets/icon-hamburger.svg"
import Link from "next/link"


export function Navigation() {
  return (
    <>
      <nav className="max-md:hidden">
        <ul className="flex gap-8 content-center list-none font-[family-name:--font-barlow] items-center text-white">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>

          <li>
            <Link href="/projects">Projects</Link>
          </li>

          <li className="uppercase px-3 py-1 text-sm bg-white rounded-full text-black hover:bg-white/50 hover:text-white transition-colors">
            <Link href="">Contact</Link>
          </li>
        </ul>
      </nav>

      <nav className="md:hidden pr-6">
        <DropdownMenu>
          <DropdownMenuTrigger className="font-[family-name:--font-barlow] text-lg outline-none">
            <Image src={iconHamburguer} alt="" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:bg-sky-500 hover:text-white">
              <Link href="/about">
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-sky-500 hover:text-white" >
              <Link href="/services">
                Services
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-sky-500 hover:text-white" >
              <Link href="/projects">
                Projects
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-sky-500 hover:text-white" >
              <Link href="">
                Contact
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  )
}
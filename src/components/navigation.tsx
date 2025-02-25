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


export function Navigation() {
  return (
    <>
      <nav className="max-md:hidden">
        <ul className="flex gap-8 content-center list-none font-[family-name:--font-barlow] items-center text-white">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>

          <li>
            <a href="">Projects</a>
          </li>

          <li className="uppercase px-3 py-1 text-sm bg-white rounded-full text-black hover:bg-white/50 hover:text-white transition-colors">
            <a href="">Contact</a>
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
            <DropdownMenuItem className="hover:bg-sky-500 hover:text-white">About</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-sky-500 hover:text-white" >Services</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-sky-500 hover:text-white" >Projects</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-sky-500 hover:text-white" >Contact</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  )
}
"use client"

import * as React from "react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ThreadList } from "./assistant-ui/thread-list"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" className="flex items-center gap-3 group">
                {/* 🔥 Fire Logo (No Bounce) */}
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-black-500 via-black-500 to-black-400 shadow flex items-center justify-center bg-[length:200%_200%] animate-gradient group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl">🤖</span>
                </div>

                {/* 🖤 Brand Name */}
                <span className="font-bold text-black text-xl tracking-wide">
                  Aura AI
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <ThreadList />
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  )
}

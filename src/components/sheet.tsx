"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "./ui/textarea";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="text-slate-900">
          Contact Us
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-zinc-50">
        <SheetHeader>
          <SheetTitle>Contact Us Today!</SheetTitle>
          <SheetDescription>
            Get a free consultation from our team of experts.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Name" className="col-span-3" />
          </div>
          <div className="">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" value="Email" className="col-span-3" />
          </div>
          <div className="">
            <Label htmlFor="email" className="text-right">
              Message
            </Label>
            <Textarea id="message" value="Message" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="bg-slate-900">
              Get a Free Case Evaluation
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

"use client";

// imports
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

// ui components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// helpers
import { compressAddress } from "@/common/helpers";

// schema
const formSchema = z.object({
  amount: z.number().gt(0, {
    message: "Amount must be greater than 0.",
  }),
});

// types
type FormValues = z.infer<typeof formSchema>;

const SelectCampaign = () => {
  // form hooks
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
    },
  });

  // handlers
  const onSubmit: SubmitHandler<FormValues> = (data, event) => {
    event?.preventDefault();
    console.log(data);
  };

  return (
    <Card className="col-span-3">
      <CardHeader className="border-b">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the amount you want to contribute.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Contribute</Button>
          </form>
        </Form>
      </CardHeader>
      <CardContent className="pt-6 flex flex-col gap-2 border-b">
        <CardTitle>Campaign Title</CardTitle>
        <CardDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          consectetur repellat animi dolores distinctio minima velit eaque
          ipsum.
        </CardDescription>
        <div className="flex items-center text-sm">
          <div className="space-y-1">
            <h6 className="font-bold leading-none">Target:</h6>
          </div>
          <div className="ml-auto font-medium">120 ETH</div>
        </div>
        <div className="flex items-center">
          <div className="space-y-1">
            <h6 className="font-bold leading-none">Deadline:</h6>
          </div>
          <div className="ml-auto font-medium">12 Dec, 2024</div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Progress value={44} />
            </TooltipTrigger>
            <TooltipContent>
              <p>48 ETH raised</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardContent>
      <CardFooter className="pt-6 flex items-center justify-between">
        <div className="w-full space-y-8">
          <CardTitle>Contributors</CardTitle>
          <div className="flex items-center">
            <Avatar className="h-7 w-7">
              <AvatarImage
                src="https://api.dicebear.com/7.x/identicon/svg?seed=01.png"
                alt="Avatar"
              />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm text-muted-foreground">
                {compressAddress("0x1234567890123456789012345678901234567890")}
              </p>
            </div>
            <div className="ml-auto font-medium">12 ETH</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-7 w-7">
              <AvatarImage
                src="https://api.dicebear.com/7.x/identicon/svg?seed=02.png"
                alt="Avatar"
              />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm text-muted-foreground">
                {compressAddress("0x1234567890123456789012345678901234567890")}
              </p>
            </div>
            <div className="ml-auto font-medium">12 ETH</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-7 w-7">
              <AvatarImage
                src="https://api.dicebear.com/7.x/identicon/svg?seed=03.png"
                alt="Avatar"
              />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm text-muted-foreground">
                {compressAddress("0x1234567890123456789012345678901234567890")}
              </p>
            </div>
            <div className="ml-auto font-medium">12 ETH</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-7 w-7">
              <AvatarImage
                src="https://api.dicebear.com/7.x/identicon/svg?seed=04.png"
                alt="Avatar"
              />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm text-muted-foreground">
                {compressAddress("0x1234567890123456789012345678901234567890")}
              </p>
            </div>
            <div className="ml-auto font-medium">12 ETH</div>
          </div>
          <div className="flex items-center">
            <Avatar className="h-7 w-7">
              <AvatarImage
                src="https://api.dicebear.com/7.x/identicon/svg?seed=05.png"
                alt="Avatar"
              />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm text-muted-foreground">
                {compressAddress("0x1234567890123456789012345678901234567890")}
              </p>
            </div>
            <div className="ml-auto font-medium">12 ETH</div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SelectCampaign;

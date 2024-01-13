"use client";

// imports
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

// ui components
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Textarea } from "@/components/ui/textarea";

// schema
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters long.",
  }),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters long.",
  }),
  target: z.number().gt(0, {
    message: "Target must be greater than 0.",
  }),
  minimunContribution: z.number().gt(0, {
    message: "Minimum Contribution must be greater than 0.",
  }),
  deadline: z
    .string()
    .refine(
      (value) => {
        // Convert the string to a date
        const dateObject = new Date(value);
        // Check if the conversion to a valid date object was successful
        return !isNaN(dateObject.getTime());
      },
      {
        message: "Invalid date format",
      }
    )
    .refine(
      (value) => {
        // Check if the date is in the future
        return new Date(value) >= new Date();
      },
      {
        message: "Deadline must be in the future.",
      }
    )
});

// types
type FormValues = z.infer<typeof formSchema>;

const CampaignDailog = () => {
  // form hooks
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      target: 0,
      minimunContribution: 0,
      deadline: new Date().toISOString().split("T")[0],
    },
  });

  // handlers
  const onSubmit: SubmitHandler<FormValues> = (data, event) => {
    event?.preventDefault();
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Start Campaign</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Start a Campaign for free</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Funding for Defi Africa" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the title of your campaign.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the description of your campaign.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="target"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target</FormLabel>
                  <FormControl>
                    <Input placeholder="0" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the target of your campaign.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="minimunContribution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Minimum Contribution</FormLabel>
                  <FormControl>
                    <Input placeholder="0" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the minimum contribution of your campaign.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deadline</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the deadline of your campaign.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="w-full">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CampaignDailog;

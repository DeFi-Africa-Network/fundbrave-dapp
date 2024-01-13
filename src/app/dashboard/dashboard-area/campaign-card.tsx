// react
import { FC } from "react";

// next
import Image from "next/image";

// ui components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// helpers
import { compressAddress } from "@/common/helpers";

// types
type CampaignCardProps = {
  index: number;
};

const CampaignCard: FC<CampaignCardProps> = ({ index }) => {
  return (
    <Card>
      <CardHeader className="gap-y-2">
        <Image
          src="https://cdn.pixabay.com/photo/2016/11/29/08/51/forest-1868529_960_720.jpg"
          alt="Campaign Image"
          width={960}
          height={720}
          className="w-full h-auto rounded-lg"
        />
        <div className="flex flex-row items-center justify-between">
          {/* campaign creator */}
          <div className="flex flex-row items-center gap-x-1.5">
            {/* avatar */}
            <Avatar className="w-7 h-7">
              <AvatarImage
                src={`https://api.dicebear.com/7.x/identicon/svg?seed=${index}`}
                width={20}
                height={20}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* address */}
            <div className="flex flex-col">
              <CardTitle className="text-sm">Creator Address</CardTitle>
              <CardDescription>
                {compressAddress("0x1234567890123456789012345678901234567890")}
              </CardDescription>
            </div>
          </div>
          {/* status */}
          <div className="flex flex-row items-center gap-x-1.5">
            <Badge
              color="green"
              className="bg-emerald-600 text-white hover:bg-emerald-600"
            >
              Ongoing
            </Badge>
            <Badge
              color="orange"
              className="bg-orange-400 text-white hover:bg-orange-400"
            >
              Partial
            </Badge>
            <Badge variant="destructive">Ended</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-bold mb-1">Campaign Title</h3>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          tempora mollitia nemo corrupti labore modi harum consectetur ipsa?
        </p>
      </CardContent>
      <CardFooter className="w-full flex-col items-start gap-y-3">
        <div className="text-sm text-muted-foreground">
          <p>
            <b className="text-white">Target:</b> 10 ETH
          </p>
          <p>
            <b className="text-white">Deadline:</b> 12 Dec, 2024
          </p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Progress value={33} />
            </TooltipTrigger>
            <TooltipContent>
              <p>3 ETH raised</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;

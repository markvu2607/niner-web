import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

export function ReadingChallengeBlock() {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">2024 Reading Challenge</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2 p-4 pt-0">
        <Image
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1660682804i/57668000._SY180_.jpg"
          alt=""
          width={96}
          height={152}
        />
        <div>
          <h4 className="scroll-m-20 text-sm font-semibold tracking-tight">
            12
          </h4>
          <p className="text-xs">books completed</p>
          <p className="text-xs text-muted-foreground">
            4 books behind schedule
          </p>
          <Progress value={75} className="my-1" />
          <Button variant="link" size="sm" className="p-0 h-min">
            <small className="text-xs font-medium leading-none">
              View challenge
            </small>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CurrentlyReadingBlock() {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">Currently Reading</CardTitle>
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
            Tâm Lý Học Về Tiền
          </h4>
          <p className="text-xs pl-1">by Morgan Housel</p>
          <Button variant="outline" size="sm" className="p-1 h-min">
            <small className="text-xs font-medium leading-none">
              Update progress
            </small>
          </Button>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="link" className="p-1">
          <small className="text-xs font-medium leading-none">
            View all books
          </small>
        </Button>
        <Button variant="link" className="p-1">
          <small className="text-xs font-medium leading-none">Add a book</small>
        </Button>
        <Button variant="link" className="p-1">
          <small className="text-xs font-medium leading-none">
            General update
          </small>
        </Button>
      </CardFooter>
    </Card>
  );
}

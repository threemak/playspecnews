import React from "react";
import { Card, CardDescription } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { news } from "@/app/data";

export default function CricketNews() {
  return (
    <div className="py-4">
      <h3 className="prose font-semibold whitespace-nowrap">Cricket News</h3>
      <Card className="top-3">
        <ScrollArea className="h-44 m-2">
          {news.map((newsItem, i) => (
            <div key={i} className="my-2 py-1 border-b border-input">
              <CardDescription>{newsItem.title}</CardDescription>
            </div>
          ))}
        </ScrollArea>
      </Card>
    </div>
  );
}

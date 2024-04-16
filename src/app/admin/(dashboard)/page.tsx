"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FlagIcon,
  MusicalNoteIcon,
  UsersIcon,
  Bars4Icon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { FaDiscord } from "react-icons/fa";
import {
  Bar,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    views: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    views: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    views: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    views: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    views: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    views: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    views: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    views: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    views: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    views: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    views: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    views: Math.floor(Math.random() * 5000) + 1000,
  },
];
export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <section>
        <div className="grid lg:grid-cols-2  xl:grid-cols-4 grid-cols-1 w-full gap-4">
          <Card  >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sånger</CardTitle>
              <MusicalNoteIcon className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24 st</div>
              <p className="text-xs text-muted-foreground">
                Lägg till, redigera och ta bort sånger
              </p>
            </CardContent>
          </Card>
          <Card  >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Hitract Medlemmar
              </CardTitle>
              <FlagIcon className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">44 st</div>
            </CardContent>
          </Card>
          <Card  >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              Discord medlemmar
              <FaDiscord className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">120 st</div>
              <p className="text-xs text-muted-foreground">
                Antal medlemmar i discord
              </p>
            </CardContent>
          </Card>
          <Card  >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Styrelse</CardTitle>
              <UsersIcon className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8 st</div>
              <p className="text-xs text-muted-foreground">
                Antal styrelsemedlemmar
              </p>
            </CardContent>
          </Card>

          <Card className=" col-span-1 lg:col-span-2 xl:col-span-4 p-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Besökare</CardTitle>
              <ChartBarIcon className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400} >
                <LineChart data={data} >
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}`}
                  />
                  <Line
                    animationDuration={250}
                    type="monotone"
                    dataKey="views"
                    stroke="currentColor"
                    className="fill-primary"
                    strokeWidth={4}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

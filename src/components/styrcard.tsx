import {  IBoardFields, StyrelseMember } from "@/types/types";

interface StyrcardProps {
    info: StyrelseMember;
}



export default function Styrcard({ info }: StyrcardProps) {
    const nickname = info.nickname ? <span className="italic text-sm font-normal">&quot;{info.nickname}&quot;</span> : undefined;

    return (
        <div>
            <div className="flex flex-col gap-2 w-full dark:bg-neutral-900  border-yellow-500/10 dark:border-2   bg-white/50 p-4 items-center  rounded-lg pt-10 ">
                <h2 className="font-extrabold flex gap-2 items-center dark:text-white">
                    {info.forename} {nickname} {info.surname}
                </h2>
                <p className="text-gray-500">
                    {info.role}
                </p>
                <p className="text-gray-500">
                </p>
                </div>
        </div>

    );
}

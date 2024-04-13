import { BookOpenIcon, ChartBarIcon, CogIcon, MusicalNoteIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";



function SideBar() {

    return (
        <nav className="w-64 h-full flex flex-col">
            <div className="flex flex-col h-full bg-white dark:bg-neutral-900 dark:text-white border-r border-r-neutral-100 flex-1">
                <div className="p-4">
                    <h1 className="text-3xl">Admin</h1>
                </div>
                <ul className="flex flex-col">
                    <li className="p-4 border-b border-yellow-950/10 dark:border-yellow-300/10">
                        <Link className="flex gap-2 items-center" href="/admin">
                            <ChartBarIcon className="w-5 h-5" /> <div>Dashboard</div>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-yellow-950/10 dark:border-yellow-300/10">
                        <Link className="flex gap-2 items-center" href="/admin/songs">
                            <MusicalNoteIcon className="w-5 h-5" /> <div>Sånger</div>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-yellow-950/10 dark:border-yellow-300/10">
                        <Link className="flex gap-2 items-center" href="/admin/styr">
                            <UserGroupIcon className="w-5 h-5" /> <div>Styrelse</div>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-yellow-950/10 dark:border-yellow-300/10">
                        <Link className="flex gap-2 items-center" href="/admin/pages">
                            <BookOpenIcon className="w-5 h-5" /> <div>Sidor</div>
                        </Link>
                    </li>
                    <li className="p-4 border-b border-yellow-950/10 dark:border-yellow-300/10">
                        <Link className="flex gap-2 items-center" href="/admin/settings">
                            <CogIcon className="w-5 h-5" /> <div>Inställningar</div>
                        </Link>
                    </li>
                    
                    
                </ul>
            </div>
            <div className="p-4">
                        <Link href="/admin/sign-out" className="flex gap-2 items-center" >
                           <ArrowRightEndOnRectangleIcon className="w-4 h-4"/> <div>Logga ut</div>
                        </Link>
            </div>
        </nav>

    );
}

export default SideBar;
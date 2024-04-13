import { ISongAttributes, ISongInfo } from "@/types/types";
import ReactMarkdown from "react-markdown";


interface SongTextProps {
    song: ISongInfo;
}


export default function SongText({ song }: SongTextProps) {
    return (
        <div className=" p-4  scroll-m-32 bg-white dark:bg-neutral-900 dark:text-white rounded-lg border-yellow-950/10 dark:border-yellow-300/10 border-2 w-full" id={song.name}>
            <h1 className="text-3xl mb-4">{song.name}</h1>
            {song.melody && <h2 className="text-sm font-bold">{song.melody}</h2>}
            {song.writer && <h3 className="text-xs">{song.writer}</h3>}
            {song.note && <h4 className="text-base text-neutral-400 ">{song.note}</h4>}
            <ReactMarkdown className="mt-6"  components={{
                pre: 'p',
                p: ({ node, ...props }) => <p {...props} className="dark:text-yellow-50 mb-2" />,
                code:  ({ node, ...props }) => <em {...props} className="italic bg-yellow-200 px-4 py-2 rounded-lg text-yellow-900 border-2 border-yellow-600 inline-block mb-1" />,
                

                
            }} >{song.text}</ReactMarkdown>
        </div>
    )
}



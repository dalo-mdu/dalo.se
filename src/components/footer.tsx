import Link from "next/link";



export default function Footer(
    { items }: { items: any[] }
    
) {

    return (
        <footer className="flex justify-center border-t dark:border-t-white border-t-black">
            <div className="max-w-7xl w-full px-24 md:px-10 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
                    {
                        items.map((item, index) => {
                            return (
                                <div key={index} className={`flex flex-col justify-center gap-4 py-8`}>
                                    <h2 className="font-extrabold">
                                        {item.title}
                                    </h2>
                                    <div className="grid grid-cols-2 gap-2">
                                    {
                                        item.items.map((subitem:any) => {
                                            return (
                                                <Link key={subitem.title} href={subitem.link} className='  block px-2 transition-all  hover:backdrop-blur-2xl' >
                                                    {subitem.title}
                                                </Link>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                            )

                        })}
                </div>
            </div>
        </footer>

    );
}
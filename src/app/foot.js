// import { IoEarth } from "react-icons/io";
import { ImEarth } from "react-icons/im";
import { footer, } from "./data";

export default function Foot() {

    return (


        <div className="bg-zinc-100 px-[75.95px] pb-4 mt-24 pt-4">
            <div className="grid grid-cols-6 gap-4 pt-8">
                {footer.map((foot) => (
                    <div className="flex flex-col space-y-4 font-semibold text-stone-500 text-[15px] pb-3">{foot.fhead}
                        {foot.fbody.map((foot1) => (
                            <div className="text-[11px] font-normal mt-3 ">{foot1}</div>
                        ))}
                    </div>
                ))}



            </div>
            <div className="flex gap-3 pt-4">
                <ImEarth className="flex text-zinc-600 h-[18px] w-[18px] cursor-pointer" /><p className="text-[11px] text-zinc-600 hover:underline cursor-pointer">English (India)</p>
                <div className="flex pl-2 gap-1 cursor-pointer"><svg role="img" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 30 14" height={16} width={43}>

                    <path d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#fff", }} />
                    <path d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9l-3.1 11.6H7.4c-3.2 0-5.8-2.6-5.8-5.8z" style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#06f" }} />
                    <path d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0l-2.2-2.2-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.8 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z" style={{ fill: "#fff" }} />
                    <path d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5.1-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z" style={{ fill: "#06f", }} />
                </svg>
                    <p className="text-[11px] text-zinc-600 hover:underline cursor-pointer">Your Privacy Choices</p>
                </div>
            </div>
            <div className=" text-[11px] text-zinc-600">
                <nav>
                    <ul className="flex gap-7 justify-end">
                        <li className="hover:underline cursor-pointer">Contact Microsoft</li>
                        <li className="hover:underline cursor-pointer">Privacy</li>
                        <li className="hover:underline cursor-pointer">Terms of use</li>
                        <li className="hover:underline cursor-pointer">About our ads</li>
                        <li>&copy; Microsoft 2023</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
import { BiLogIn } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaChildReaching } from "react-icons/fa6";
import { AiFillSliders } from "react-icons/ai";
import {
  HiOutlineIdentification,
  HiOutlineEye,
  HiOutlineQuestionMarkCircle,
  HiShare,
} from "react-icons/hi";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl rounded-xl flex w-[90vw] max-w-5xl overflow-hidden">
      

      <div className="bg-gray-700 p-8 text-emerald-200 w-1/2 flex flex-col justify-between">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Bitacora</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque porro ducimus a. Exercitationem, beatae ad explicad.
          </p>

          <div className="flex flex-col gap-3 mt-6">
            <GlowButton icon={<AiFillSliders />} label="Functionality" />
            <GlowButton icon={<FaChildReaching />} label="Reach" />
            <Link href="/dashboard" className="w-full">
              <GlowButton icon={<FaUsers />} label="Main App" />
            </Link>
          </div>
        </div>
      </div>


      <div className="bg-indigo-200 p-8 text-teal-900 w-1/2 flex flex-col justify-between">
        <div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, laboriosam? Assumenda explicabo voluptatibus illum quae provident, numquam iure odit quis eos quia totam nostrum excepturi, delectus nemo libero, illo nobis.
          </p>
        </div>


        <div className="flex justify-start gap-4 mt-6 text-xl text-indigo-700">
          <IconGlow icon={<HiOutlineQuestionMarkCircle />} />
          <IconGlow icon={<HiOutlineEye />} />
          <IconGlow icon={<HiOutlineIdentification />} />
          <IconGlow icon={<HiShare />} />
        </div>
      </div>
    </div>
  );
}

function GlowButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-2 rounded-md bg-cyan-100 text-teal-600 shadow-md text-sm font-medium transition hover:shadow-[0_0_12px_2px_rgba(34,197,94,0.5)] hover:bg-cyan-200">
      {icon}
      {label}
    </button>
  );
}

function IconGlow({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="hover:text-white hover:scale-110 transition duration-200 cursor-pointer">
      {icon}
    </div>
  );
}


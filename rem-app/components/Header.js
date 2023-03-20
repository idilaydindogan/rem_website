"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="w-full border-b-2 border-slate-200">
			<div className="justify-between px-8 py-3 mx-auto lg:max-w-6xl md:flex md:px-10 md:py-5">
				<div className="flex items-center justify-between text-xl md:block">
					<Link href={"/"}>
						<h2>REM AYDIN</h2>
					</Link>

					<div className="md:hidden">
						<button
							className="p-2 text-2xl rounded-md outline-none"
							onClick={() => setOpen(!open)}
						>
							{open ? (
								<RxCross1 className="" />
							) : (
								<RxHamburgerMenu className="" />
							)}
						</button>
					</div>
				</div>
				<div>
					<div
						className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
							open ? "md:p-0 block" : "hidden"
						}`}
					>
						<div className="flex flex-col items-center justify-center h-full gap-5 pb-8 text-lg md:pb-0 md:h-auto md:flex-row">
							<Link href={"/about"} onClick={() => setOpen(!open)}>
								ABOUT
							</Link>
							<Link href={"/"} onClick={() => setOpen(!open)}>
								SERVICES
							</Link>
							<Link href={"/"} onClick={() => setOpen(!open)}>
								CONTACT
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;

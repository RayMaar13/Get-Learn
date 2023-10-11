import Link from "next/link";

export const NavbarLink = (props) => {
  return (
    <>
      <ul className={` ${props.className}`}>
        <Link
          href={"/"}
          className={"transition-colors hover:scale-110 hover:text-neutral-300"}
        >
          Home
        </Link>
        <Link
          href={"/#about"}
          className={"transition-colors hover:scale-110 hover:text-neutral-300"}
        >
          About
        </Link>
        <Link
          href={"/#service"}
          className={"transition-colors hover:scale-110 hover:text-neutral-300"}
        >
          Service
        </Link>
        <Link
          href={"/Courses"}
          className={"transition-colors hover:scale-110 hover:text-neutral-300"}
        >
          Courses
        </Link>
      </ul>
      <Link href={"/login"} className={props.className}>
        <button
          className={
            "rounded-md bg-blue-500 px-7 py-2 hover:scale-105 hover:bg-blue-600"
          }
        >
          Login
        </button>
      </Link>
    </>
  );
};

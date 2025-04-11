import Image from "next/image";
import Link from "next/link"

export default function Challenge01 (){

  return (
    <>
      <Link href="/">
        <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
        Índice
      </Link>
      <h1>Trebuchet?!</h1>
    </>
  );
}
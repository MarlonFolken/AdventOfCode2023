import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>Index of challenges</h2>
      <ol>
        <li>
          <Link href="/challenge01">
            <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
            Challenge 01
          </Link>
        </li>
      </ol>
    </div>
  );
}

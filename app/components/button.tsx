import Link from "next/link";
import Image from "next/image";

const Button = () => {
  return (
    // <button>
    <Link href="/">
      <Image src="/icon.svg" width={120} height={120} alt="logo" />
    </Link>
    //<div>Button</div>;
  );
};

export default Button;

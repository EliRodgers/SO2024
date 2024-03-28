import Link from "next/link";
import Image from "next/image";

const Button = () => {
  return (
    // <button>
    <Link href="/">
      <Image src="/logobright.png" width={60} height={60} alt="logo" />
    </Link>
    //<div>Button</div>;
  );
};

export default Button;

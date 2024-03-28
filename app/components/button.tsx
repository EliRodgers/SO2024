import Link from "next/link";
import Image from "next/image";

const Button = () => {
  return (
    // <button>
    <Link href="/">
      <Image
        src="/logobright.png"
        width={60}
        height={60}
        alt="logo"
        className="lg:hidden"
      />
      <Image
        src="/logobright.png"
        width={100}
        height={100}
        alt="logo"
        className="hidden lg:block"
      />
    </Link>
    //<div>Button</div>;
  );
};

export default Button;

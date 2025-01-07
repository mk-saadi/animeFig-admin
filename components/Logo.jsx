import Link from "next/link";
import Image from "next/image"
const Logo = () => {
    return (
        <Link href={'/'}>
            <Image src='/logo.png' width={45} height={45} priority alt='logo'/>
        </Link>
    );
};

export default Logo;
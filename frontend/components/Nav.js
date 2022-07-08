import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavStyles, NavItems } from "../styles/NavStyles";

export default function Nav() {
  return (
    <NavStyles>
      <Link href={"/"}>Styled.</Link>

      <NavItems>
        <FiShoppingBag />
        <h3>Cart</h3>
      </NavItems>
    </NavStyles>
  );
}

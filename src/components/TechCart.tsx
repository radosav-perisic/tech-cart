import { Offcanvas } from "react-bootstrap";
import { useTechCart } from "../context/TechCartContext";

type shoppingCartProps = {
    isOpen: boolean
}

export function TechCart({isOpen} :shoppingCartProps) {
    const closeCart = useTechCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
}

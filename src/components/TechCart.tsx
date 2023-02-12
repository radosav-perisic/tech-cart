import { Offcanvas, Stack } from "react-bootstrap";
import { useTechCart } from "../context/TechCartContext";
import { CartItem } from "./CartItem";

type shoppingCartProps = {
  isOpen: boolean;
};

export function TechCart({ isOpen }: shoppingCartProps) {
  const { closeCart, cartItems } = useTechCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

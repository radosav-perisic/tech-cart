import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";

export const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row>
         {storeItems.map(item => (
            <Col>{JSON.stringify(item)}</Col>
         ))}
      </Row>
    </>
  );
};

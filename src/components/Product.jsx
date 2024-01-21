const Product = ({ title, price }) => {
  // let isDiscount = price > 30000 ? "5% Discount" : <a href="#">Get Discount</a>;
  const styles = {
    backgroundColor: price > 30000 ? "yellow" : "red",
    padding: 20,
  };
  return (
    <div>
      <h1>{title}</h1>
      <h3 style={styles}>Product Price:{" " + price}</h3>
      <p>{price > 30000 ? "5%" : null}</p>
    </div>
  );
};
export default Product;

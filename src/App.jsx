import EventHandling from "./components/EventHandling";
import MsgBox from "./components/MsgBox";
import Product from "./components/Product";

const App = () => {
  let arr = [<li>"hi-tech"</li>, <li> "durable"</li>, <li>"fast"</li>];
  // let arr2 = {
  //   a: "hi-tech",
  //   b: "durable",
  //   c: "LongLasting",
  // };
  return (
    <div>
      <MsgBox userName="Marsel" textColor="red" />
      <MsgBox userName="Mahmudul" textColor="yellow" />
      <MsgBox userName="Hasan" textColor="tomato" />
      <Product
        title="phone"
        price={20000}
        //feature={["hi-tech", "durable", "fast"]}
        feature={arr}
      />
      <Product title="Laptop" price={50000} />
      <Product title="Pen" price={10} />
      <EventHandling />
    </div>
  );
};

export default App;

import "./App.css";
import Card from "./component/Card";
function App() {
  return (
    <>
      <div className="bg-gray-100 w-screen min-h-screen">
        {/* Heading Section */}
        <div className="bg-gray-100 font-bold p-6 sm:p-10 text-center text-3xl sm:text-5xl text-purple-800">
          OUR SERVICES
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center items-center bg-gray-100 gap-4 px-4">
          <Card img={"https://t3.ftcdn.net/jpg/02/74/70/14/360_F_274701403_Twlx1bqz3RzjtwlDrQElEZ82oGvon7f6.jpg"} title={"Emergency Plumbing Service"} />
          <Card img={"https://c8.alamy.com/comp/WJ443T/plumbing-pipe-replacement-repair-drain-pipe-line-icon-vector-WJ443T.jpg"} title={"Plumbing and Drains"} />
          <Card img={"https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-water-icon-vector-illustration-in-filled-style-for-any-purpose-png-image_968391.jpg"} title={"Water Damage"} />
          <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4B6kAfly4l6qqIgWU4YIqzMnli2nks2jKmw&s"} title={"Water Heaters"}/>
        </div>
      </div>
    </>
  );
}

export default App;

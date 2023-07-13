import axios from "axios";
import Pagination from "./Pagination";

function App() {
  // const [data, setData] = useState([]);
  // const [perPage, setPerPage] = useState([]);

  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
  //     setData(res.data);
  //     setPerPage(res.data.slice(0, 10));
  //   });
  // }, []);
  // console.log(data);

  return (
    <div className="h-screen flex justify-center">
      {/* {data.length > 1 ? (
        <div>
          {data.map((post) => (
            <div>{post.title}</div>
          ))}
          <br />
          <Pagination />
        </div>
      ) : (
        <h1>Data not loaded</h1>
      )} */}
      <Pagination />
    </div>
  );
}

export default App;

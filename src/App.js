//import logo from './logo.svg';
import "./App.css";
import Learning from "./Learning";
import StudentsData from "./StudentsData";
import Practice from "./Practice";
//import Buttons from "./Buttons";
import SimplePaper from "./SimplePaper";
import FunTableForm from "./FunTableForm";
import CounterApp from "./CounterApp";
function App() {
  //what is component?
  //What are hooks?
  //Array methods is js
  //.map, .filter, .reduce
  /*const studentsData = [
    {
      name: "Student1",
      physics: 25,
      biology: 65,
      maths: 45,
    },
    {
      name: "Student2",
      physics: 25,
      biology: 35,
      maths: 95,
    },
    {
      name: "Student3",
      physics: 25,
      biology: 35,
      maths: 75,
    },
    {
      name: "Student4",
      physics: 25,
      biology: 55,
      maths: 45,
    },
  ];

  const arrayExample = () => {
    let array1 = ["a1", "a2"];
    console.log(array1);
    let arrayObj = [
      {
        ele1: "this is element 1",
        ele2: "a2",
      },
    ];

    console.log(arrayObj[0]);
  };
  const mapExample = () => {
    const names = [
      { name: "Ram", friend: "Shyam", age: "20" },
      { name: "Meet", friend: "Geet", age: "17" },
    ];
    const namelist = names.map((n) => {
      return {
        ...names,
        adult: n.age > 18,
      };
    });
    console.log(namelist);

    const fruit = [
      { fresh: "yes", name: "apple" },
      { fresh: "no", name: "orange" },
    ];
    const fruitstatus = fruit
      .map((fru) => {
        return {
          ...fru,
          status: fru.fresh === "yes",
          capFruit: fru.name.toUpperCase(),
        };
      })
      .filter((fru) => fru.status === true);
    console.log(fruitstatus);
  };
  const filterExample = () => {
    const colour = [
      { name: "red", value: "1" },
      { name: "yellow", value: "2" },
      { name: "green", value: "3" },
      { name: "blue", value: "4" },
    ];
    const colors = colour.filter((col) => Number(col.value) % 2 === 0);
    console.log(colors);

    const classes = [
      { room: 101, size: 60, floor: "1st" },
      { room: 102, size: 45, floor: "1st" },
      { room: 201, size: 50, floor: "2nd" },
      { room: 301, size: 55, floor: "3rd" },
    ];
    const classrooms = classes.filter((cl) => cl.size > 50);
    console.log(classrooms);

    const combinedArr = colour.concat(classes);
    console.log(combinedArr);
  };

  const onClick = () => {
    console.log("Functions called");
    arrayExample();
    mapExample();
    filterExample();
  };*/

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/*<button
            style={{
              width: "200px",
              height: "200px",
              border: "5px,solid,blue",
            }}
            onClick={onClick}
          >
            Call functions{" "}
          </button>*/}
          {/* <Learning /> */}
          {/*<StudentsData data={studentsData} />*/}
          {/*<Practice />*/}
        </div>
        <div>
          <p>Fun Table Form!</p>
          {/* <Greetings /> */}
          {/* <Lesson status="Done" /> */}
        </div>
      </header>
      <FunTableForm />
      <CounterApp />
      {/*<SimplePaper />*/}
      {/*<FunctionTable />*/}
      {/*<Buttons />*/}
    </div>
  );
  function Greetings() {
    return <p>Hello! This is my first functional component</p>;
  }
  function Lesson(props) {
    return (
      <p>
        <ol style={{ "text-align": "left" }}>
          <li>Filter method- {props.status}</li>
          <li>Map method- {props.status}</li>
          <li>Component-functional and class- {props.status}</li>
          <li>Hooks-addState and addEffect- {props.status}</li>
        </ol>
      </p>
    );
  }
}

export default App;

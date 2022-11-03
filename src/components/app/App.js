import { Component } from "react";
import TodoList from "../todo-list/TodoList";

const date1 = new Date(2022, 10,  31,  14, 5);
const date2 = new Date(2022, 10,  31,  16, 8);

const initialData = [
  {
    title: 'Изучить React',
    desc: 'Да поскорее!',
    image: '',
    done: true,
    createdAt: date1.toLocaleString(),
    key: date1.getTime()
  },
  {
    title: 'Написать первое React приложение',
    desc: 'Список запланированных дел',
    image: '',
    done: false,
    createdAt: date2.toLocaleString(),
    key: date2.getTime()
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.data = initialData;
    this.setDone = this.setDone.bind(this);
  }

  setDone(key) {
    const deed = this.data.find((current) => current.key === key);
    if (deed) {
      deed.done = true;
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <span className="navbar-item is-uppercase">
              Todos
            </span>
          </div>
        </nav>
        <main className="context px-6 mt-6">
          <TodoList list={this.data} setDone={this.setDone} />
        </main>
      </div>
    )
  }
}
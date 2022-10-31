import { Component } from "react";

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
]
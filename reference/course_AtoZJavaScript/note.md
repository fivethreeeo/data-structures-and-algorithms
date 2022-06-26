- [JavaScript 성능 측정 방법](#javascript-성능-측정-방법)
- [7가지 코드 트릭](#7가지-코드-트릭)
  - [1. 변수 스왑](#1-변수-스왑)
  - [2. 배열 생성으로 루프 제거하기](#2-배열-생성으로-루프-제거하기)
  - [3. 똑같은 요소로 채워진 배열 생성](#3-똑같은-요소로-채워진-배열-생성)
  - [4. 배열 내 중복 요소 제거하기](#4-배열-내-중복-요소-제거하기)
  - [5. 구조 분해 할당](#5-구조-분해-할당)
  - [6. 객체 생성시 키 생략하기](#6-객체-생성시-키-생략하기)
  - [7. `!!` 연산자를 사용하여 Boolean 값으로 바꾸기](#7--연산자를-사용하여-boolean-값으로-바꾸기)
- [배열](#배열)
- [연결리스트](#연결리스트)
  - [`Singly Linked List(단일 연결 리스트)`](#singly-linked-list단일-연결-리스트)
  - [`Doubly Linked List`](#doubly-linked-list)
  - [`Circular Linked List(환형 연결리스트)`](#circular-linked-list환형-연결리스트)
- [큐(Queue)](#큐queue)
  - [배열 활용 방법. 큐의 크기가 무한정 커질 수 있음](#배열-활용-방법-큐의-크기가-무한정-커질-수-있음)
  - [연결리스트 활용 방법](#연결리스트-활용-방법)
- [해시 테이블](#해시-테이블)
  - [해시 충돌 방지 방법](#해시-충돌-방지-방법)
    - [1. 선형 탐사법](#1-선형-탐사법)
    - [2. 제곱 탐사법](#2-제곱-탐사법)
    - [3. 이중 해싱](#3-이중-해싱)
    - [4. 분리 연결법](#4-분리-연결법)
  - [Map 으로 해시테이블 만들기](#map-으로-해시테이블-만들기)
  - [Set 으로 해시테이블 만들기](#set-으로-해시테이블-만들기)

## JavaScript 성능 측정 방법

```js
const start = new Date().getTime();
// ...
const end = new Date().getTime();

console.log(end - start);
```

<br>

## 7가지 코드 트릭

### 1. 변수 스왑

```js
let a = 1;
let b = 2;
[a, b] = [b, a];

console.log(a, b); // 2, 1
```

<br>

### 2. 배열 생성으로 루프 제거하기

```js
const sum = [...new Array(5)].map((_, i) => i + 5).reduce((a, c) => a + c);
```

<br>

### 3. 똑같은 요소로 채워진 배열 생성

```js
const a = new Array(5).fill(0); // [0, 0, 0, 0, 0]
const b = [1, 2, 3, 4, 5].fill(0); // [0, 0, 0, 0, 0]
const c = "a".repeat(5).split(""); // ['a', 'a', 'a', 'a', 'a']
const d = Array.from("a".repeat(5)); // ['a', 'a', 'a', 'a', 'a']

// 속도는 a, b가 제일 빠름
```

<br>

### 4. 배열 내 중복 요소 제거하기

```js
const names = ["Lee", "Kim", "Park", "Lee", "Kim"];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];
```

<br>

### 5. 구조 분해 할당

```js
const person = {
    name: 'Lee Sun-Hyoup',
    familyName: 'Lee',
    givenName: 'Sun-Hyoup'
    company: 'Cobalt. Inc.',
    address: 'Seoul',
}

const { familyName, givenName } = person;
```

<br>

### 6. 객체 생성시 키 생략하기

```js
const name = "Lee Sun-Hyoup";
const company = "Cobalt";
const person = {
  name,
  company,
};
console.log(person);
// {
//   name: 'Lee Sun-Hyoup'
//   company: 'Cobalt',
// }
```

<br>

### 7. `!!` 연산자를 사용하여 Boolean 값으로 바꾸기

- `!!` 연산자를 이용하여 `0, null, 빈 문자열, undefined, NaN`을 `false`로 그 외에는 `true`로 변경할 수 있습니다.

```js
const check = (variable) => console.log(!!variable ? variable : "잘못된 값");

check(null); // 잘못된 값
check(3.14); // 3.14
check(undefined); // 잘못된 값
check(0); // 잘못된 값
check("Good"); // Good
check(""); // 잘못된 값
check(NaN); // 잘못된 값
check(5); // 5
```

<br>

## 배열

- 자바스크립트 같은 스크립트 언어는 동적으로 배열의 크기를 증감할 수 있다.
- 원하는 우너소의 index를 알고있다면 `O(1)`로 원소를 찾을 수 있다.
- 중간에 요소를 추가/삭제한 후 순서를 맞추려면(당기기) `O(n)`이 소요된다.
- 추가와 삭제가 반복되는 로직이라면 배열 x
- 배열은 탐색에 특화된 자료구조

<br>

- `push`, `pop` => `O(1)`
- `splice` => `O(n)`

<br>

```js
const arr = [1, 1, 2, 3];

console.log(arr.length); // 4

// index가 number가 아니어도 된다.
// length에 영향을 주지 않음

arr["string"] = 10;
arr[false] = 0;

console.log(arr); // [1, 1, 2, 3, string: 10, false:0 ]
console.log(arr.length); // 4

arr.push(5); // [1, 1, 2, 3, 5, string: 10, false:0 ]
```

<br>

## 연결리스트

- 각 요소를 `포인터`로 연결하여 관리하는 선형 자료구조
- 각 요소는 `노드`라고 부르며 데이터 영역과 포인터 영역으로 구성
- 탐색은 `O(n)`
- 요소의 추가/삭제는 `O(1)`
- `Singly Linked List`, `Doubly Linked List`, `Circular Linked List`

<br>

### `Singly Linked List(단일 연결 리스트)`

- Head에서 Tail까지 단방향으로 이어지는 연결 리스트
- Tail의 포인터는 null을 가리킴

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }
}
```

<br>

### `Doubly Linked List`

- 양방향 연결 리스트
- 포인터가 2개. 각각 next, prev 노드를 가리킴

<br>

### `Circular Linked List(환형 연결리스트)`

- Tail이 Head로 연결되는 연결 리스트
- Tail의 포인터가 Head를 가리킴

<br>

## 큐(Queue)

### 배열 활용 방법. 큐의 크기가 무한정 커질 수 있음

```js
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    // front 값 반환
    return this.queue[this.front];
  }

  size() {
    // queue 길이 반환
    return this.rear - this.front;
  }
}
```

<br>

### 연결리스트 활용 방법

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}
```

<br>

## 해시 테이블

### 해시 충돌 방지 방법

#### 1. 선형 탐사법

- 충돌이 발생하면 옆으로 한 칸 이동
- 충돌이 발생하지 않을 때까지 이동

#### 2. 제곱 탐사법

- 충돌이 발생한 횟수의 제곱만큼 옆으로 이동

#### 3. 이중 해싱

- 충돌이 발생하면 다른 해시 함수를 이용

#### 4. 분리 연결법

- 버킷의 값을 연결 리스트를 사용하여 충돌이 발생하면 리스트에 값을 추가
- 하나의 버킷이 무한정 커질 수 있음

<br>

### Map 으로 해시테이블 만들기

```js
const table = new Map();
table.set("key", 100);
table.set("key2", "Hello");
console.log(table["key"]); // undefined
console.log(table.get("key")); // 100
const object = { a: 1 };
table.set(object, "A1"); // Map은 Object도 Key로 쓸 수 있다.
console.log(table.get(object)); // A1
table.delete(object);
console.log(table.get(object)); // undefined
console.log(table.keys()); // {'key', 'key2'}
console.log(table.values()); // {100, 'Hello'}
table.clear();
console.log(table.values()); // {}
```

### Set 으로 해시테이블 만들기

- Key 와 Value 가 동일하게 들어감

```js
const table = new Set();
table.add("key"); // KeyValue
table.add("key2");
console.log(table.has("key")); // true
console.log(table.has("key3")); // false
table.delete("key2");
console.log(table.has("key2")); // false
table.add("key3");
console.log(table.size); // 2
table.clear();
console.log(table.size); // 0
```

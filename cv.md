# Alexander Tabakaev / alvltab

*junior front-end developer*

![My portrait](/portrait-mini.jpg)

## Contacts
* [Telegram](https://t.me/alvltab)

* [GitHub](https://github.com/alvltab)

* [Discord](https://discord.com/users/alvltab#9694)

* [Habr](https://habr.com/ru/users/alvltab/)

## About

I'm a good guy from Siberia, who likes to help people and do programming.

***

## Skills

- langs:
    - English — pre-intermediate
    - Russian — native

* hards:
    * markup:
        * html, css — intermediate
    * programming:
        * JavaScript, TypeScript — intermediate
        * python, clojure — basics
    * version control:
        * git — basics
    * code editor and IDE:
        * VS Code — intermediate
    * frameworks and libraries:
        * React, Redux — basics
    
- softs:
    - conflict management
    - decision-making
    - problem-solving
    - critical thinking
    - opennes to criticism
    - adaptability

### Example of code — [«Alphabetic Anagrams» (codewars kata 3)](https://www.codewars.com/kata/reviews/53e612fe7e5c2caffd0000ef/groups/62eb6d5a3448e40001e3248f)

```
function listPosition(word) {
  // if there is only one letter
  if (word.length <= 1) {return word.length};
  
  let letters = word.split('');
  
  // count repetitions of letters
  function kit(letters) {
    return letters.reduce((sum, el) => {
      sum[el] = (sum[el] || 0) + 1;
      return sum;
    }, {})
  }
  
  // if there is only one letter multiply times
  if (kit(letters).length === 1) {return 1};
  
  // iterative factorial
  function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
  
  // count sum of permutations for kit of letters;
  function countPermuts(letters) {
    let kitl = kit(letters);

    let subPermuts = Object.keys(kitl)
                           .map((key) => factorial(kitl[key]))
                           .reduce((sum, el) => sum * el, 1);
    
    return factorial(letters.length) / subPermuts;
  }
  
  // and finally return number of word in permutations
  function forecast(letters) {
    let counter = 1;
    
    let remained = letters.slice(0);
    while (remained.length > 1) {
      let sorted = [...remained].sort();
      counter += countPermuts(remained)
        * sorted.indexOf(remained[0])
        / remained.length;
      remained = remained.slice(1);
    }
    
    return counter;
  }
  
  return forecast(letters);
}
```

### Projects
See my projects at [codepen.io](https://codepen.io/alvltab) or [jsfiddle.net](https://jsfiddle.net/alvltab)

## Education and courses
- 2014–2019 — Siberian State Medical University, Pharmacy Specialty
- 2019–2021 — Siberian State Medical University, Residency in Management and Economics of Pharmacy

* freeCodeCamp:
    * Responsive Web Design
    * JavaScript Algorithms and Data Structures
    * Front End Development Libraries

## Experience
* 2014–2015 — freelance in rewriting and copywriting
* 2015–2016 — project «Fleming» (medical news), scientific and grammar editor
* 2016–2021 — «Medical Channel (Medach)» (medical mass media), scientific and grammar editor
* 2019–2022 — freelance in medical copywriting
* 2020–2021 — Ltd «"Vita" Pharmacy», pharmacist
* 2021–present — Management Company «Edelweiss», head of subsidized medicines provision department

***

2022, alvltab

[![RS School logo](/rs_school_js.png)](https://rs.school/js/)
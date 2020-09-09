import React, { Component } from 'react';
import Split from './composition/Split';
import './App.css'
import Tooltip from './composition/Tooltip'
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import Tabs from './conditionalrendering/Tabs';
import Bomb from './state-drills/Bomb';
import DemonymApp from './demonymapp/demonymApp/demonymApp';
import Accordian from './state-drills/Accordian';

const tabsProp = [
  {
    name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.'
  },
  {
    name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.'
  },
];

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

// Promises
function doTask(name) {
  const p = new Promise((resolve, reject) => {
    console.log(`${name} has started`);
    const duration = Math.floor(Math.random() * 5000);
    setTimeout(() => {
      resolve(`${name} has ended after ${duration} milliseconds`);
    }, duration);
  });
  return p;
}

// doTask('A')
//   .then(result => {
//     console.log(result);
//   });

// doTask('B')
//   .then(result => {
//     console.log(result);
//   });

// doTask('C')
//   .then(result => {
//     console.log(result);
//   });

//Run tasks asynchonusly
// Promise
//   .all([
//     doTask('A'),
//     doTask('B'),
//     doTask('C')
//   ])
//   .then(results => {
//     // first console.log the results
//     results.forEach(result => console.log(result));
//     return doTask('D');
//   })
//   .then(result => {
//     console.log(result);
//   });


// Prints B then C, then D
// doTask('B')
//   .then(result => {
//     console.log(result);
//     return doTask('C');
//   })
//   .then(result => {
//     console.log(result);
//     return doTask('D');
//   })
//   .then(result => {
//     console.log(result);
//   });

// doTask('D')
//   .then(result => {
//     console.log(result);
//   });

// doTask('E')
//   .then(result => {
//     console.log(result);
//   });

// doTask('F')
//   .then(result => {
//     console.log(result);
//   });


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>YOUR APPLICATION NAME!</h1>
        <div>Hello!</div>
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} /> */}
        {/* <TheDate />
        <Counter count={123} step={4}></Counter>
        <Tabs tabs={tabsProp}></Tabs> */}
        {/* <Bomb></Bomb> */}
        <Accordian sections={sections}/>
      </div>
    );
  }
}

// make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
    ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)

// function App() {
//   return (
//     <main className='App'>
//       <Split className='left' flexBasis='2'>
//         This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
//         {/* make another tooltip directly inside the App */}
//         <Tooltip message='one more tooltip message'>
//           Necessitatibus?
//         </Tooltip>
//       </Split>
//       <Split>
//         <h1>Some Content</h1>
//         <h2></h2>
//       </Split>
//       <Split className='right'>
//         This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
//       </Split>
//     </main>
//   )
// }

export default App;
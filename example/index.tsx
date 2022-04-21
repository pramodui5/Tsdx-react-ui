
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
// import {EnbdButton} from 'enbd/dist/EnbdButton'

const App = () => {
  return (
    <div>
      <Thing />
      {/* <EnbdButton label='MUI Button'></EnbdButton> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

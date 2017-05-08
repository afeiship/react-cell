import './dev.scss';
import {ReactCells, ReactCell, ReactCellLeft, ReactCellRight, ReactCellBody} from './main';

import Icon1Image from './assets/icon1.jpg';
import Icon2Image from './assets/icon2.jpg';
import Icon3Image from './assets/icon3.jpg';


/*===example start===*/
class App extends React.Component {
  render() {
    return (
      <div className="hello-react-cell">
        <ReactCells border={false}>
          <ReactCell>
            <ReactCellLeft>
              <img src={Icon1Image} width="24" alt=""/>
            </ReactCellLeft>
            <ReactCellBody>
              购物车
            </ReactCellBody>
            <ReactCellRight />
          </ReactCell>


          <ReactCell>
            <ReactCellLeft>
              <img src={Icon2Image} width="24" alt=""/>
            </ReactCellLeft>
            <ReactCellBody>
              搜索
            </ReactCellBody>
            <ReactCellRight>
              <img src="http://image.flaticon.com/icons/png/128/126/126490.png" width="12" alt=""/>
            </ReactCellRight>
          </ReactCell>


          <ReactCell>
            <ReactCellBody>
              <div className="row">
                <div className="left">搜索</div>
                <div className="right" style={{textAlign: 'right', color: '#999'}}>xljldsf</div>
              </div>
            </ReactCellBody>
            <ReactCellRight>
              <img src="http://image.flaticon.com/icons/png/128/126/126490.png" width="12" alt=""/>
            </ReactCellRight>
          </ReactCell>


        </ReactCells>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
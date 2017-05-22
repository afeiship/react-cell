import './dev.scss';

import {ReactCell, ReactCellBody, ReactCellLeft, ReactCellRight, ReactCells} from './main';

import Icon1Image from './assets/icon1.jpg';
import Icon2Image from './assets/icon2.jpg';
import Icon3Image from './assets/icon3.jpg';

/*===example start===*/
class App extends React.Component {
  render() {
    return (
      <div className="hello-react-cells">
        <ReactCells>
          <ReactCell>
            <ReactCellLeft>
              <img src={Icon1Image} width="24" alt=""/>
            </ReactCellLeft>
            <ReactCellBody>
              购物车
            </ReactCellBody>
            <ReactCellRight style={{color:'#f00',fontSize:'16px'}}>*</ReactCellRight>
          </ReactCell>


          <ReactCell>
            <ReactCellLeft>
              <img src={Icon2Image} width="24" alt=""/>
            </ReactCellLeft>
            <ReactCellBody>
              <span style={{fontSize:'28px'}}>搜索</span>
            </ReactCellBody>
            <ReactCellRight>
              <img src="http://image.flaticon.com/icons/png/128/126/126490.png" width="12" alt=""/>
            </ReactCellRight>
          </ReactCell>


          <ReactCell autoHeight={true}>
            <ReactCellBody>
              <div className="row">
                <div className="left">搜索 <br/> abc <br/>1234</div>
                <div className="right" style={{textAlign: 'right', color: '#999'}}>xljldsf</div>
              </div>
            </ReactCellBody>
            <ReactCellRight>
              <img src="http://image.flaticon.com/icons/png/128/126/126490.png" width="12" alt=""/>
            </ReactCellRight>
          </ReactCell>


        </ReactCells>


        <div className="blank-20"></div>
        <div className="blank-20"></div>

         <ReactCells innerPadding={false}>
          <ReactCell>
            <ReactCellLeft>
              <img src={Icon1Image} width="24" alt=""/>
            </ReactCellLeft>
            <ReactCellBody>
              购物车
            </ReactCellBody>
            <ReactCellRight style={{color:'#f00',fontSize:'16px'}}>*</ReactCellRight>
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

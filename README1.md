# react-cells
> React cells component.


## properties:
```javascript
//ReactCells:
/*===properties start===*/
static propTypes = {
  className: PropTypes.string,
  leftBorder: PropTypes.bool,
  borders: PropTypes.oneOf([
    'top',
    'bottom',
    'both'
  ])
};

static defaultProps = {
  leftBorder: true,
  borders: 'both'
};
/*===properties end===*/
  
//ReactCell
/*===properties start===*/
static propTypes = {
  className: PropTypes.string,
  clickable: PropTypes.bool
};

static defaultProps = {
  borders: 'both',
  clickable: true
};
/*===properties end===*/

```

## usage:
```jsx
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
```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


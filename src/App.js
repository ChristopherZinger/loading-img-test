import React from 'react';
import './App.css';

import Loading from './components/Loading/Loading';
import Images from './components/Images/Images';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img: [
        'imgs/project_AOM.gif',
        'imgs/project_Dijkstra_krotszy.gif',
        'imgs/project_PortfolioPage.gif',
        'imgs/project_spaceshipGame.gif',
        'imgs/project_typingforfun.gif',
        'imgs/quiz_creator_node.gif',
        'imgs/todo-app.gif',
      ],
      imgsAreReady: false,
    }
  }

  imgsReadyStatusUpdate(isReady) {
    this.setState({ imgsAreReady: isReady })
  }




  render() {
    return (
      <div className="App">
        {
          this.imgsAreReady ?

            <Images imgs={this.state.img} />
            : <Loading imgs={this.state.img} isReady={this.imgsReadyStatusUpdate.bind(this)} />
        }
      </div>
    );
  }

}

export default App;

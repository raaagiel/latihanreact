import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Content from './component/content';
import Container from './component/container';
import Spinner from './component/spin'

// import Spinner from './component/spin';

class App extends Component {
  state = {
    stnk: [],
    loading: true,
    angka: 0
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        stnk:
          [{ nama: 'Bobi', kendaraan: 'ambulance', warna: 'hotpink' },
          { nama: 'Zaky', kendaraan: 'Busway', warna: 'Hitam' },
          { nama: 'Ijal', kendaraan: 'Helikopter', warna: 'hijau' }
          ], loading: false
      })
    }, 3000)
  }
  tambahangkaonclick = (a) => {
    this.setState((prevstate) => {
      return {
        angka: prevstate.angka + 1
      }

    })
  }

  render() {
    const { loading, stnk } = this.state
    if (loading) {

      return <center> <div><Spinner></Spinner></div> </center>
    }
    return (
      <div>
        <Header username={'Yuhuu'} />
        <div>{this.state.angka}</div>
        <Content stnk={stnk} tambahangka={this.tambahangkaonclick} />

        <center>
          <Container>

          </Container>
        </center>
      </div>
    );
  }
}
export default App
/**
 * Created by chris on 10/03/17.
 */
const API_KEY = 'AIzaSyBjkq8WtVUEGRfCnKrcHpSG-T8A1EqoJwE'
export class Container extends React.Component {
  render() {
       const style = {
           width: '100vw',
           height: '100vh'
       }
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>
          <Map google={this.props.google}/>
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: API_KEY
})(Container)
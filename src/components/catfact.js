import * as React from "react"
import { 
    bodytext,
    error
    } from '../components/layout.module.css'
  

class CatFact extends React.Component {
    state = {
      loading: true,
      error: false,
      fetchedData: []
    }
  
    componentDidMount() {
      fetch('https://catfact.ninja/fact').then(response => {
        return response.json()
      }).then(json => {
        this.setState({
          fetchedData: json.fact,
          loading: false
        })
      })
    }
  
    render() {
      
      const {loading, fetchedData} = this.state
      return(
      <div>
        {loading ? (
        
          <p className={error}>LOADING...</p>
        ) : (
          <p className={bodytext}>{fetchedData}</p>
        )}
        
      </div>
      )
  
    }
  }
  export default CatFact
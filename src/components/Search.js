import "../css/Main.css";
import React from "react";


class Search extends React.Component {
    
      constructor(props) {
        super(props);
        this.state = {
          title: "Search Page",
          isLoaded: false,
          items: []
        };
      }

   /* componentDidMount() {
        let url = "https://tastedive.com/api/similar?q=league-of-legends&type=games&info=1&k=423979-David-BAQ5JQRC";
        fetch(url)
        .then(res => {console.log(res.json())})
      .then(
            (result) => {
            this.setState({
                isLoaded: true,
                items: result.items
            });
          })
    }*/

    render() {
          return (
            /*<ul>
              {this.state.items.map(item => (
                <li key={item.name}>
                  {item.name}
                </li>
              ))}
            </ul>
          */
         
          <div className="container">
              <div className="navigation">
                  <div className="div_title">
                      <h1 className="title">{ this.title }</h1>
                  </div>
                  <div className="div_search">
                      <form className="form_search" action="/search" method="POST">
                          <input className="input_search" type="text" name="search-bar" required size="100"></input>
                          <button className="button_search" type="submit" >search</button>
                      </form>
                  </div>
              </div>
          </div>
          );}    
}

export default Search; 
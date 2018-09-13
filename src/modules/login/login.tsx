import axios from 'axios';
import * as React from 'react';
import {IUser} from "../../shared/model/user.model";

class Login extends React.Component {

    public state = {
        persons: [] as ReadonlyArray<IUser>
    }

    public componentDidMount() {
        axios.get(`https://api.github.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({persons});
            })
    }

    public render() {
        return (
            <div className="Login">
                <div className="row">
                    {this.state.persons.map((person, i) => (
                        <div key={`user-${i}`} className="card col-sm-6 col-md-3 col-lg-3 col-xl-2" style={{margin: '10px'}}>
                            <img className="card-img-top"
                                 src={person.avatar_url}
                                 alt="Card image cap"
                                 width="30px"
                                 height="150px"/>
                            <div className="card-body">
                                <h5 className="card-title">{person.login}</h5>
                                <a href={person.html_url} target="_blank">Enlace a repositorio</a><br/>
                                <button className="btn btn-primary">Ver repositorios</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Login;
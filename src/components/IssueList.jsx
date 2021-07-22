import React from 'react';
import Issue from './Issue';

class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
        }
    }

    componentDidMount() {
        this._fetchIssues()
    }

    _fetchIssues = async () => {
        const url = 'https://api.github.com/repos/facebook/create-react-app/issues';
        const response = await fetch(url)
            .then(response => response.json())
        this.setState({
            issues: response
        })
        
    }

    render() {
        return (
            <div>
                <h2>facebook/<b>create-react-app</b></h2>
                <div class="container">
                    <table>
                        <tr class="border_bottom">
                            <td><b>916 Open </b>✓ 6,177 Closed </td>
                        </tr>
                        {this.state.issues.map((issue, index) => {
                                return (
                                    <Issue 
                                        key={index}
                                        url={issue.url}
                                        title={issue.title}
                                        number={issue.number}
                                        user={issue.user.login}
                                        body={issue.body}/>
                                )
                            })}
                    </table>
                </div>
            </div>
        )
    }


}

export default IssueList;
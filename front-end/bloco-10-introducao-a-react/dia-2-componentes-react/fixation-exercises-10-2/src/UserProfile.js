import React from "react";

class UserProfile extends React.Component {
    render() {
        const { name, email } = this.props.user;
        return (
            <div>
                <p>{name}, {email}</p>
            </div>
        )
    }
}

export default UserProfile
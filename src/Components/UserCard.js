import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <span>{user.name[0]}</span>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
      Contact Info : {user.email}   
    </Card.Text>
    <Card.Text>
      <h3>{user.email}</h3>
      <p>{user.address.city}{user.address.street}</p>
      <p>{user.phone}</p>
    </Card.Text>
    <Button variant="primary">  {" "}  <Link to={`/profile/${user.id}`} > View Profile</Link> {" "} </Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default UserCard

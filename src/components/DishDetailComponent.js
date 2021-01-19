import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';

function RenderDish({ dish, comments }) {
    if (dish != null) {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    < RenderComments comments={comments} />
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

function RenderComments({ comments }) {

    const comm = comments.map((comment) => {
        //let date = new Date(comment.date);
        return (
            <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
            </div>
        );
    });

    if (comments != null) {
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">{comm}</ul>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            < RenderDish dish={props.dish} comments={props.comments} />
        </div>
    );
}

export default DishDetail
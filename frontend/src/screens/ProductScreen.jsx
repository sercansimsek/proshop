import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Row,
	Col,
	Image,
	ListGroup,
	ListGroupItem,
	Card,
	Button,
} from "react-bootstrap";
import axios from "axios";
import { Rating } from "../components/Rating";

export const ProductScreen = () => {
	const [product, setProduct] = useState([]);
	const { id: productId } = useParams();

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get(`/api/products/${productId}`);
			setProduct(data);
		};

		fetchProducts();
	}, [productId]);

	return (
		<>
			<Link className="btn btn-light my-3" to="/">
				Go Back
			</Link>

			<Row>
				<Col md={5}>
					<Image src={product.image} alt={product.name} fluid></Image>
				</Col>

				<Col md={4}>
					<ListGroup variant="flush">
						<ListGroupItem>
							<h3>{product.name}</h3>
						</ListGroupItem>

						<ListGroupItem>
							<Rating
								value={product.rating}
								text={`${product.numReviews} reviews`}
							></Rating>
						</ListGroupItem>

						<ListGroupItem>Description: {product.description}</ListGroupItem>
					</ListGroup>
				</Col>

				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroupItem>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${product.price}</strong>
									</Col>
								</Row>
							</ListGroupItem>

							<ListGroupItem>
								<Row>
									<Col>Status:</Col>
									<Col>
										<strong>
											{product.countInStock > 0 ? "In Stock" : "Out of Stock"}
										</strong>
									</Col>
								</Row>
							</ListGroupItem>

							<ListGroupItem>
								<Button
									className="btn-block"
									type="button"
									disabled={product.countInStock === 0}
								>
									Add to Cart
								</Button>
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

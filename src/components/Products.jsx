import useData from "../hooks/useData";
import "../styles/Product.css";

const Products = () => {
    const { loading, error, data } = useData();

    if (loading) return <h2 className="status">Loading Products...</h2>;

    if (error) return <h2 className="status">Something went wrong!</h2>;

    return (
        <section className="products">
            <h2 className="products-title">
                Featured Products
            </h2>

            <div className="products-grid">
                {data?.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-image-container">
                            <img
                                loading="lazy"
                                src={product.image}
                                alt={product.title}
                                className="product-image"
                            />
                        </div>

                        <div className="product-content">
                            <h3 className="product-title">
                                {product.title}
                            </h3>

                            <p className="product-category">
                                {product.category}
                            </p>

                            <p className="product-description">
                                {product.description.slice(0, 80)}...
                            </p>

                            <div className="product-footer">
                                <span className="product-price">
                                    ${product.price}
                                </span>

                                <span className="product-rating">
                                    ⭐ {product.rating.rate}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Products;
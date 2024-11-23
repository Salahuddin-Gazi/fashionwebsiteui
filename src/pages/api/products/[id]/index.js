import products from '../../../../../public/data/products.json';

export default function handler(req, res) {
  const { id } = req.query; // Extract the product ID from the query parameters
  const product = products.find((p) => parseInt(p.id) === parseInt(id));

  if (product) {
    res.status(200).json(product); // Respond with the specific product
  } else {
    res.status(404).json({ error: 'Product not found' }); // Handle the case where the product isn't found
  }
}

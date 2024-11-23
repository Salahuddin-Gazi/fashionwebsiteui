import products from '../../../../public/data/products.json';

export default function handler(req, res) {
  if (products) {
    res.status(200).json(products); // Respond with the products JSON
  } else {
    res.status(500).json({ error: 'Failed to load products' }); // Handle failure case
  }
}

import data from "../../../data/db.json";

export default async (req, res) => {

  const httpMethod = req.method;
  const { _id, name, description, price } = req.body;

  switch (httpMethod) {

    case "GET":
      res.status(200).json(data)
      break;
    
    case "POST":
      res.status(200).json({
        _id: _id,
        name: name,
        description: description,
        price: price
      });
      break;

      default:
        res.setHeader("Allor", ["GET", "POST"]);
        res.status(405).end(`Method ${httpMethod} Not Allowed!`)
  }

}

// "_id": "5f2b397f4132b6c235b31496",
// "name": "Café expresso",
// "description": "50ml do mais puro café moído e passado na hora",
// "price": 5.5
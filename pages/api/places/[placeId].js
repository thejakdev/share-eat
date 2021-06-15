import data from "../../../data/db.json";

export default async (req, res) => {

  const httpMethod = req.method;
  const placeId = req.query.placeId;
  const result = data.filter((data) => data._id === placeId);
  const { _id, name, description, price } = req.body;

  switch (httpMethod) {

    case "GET":
      if (result.length > 0) {
        res.status(200).json(result[0])
      } else {
        res.status(404).json({ message: `Place with id ${placeId} not find!` })
      }
      break;
    case "POST":

      res.status(201).json({
        _id: result[0]._id,
        name: result[0].name,
        menuItems: [
          {
            _id: _id,
            name: name,
            description: description,
            price: price
          }
        ]
      });
      break;

      default:
        res.setHeader("Allor", ["GET", "POST"]);
        res.status(405).end(`Method ${httpMethod} Not Allowed!`)
  

  }

}
